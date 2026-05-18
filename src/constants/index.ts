export const MESSAGE_TYPES = {
  PENDING_SUBMISSION: "PENDING_SUBMISSION",
  REQUEST_UPLOAD: "REQUEST_UPLOAD",
  UPLOAD_STATUS: "UPLOAD_STATUS",
  VALIDATE_GITHUB: "VALIDATE_GITHUB",
  GET_PENDING_SUBMISSION: "GET_PENDING_SUBMISSION"
} as const

export const STORAGE_KEYS = {
  SETTINGS: "settings",
  RECENT_UPLOADS: "recentUploads",
  LAST_PROCESSED_SUBMISSION_ID: "lastProcessedSubmissionId",
  PENDING_SUBMISSION: "pendingSubmission"
} as const

export const API_ENDPOINTS = {
  LEETCODE_GRAPHQL: process.env.PLASMO_PUBLIC_LEETCODE_GRAPHQL ?? "https://leetcode.com/graphql",
  GITHUB_API: process.env.PLASMO_PUBLIC_GITHUB_API ?? "https://api.github.com"
} as const
