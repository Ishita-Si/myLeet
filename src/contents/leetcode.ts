import { MESSAGE_TYPES } from "~constants"
import { fetchSubmissionMetadata } from "~services/leetcode/extractor"
import { getLastSubmissionId, getSettings, markLastSubmissionId, setPendingSubmission } from "~utils/storage"
import { complexitySchema } from "~utils/validation"
import type { PendingSubmission } from "~types"

const BUTTON_ID = "leetcode-github-organizer-upload-btn"
let currentPending: PendingSubmission | null = null

const getSubmissionIdFromLocation = (): string | null => {
  const match = window.location.pathname.match(/submissions\/detail\/(\d+)/)
  return match?.[1] ?? null
}

const isAcceptedVisible = (): boolean => /Accepted/i.test(document.body.innerText)

const removeButton = () => {
  document.getElementById(BUTTON_ID)?.remove()
}

const createUploadButton = () => {
  if (!currentPending || document.getElementById(BUTTON_ID)) return

  const button = document.createElement("button")
  button.id = BUTTON_ID
  button.textContent = "Push to GitHub"
  button.style.position = "fixed"
  button.style.right = "20px"
  button.style.bottom = "20px"
  button.style.zIndex = "99999"
  button.style.padding = "10px 14px"
  button.style.borderRadius = "8px"
  button.style.border = "1px solid #1d4ed8"
  button.style.background = "#2563eb"
  button.style.color = "white"
  button.style.fontWeight = "600"
  button.style.cursor = "pointer"

  button.onclick = async () => {
    const settings = await getSettings()
    if (!settings.github.token || !settings.github.owner || !settings.github.repo) {
      window.alert("Please configure GitHub settings in extension popup first.")
      return
    }

    const timeComplexity = window.prompt("Enter Time Complexity", "O(n)") ?? ""
    const spaceComplexity = window.prompt("Enter Space Complexity", "O(1)") ?? ""
    const parsed = complexitySchema.safeParse({ timeComplexity, spaceComplexity })
    if (!parsed.success) {
      window.alert("Invalid TC/SC input. Example: O(n), O(1)")
      return
    }

    button.textContent = "Uploading..."
    button.setAttribute("disabled", "true")

    const response = await chrome.runtime.sendMessage({
      type: MESSAGE_TYPES.REQUEST_UPLOAD,
      payload: { metadata: currentPending?.metadata, complexity: parsed.data }
    })

    if (response?.ok) {
      window.alert(`Uploaded to GitHub: ${response.filePath}`)
      currentPending = null
      removeButton()
    } else {
      window.alert(response?.error ?? "Upload failed")
      button.textContent = "Push to GitHub"
      button.removeAttribute("disabled")
    }
  }

  document.body.appendChild(button)
}

const detectAndEmit = async (): Promise<void> => {
  const submissionId = getSubmissionIdFromLocation()
  if (!submissionId || !isAcceptedVisible()) return

  const lastId = await getLastSubmissionId()
  if (lastId === submissionId) return

  const metadata = await fetchSubmissionMetadata(submissionId)
  await markLastSubmissionId(submissionId)

  currentPending = { metadata, detectedAtIso: new Date().toISOString() }
  await setPendingSubmission(currentPending)
  await chrome.runtime.sendMessage({ type: MESSAGE_TYPES.PENDING_SUBMISSION, payload: currentPending })

  createUploadButton()
}

let timer: number | null = null
const scheduleDetection = () => {
  if (timer) window.clearTimeout(timer)
  timer = window.setTimeout(() => void detectAndEmit(), 600)
}

const observer = new MutationObserver(scheduleDetection)
observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true })
window.addEventListener("popstate", () => {
  currentPending = null
  removeButton()
  scheduleDetection()
})
window.addEventListener("load", scheduleDetection)
scheduleDetection()
