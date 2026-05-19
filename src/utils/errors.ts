export class AppError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "INVALID_TOKEN"
      | "REPO_NOT_FOUND"
      | "RATE_LIMIT"
      | "NETWORK"
      | "VALIDATION"
      | "DUPLICATE"
      | "UNKNOWN",
    public readonly retryable = false
  ) {
    super(message)
  }
}

export const toAppError = (error: unknown): AppError => {
  if (error instanceof AppError) return error
  if (error instanceof Error) return new AppError(error.message, "UNKNOWN", false)
  return new AppError("Unexpected error", "UNKNOWN", false)
}
// ..