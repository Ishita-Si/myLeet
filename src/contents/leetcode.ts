import { MESSAGE_TYPES } from "~constants"
import { fetchSubmissionMetadata } from "~services/leetcode/extractor"
import { getLastSubmissionId, markLastSubmissionId, setPendingSubmission } from "~utils/storage"

const getSubmissionIdFromLocation = (): string | null => {
  const match = window.location.pathname.match(/submissions\/detail\/(\d+)/)
  return match?.[1] ?? null
}

const isAcceptedVisible = (): boolean => /Accepted/i.test(document.body.innerText)

const detectAndEmit = async (): Promise<void> => {
  const submissionId = getSubmissionIdFromLocation()
  if (!submissionId || !isAcceptedVisible()) return

  const lastId = await getLastSubmissionId()
  if (lastId === submissionId) return

  const metadata = await fetchSubmissionMetadata(submissionId)
  await markLastSubmissionId(submissionId)
  const pending = { metadata, detectedAtIso: new Date().toISOString() }
  await setPendingSubmission(pending)

  await chrome.runtime.sendMessage({ type: MESSAGE_TYPES.PENDING_SUBMISSION, payload: pending })
}

let timer: number | null = null
const scheduleDetection = () => {
  if (timer) window.clearTimeout(timer)
  timer = window.setTimeout(() => void detectAndEmit(), 600)
}

const observer = new MutationObserver(scheduleDetection)
observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true })
window.addEventListener("popstate", scheduleDetection)
window.addEventListener("load", scheduleDetection)
scheduleDetection()
