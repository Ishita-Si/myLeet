import { leetcodeGraphql } from "./client"
import { AppError } from "~utils/errors"
import type { LeetCodeProblemMetadata } from "~types"

interface SubmissionDetailData {
  submissionDetails: {
    id: string
    lang: { name: string; verboseName: string }
    runtime: string
    memory: string
    code: string
    timestamp: string
    question: {
      title: string
      titleSlug: string
      difficulty: "Easy" | "Medium" | "Hard"
      topicTags: Array<{ name: string }>
    }
  }
}

const query = `
query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    id
    lang { name verboseName }
    runtime
    memory
    code
    timestamp
    question {
      title
      titleSlug
      difficulty
      topicTags { name }
    }
  }
}`

export const fetchSubmissionMetadata = async (submissionId: string): Promise<LeetCodeProblemMetadata> => {
  const numericId = Number(submissionId)
  if (Number.isNaN(numericId)) throw new AppError("Invalid submission id", "VALIDATION")

  const data = await leetcodeGraphql<SubmissionDetailData>({
    query,
    variables: { submissionId: numericId },
    operationName: "submissionDetails"
  })

  const details = data.submissionDetails
  if (!details?.question?.titleSlug) throw new AppError("Submission metadata unavailable", "VALIDATION")

  return {
    title: details.question.title,
    slug: details.question.titleSlug,
    difficulty: details.question.difficulty,
    topicTags: details.question.topicTags.map((tag) => tag.name),
    language: details.lang.name,
    code: details.code,
    runtime: details.runtime,
    memory: details.memory,
    submissionId: details.id,
    submittedAtIso: new Date(Number(details.timestamp) * 1000).toISOString(),
    url: `https://leetcode.com/problems/${details.question.titleSlug}/`
  }
}
