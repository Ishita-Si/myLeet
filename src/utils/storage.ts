import { STORAGE_KEYS } from "~constants"
import type { ExtensionSettings, UploadRecord } from "~types"

export const getSettings = async (): Promise<ExtensionSettings | null> => {
  const result = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS)
  return result[STORAGE_KEYS.SETTINGS] ?? null
}

export const setSettings = async (settings: ExtensionSettings): Promise<void> => {
  await chrome.storage.local.set({ [STORAGE_KEYS.SETTINGS]: settings })
}

export const addUploadRecord = async (record: UploadRecord): Promise<void> => {
  const result = await chrome.storage.local.get(STORAGE_KEYS.RECENT_UPLOADS)
  const previous: UploadRecord[] = result[STORAGE_KEYS.RECENT_UPLOADS] ?? []
  await chrome.storage.local.set({ [STORAGE_KEYS.RECENT_UPLOADS]: [record, ...previous].slice(0, 20) })
}
