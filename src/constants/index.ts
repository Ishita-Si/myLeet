export const MESSAGE_TYPES = {
  ACCEPTED_SUBMISSION_DETECTED: "ACCEPTED_SUBMISSION_DETECTED",
  SAVE_COMPLEXITY: "SAVE_COMPLEXITY",
  UPLOAD_STATUS: "UPLOAD_STATUS"
} as const

export const STORAGE_KEYS = {
  SETTINGS: "settings",
  RECENT_UPLOADS: "recentUploads"
} as const

export const API_ENDPOINTS = {
  LEETCODE_GRAPHQL: process.env.PLASMO_PUBLIC_LEETCODE_GRAPHQL ?? "https://leetcode.com/graphql",
  GITHUB_API: process.env.PLASMO_PUBLIC_GITHUB_API ?? "https://api.github.com"
} as const
