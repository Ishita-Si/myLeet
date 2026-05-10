export type Difficulty = "Easy" | "Medium" | "Hard"

export type SupportedLanguage = "cpp" | "python" | "java" | "javascript" | "typescript"

export interface LeetCodeProblemMetadata {
  title: string
  slug: string
  difficulty: Difficulty
  topicTags: string[]
  language: string
  code: string
  runtime: string
  memory: string
  submittedAtIso: string
  url: string
}

export interface ComplexityInput {
  timeComplexity: string
  spaceComplexity: string
}

export interface GithubConfig {
  token: string
  owner: string
  repo: string
  branch: string
  basePath: string
}

export interface UploadRecord {
  id: string
  title: string
  filePath: string
  uploadedAtIso: string
  success: boolean
  message: string
}

export interface ExtensionSettings {
  github: GithubConfig
  autoUploadEnabled: boolean
}
