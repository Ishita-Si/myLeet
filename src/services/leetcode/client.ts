import { API_ENDPOINTS } from "~constants"

interface GraphqlRequest<T> {
  query: string
  variables: Record<string, unknown>
  operationName: string
}

const getCsrfToken = (): string => {
  const match = document.cookie.match(/(?:^|;) *csrftoken=([^;]*)/)
  return match ? match[1] : ""
}

export const leetcodeGraphql = async <T>(payload: GraphqlRequest<T>): Promise<T> => {
  const headers: Record<string, string> = { "content-type": "application/json" }
  const csrf = getCsrfToken()
  if (csrf) headers["x-csrftoken"] = csrf

  const response = await fetch(API_ENDPOINTS.LEETCODE_GRAPHQL, {
    method: "POST",
    headers,
    credentials: "include",
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    throw new Error(`LeetCode API error: ${response.status} - ${text}`)
  }
  const data = await response.json()
  if (data.errors?.length) throw new Error(data.errors[0].message)
  return data.data as T
}
