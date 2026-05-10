export type Difficulty = "Easy" | "Medium" | "Hard"

export interface LeetCodeProblemMetadata {
  title: string
  slug: string
  difficulty: Difficulty
  topicTags: string[]
  language: string
  code: string
  runtime: string
  memory: string
  submissionId: string
  submittedAtIso: string
  url: string
}

export interface ComplexityInput {
  timeComplexity: string
  spaceComplexity: string
}

export interface PendingSubmission {
  metadata: LeetCodeProblemMetadata
  detectedAtIso: string
}

export interface GithubConfig {
  token: string
  owner: string
  repo: string
  branch: string
  basePath: string
}

export interface ExtensionSettings {
  github: GithubConfig
  autoUploadEnabled: boolean
  askComplexityOnAccepted: boolean
  maxUploadRetries: number
}

export interface UploadRecord {
  id: string
  title: string
  filePath: string
  uploadedAtIso: string
  success: boolean
  message: string
}

export interface UploadRequest {
  metadata: LeetCodeProblemMetadata
  complexity: ComplexityInput
}
