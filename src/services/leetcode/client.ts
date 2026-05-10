import { API_ENDPOINTS } from "~constants"

interface GraphqlRequest<T> {
  query: string
  variables: Record<string, unknown>
  operationName: string
}

export const leetcodeGraphql = async <T>(payload: GraphqlRequest<T>): Promise<T> => {
  const response = await fetch(API_ENDPOINTS.LEETCODE_GRAPHQL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload)
  })

  if (!response.ok) throw new Error(`LeetCode API error: ${response.status}`)
  const data = await response.json()
  if (data.errors?.length) throw new Error(data.errors[0].message)
  return data.data as T
}
