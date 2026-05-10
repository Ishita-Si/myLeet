import { leetcodeGraphql } from "./client"
import type { LeetCodeProblemMetadata } from "~types"

interface QuestionResp { question: { difficulty: "Easy" | "Medium" | "Hard"; topicTags: Array<{ name: string; slug: string }> } }

export const fetchProblemMetadata = async (
  slug: string,
  code: string,
  language: string,
  runtime: string,
  memory: string
): Promise<LeetCodeProblemMetadata> => {
  const query = `query questionData($titleSlug: String!) { question(titleSlug: $titleSlug) { difficulty topicTags { name slug } } }`
  const result = await leetcodeGraphql<QuestionResp>({ query, variables: { titleSlug: slug }, operationName: "questionData" })
  const title = document.title.replace(" - LeetCode", "")
  return {
    title,
    slug,
    difficulty: result.question.difficulty,
    topicTags: result.question.topicTags.map((tag) => tag.name),
    language,
    code,
    runtime,
    memory,
    submittedAtIso: new Date().toISOString(),
    url: window.location.href
  }
}
