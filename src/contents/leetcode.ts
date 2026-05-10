import { MESSAGE_TYPES } from "~constants"
import { fetchProblemMetadata } from "~services/leetcode/extractor"

const extractSubmissionDetailsFromDom = () => {
  const slug = window.location.pathname.split("/").filter(Boolean)[1]
  const accepted = document.body.textContent?.includes("Accepted")
  const runtime = document.body.textContent?.match(/Runtime\s*\n?\s*([\d\s\w.%]+)/i)?.[1]?.trim() ?? "Unknown"
  const memory = document.body.textContent?.match(/Memory\s*\n?\s*([\d\s\w.%]+)/i)?.[1]?.trim() ?? "Unknown"
  const language = (document.querySelector("[data-cy='lang-select']") as HTMLElement)?.innerText?.trim() ?? "Unknown"
  const code = (document.querySelector("code") as HTMLElement)?.innerText ?? ""
  return { slug, accepted, runtime, memory, language, code }
}

const askComplexity = async () => {
  const timeComplexity = window.prompt("Enter time complexity (e.g., O(n))", "O(n)") ?? "N/A"
  const spaceComplexity = window.prompt("Enter space complexity (e.g., O(1))", "O(1)") ?? "N/A"
  return { timeComplexity, spaceComplexity }
}

const observer = new MutationObserver(async () => {
  const details = extractSubmissionDetailsFromDom()
  if (!details.accepted || !details.slug || !details.code) return

  observer.disconnect()
  const complexity = await askComplexity()
  const metadata = await fetchProblemMetadata(details.slug, details.code, details.language, details.runtime, details.memory)
  await chrome.runtime.sendMessage({
    type: MESSAGE_TYPES.ACCEPTED_SUBMISSION_DETECTED,
    payload: { metadata, complexity }
  })
})

observer.observe(document.body, { childList: true, subtree: true })
