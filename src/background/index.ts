import { MESSAGE_TYPES } from "~constants"
import { uploadSubmission } from "~services/github/uploader"
import { addUploadRecord, getSettings } from "~utils/storage"
import type { ComplexityInput, LeetCodeProblemMetadata } from "~types"

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  ;(async () => {
    if (message.type !== MESSAGE_TYPES.ACCEPTED_SUBMISSION_DETECTED) return
    const settings = await getSettings()
    if (!settings?.autoUploadEnabled) return

    const payload = message.payload as { metadata: LeetCodeProblemMetadata; complexity: ComplexityInput }
    try {
      const path = await uploadSubmission(settings.github, payload.metadata, payload.complexity)
      await addUploadRecord({
        id: crypto.randomUUID(),
        title: payload.metadata.title,
        filePath: path,
        uploadedAtIso: new Date().toISOString(),
        success: true,
        message: "Uploaded successfully"
      })
      sendResponse({ ok: true, path })
    } catch (error) {
      const text = error instanceof Error ? error.message : "Unknown error"
      await addUploadRecord({
        id: crypto.randomUUID(),
        title: payload.metadata.title,
        filePath: "",
        uploadedAtIso: new Date().toISOString(),
        success: false,
        message: text
      })
      sendResponse({ ok: false, error: text })
    }
  })()
  return true
})
