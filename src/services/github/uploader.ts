import type { ComplexityInput, GithubConfig, LeetCodeProblemMetadata } from "~types"
import { sanitizeFilename, toTitleCase } from "~utils/sanitize"
import { GithubClient } from "./client"

const extensionFromLanguage = (language: string): string => {
  const map: Record<string, string> = { "C++": "cpp", Python3: "py", Java: "java", JavaScript: "js", TypeScript: "ts" }
  return map[language] ?? "txt"
}

const buildHeaderLines = (metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): string[] => [
  `Question: ${metadata.title}`,
  `Difficulty: ${metadata.difficulty}`,
  "",
  "Topics:",
  ...metadata.topicTags.map((tag) => `- ${tag}`),
  "",
  `Language: ${metadata.language}`,
  "",
  `Time Complexity: ${complexity.timeComplexity}`,
  `Space Complexity: ${complexity.spaceComplexity}`,
  "",
  `Runtime: ${metadata.runtime}`,
  `Memory: ${metadata.memory}`,
  "",
  "Link:",
  metadata.url,
]

const buildCommentHeader = (ext: string, lines: string[]): string => {
  if (ext === "py" || ext === "rb") {
    return lines.map((line) => (line ? `# ${line}` : "#")).join("\n")
  }

  return `/*\n${lines.join("\n")}\n*/`
}

export const buildCommitMessage = (metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): string =>
  `Solved: ${metadata.title}\n\nLanguage: ${metadata.language}\nRuntime: ${metadata.runtime}\nMemory: ${metadata.memory}\nTC: ${complexity.timeComplexity}\nSC: ${complexity.spaceComplexity}`

export const buildFileBody = (metadata: LeetCodeProblemMetadata, complexity: ComplexityInput): string => {
  const ext = extensionFromLanguage(metadata.language)
  const header = buildCommentHeader(ext, buildHeaderLines(metadata, complexity))

  return `${header}\n\n${metadata.code}\n`
}
const BROAD_TOPIC_TAGS = new Set([
  "Array",
  "String",
  "Linked List",
  "Stack/Queue",
  "Hashing",
  "Tree",
  "Heap",
  "Graph",
  "Recursion",
  "Divide and Conquer",
  "Backtracking",
  "Greedy",
  "Dynamic Programming",
  "Binary Search",
  "Two Pointers",
  "Sliding Window",
  "Sorting",
  "Bit Manipulation",
  "Math",
  "Matrix",
  "Trie"

])

const selectPrimaryTopic = (topicTags: string[]): string =>
  topicTags.find((tag) => !BROAD_TOPIC_TAGS.has(tag)) ?? topicTags[0] ?? "Uncategorized"

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

  const folder = toTitleCase(selectPrimaryTopic(metadata.topicTags))
  const topicFolder = sanitizeFilename(folder)
  const directory = config.basePath ? `${config.basePath}/${topicFolder}` : topicFolder
  const ext = extensionFromLanguage(metadata.language)
  const baseName = sanitizeFilename(metadata.title)

  const existing = await client.getDirectory(directory)
  const fileName = nextFileName(existing.filter((item) => item.type === "file").map((item) => item.name), baseName, ext)
  const filePath = `${directory}/${fileName}`

  await client.putFile(filePath, buildFileBody(metadata, complexity), buildCommitMessage(metadata, complexity))
  return filePath
}
