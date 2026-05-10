import type { ComplexityInput, GithubConfig, LeetCodeProblemMetadata } from "~types"
import { sanitizeFilename, toTitleCase } from "~utils/sanitize"
import { GithubClient } from "./client"

const extensionFromLanguage = (language: string): string => {
  const map: Record<string, string> = { "C++": "cpp", Python3: "py", Java: "java", JavaScript: "js", TypeScript: "ts" }
  return map[language] ?? "txt"
}

export const buildCommitMessage = (metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): string =>
  `Solved: ${metadata.title}\n\nLanguage: ${metadata.language}\nRuntime: ${metadata.runtime}\nMemory: ${metadata.memory}\nTC: ${complexity.timeComplexity}\nSC: ${complexity.spaceComplexity}`

export const buildFileBody = (metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): string => `/*
Question: ${metadata.title}
Difficulty: ${metadata.difficulty}

Topics:
${metadata.topicTags.map((tag) => `- ${tag}`).join("\n")}

Language: ${metadata.language}

Time Complexity: ${complexity.timeComplexity}
Space Complexity: ${complexity.spaceComplexity}

Runtime: ${metadata.runtime}
Memory: ${metadata.memory}

Link:
${metadata.url}
*/

${metadata.code}
`

const nextFileName = (existingNames: string[], baseName: string, ext: string): string => {
  let suffix = 1
  let candidate = `${baseName}.${ext}`
  while (existingNames.includes(candidate)) {
    suffix += 1
    candidate = `${baseName}${suffix}.${ext}`
  }
  return candidate
}

export const uploadSubmission = async (config: GithubConfig, metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): Promise<string> => {
  const client = new GithubClient(config)
  await client.validateTokenAndRepo()

  const folder = toTitleCase(metadata.topicTags[0] ?? "Uncategorized")
  const directory = `${config.basePath}/${sanitizeFilename(folder)}`
  const ext = extensionFromLanguage(metadata.language)
  const baseName = sanitizeFilename(metadata.title)

  const existing = await client.getDirectory(directory)
  const fileName = nextFileName(existing.filter((item) => item.type === "file").map((item) => item.name), baseName, ext)
  const filePath = `${directory}/${fileName}`

  await client.putFile(filePath, buildFileBody(metadata, complexity), buildCommitMessage(metadata, complexity))
  return filePath
}
