import { MESSAGE_TYPES } from "~constants"
import { GithubClient } from "~services/github/client"
import { uploadSubmission } from "~services/github/uploader"
import { toAppError } from "~utils/errors"
import { withRetry } from "~utils/retry"
import { addUploadRecord, getPendingSubmission, getSettings, setPendingSubmission } from "~utils/storage"
import type { ComplexityInput, UploadRequest } from "~types"

const inflight = new Set<string>()

const uploadNow = async (payload: UploadRequest) => {
  const dedupeKey = `${payload.metadata.submissionId}:${payload.metadata.language}`
  if (inflight.has(dedupeKey)) throw new Error("Upload already in progress")
  inflight.add(dedupeKey)

  try {
    const settings = await getSettings()
    const filePath = await withRetry(
      () => uploadSubmission(settings.github, payload.metadata, payload.complexity),
      settings.maxUploadRetries
    )

    await addUploadRecord({
      id: crypto.randomUUID(),
      title: payload.metadata.title,
      filePath,
      uploadedAtIso: new Date().toISOString(),
      success: true,
      message: "Uploaded successfully"
    })
    await setPendingSubmission(null)
    return { ok: true, filePath }
  } catch (error) {
    const appError = toAppError(error)
    await addUploadRecord({
      id: crypto.randomUUID(),
      title: payload.metadata.title,
      filePath: "",
      uploadedAtIso: new Date().toISOString(),
      success: false,
      message: appError.message
    })
    return { ok: false, error: appError.message, code: appError.code }
  } finally {
    inflight.delete(dedupeKey)
  }
}

const validateGithub = async () => {
  try {
    const settings = await getSettings()
    const client = new GithubClient(settings.github)
    await client.validateTokenAndRepo()
    return { ok: true as const }
  } catch (error) {
    const appError = toAppError(error)
    return { ok: false as const, error: appError.message, code: appError.code }
  }
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  ;(async () => {
    if (message.type === MESSAGE_TYPES.PENDING_SUBMISSION) {
      sendResponse({ ok: true })
      return
    }

    if (message.type === MESSAGE_TYPES.REQUEST_UPLOAD) {
      sendResponse(await uploadNow(message.payload))
      return
    }

    if (message.type === MESSAGE_TYPES.VALIDATE_GITHUB) {
      sendResponse(await validateGithub())
      return
    }

    if (message.type === MESSAGE_TYPES.GET_PENDING_SUBMISSION) {
      sendResponse({ ok: true, pending: await getPendingSubmission() })
    }
  })()
  return true
})
