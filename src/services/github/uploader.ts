import type { ComplexityInput, LeetCodeProblemMetadata } from "~types"
import { sanitizeFilename, toTitleCase } from "~utils/sanitize"
import { GithubClient } from "./client"
import type { GithubConfig } from "~types"

const extensionFromLanguage = (language: string): string => {
  const map: Record<string, string> = { "C++": "cpp", Python3: "py", Java: "java", JavaScript: "js", TypeScript: "ts" }
  return map[language] ?? "txt"
}

export const buildFileBody = (metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): string => `/*
Question: ${metadata.title}
Difficulty: ${metadata.difficulty}
Language: ${metadata.language}

Time Complexity: ${complexity.timeComplexity}
Space Complexity: ${complexity.spaceComplexity}

Runtime: ${metadata.runtime}
Memory: ${metadata.memory}

Topics:
${metadata.topicTags.map((tag) => `- ${tag}`).join("\n")}

Link:
${metadata.url}
*/

${metadata.code}
`

export const uploadSubmission = async (config: GithubConfig, metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): Promise<string> => {
  const client = new GithubClient(config)
  const primaryTopic = toTitleCase(metadata.topicTags[0] ?? "Uncategorized")
  const baseName = sanitizeFilename(metadata.title)
  const ext = extensionFromLanguage(metadata.language)

  let counter = 1
  let candidate = `${config.basePath}/${primaryTopic}/${baseName}.${ext}`
  while (await client.getFile(candidate)) {
    counter += 1
    candidate = `${config.basePath}/${primaryTopic}/${baseName}${counter}.${ext}`
  }

  const commitMessage = `Solved: ${metadata.title}\n\nLanguage: ${metadata.language}\nRuntime: ${metadata.runtime}\nMemory: ${metadata.memory}\nTC: ${complexity.timeComplexity}\nSC: ${complexity.spaceComplexity}`
  await client.putFile(candidate, buildFileBody(metadata, complexity), commitMessage)
  return candidate
}
