export const withRetry = async <T>(fn: () => Promise<T>, retries: number): Promise<T> => {
  let attempt = 0
  let lastError: unknown
  while (attempt <= retries) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      attempt += 1
      if (attempt <= retries) {
        await new Promise((resolve) => setTimeout(resolve, 500 * attempt))
      }
    }
  }
  throw lastError
}
