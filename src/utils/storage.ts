import { STORAGE_KEYS } from "~constants"
import type { ExtensionSettings, PendingSubmission, UploadRecord } from "~types"

export const defaultSettings: ExtensionSettings = {
  autoUploadEnabled: true,
  askComplexityOnAccepted: true,
  maxUploadRetries: 2,
  github: { token: "", owner: "", repo: "", branch: "main", basePath: "" }
}

export const getSettings = async (): Promise<ExtensionSettings> => {
  const result = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS)
  const saved = result[STORAGE_KEYS.SETTINGS]
  if (!saved) return defaultSettings

  const merged: ExtensionSettings = {
    ...defaultSettings,
    ...saved,
    github: { ...defaultSettings.github, ...saved.github }
  }

  if (merged.github.basePath === "leetcode-solutions") {
    merged.github.basePath = ""
  }

  return merged
}

export const setSettings = async (settings: ExtensionSettings): Promise<void> => {
  await chrome.storage.local.set({ [STORAGE_KEYS.SETTINGS]: settings })
}

export const getPendingSubmission = async (): Promise<PendingSubmission | null> => {
  const result = await chrome.storage.local.get(STORAGE_KEYS.PENDING_SUBMISSION)
  return result[STORAGE_KEYS.PENDING_SUBMISSION] ?? null
}

export const setPendingSubmission = async (pending: PendingSubmission | null): Promise<void> => {
  await chrome.storage.local.set({ [STORAGE_KEYS.PENDING_SUBMISSION]: pending })
}

export const markLastSubmissionId = async (submissionId: string): Promise<void> => {
  await chrome.storage.local.set({ [STORAGE_KEYS.LAST_PROCESSED_SUBMISSION_ID]: submissionId })
}

export const getLastSubmissionId = async (): Promise<string | null> => {
  const result = await chrome.storage.local.get(STORAGE_KEYS.LAST_PROCESSED_SUBMISSION_ID)
  return result[STORAGE_KEYS.LAST_PROCESSED_SUBMISSION_ID] ?? null
}

export const addUploadRecord = async (record: UploadRecord): Promise<void> => {
  const result = await chrome.storage.local.get(STORAGE_KEYS.RECENT_UPLOADS)
  const previous: UploadRecord[] = result[STORAGE_KEYS.RECENT_UPLOADS] ?? []
  await chrome.storage.local.set({ [STORAGE_KEYS.RECENT_UPLOADS]: [record, ...previous].slice(0, 20) })
}
