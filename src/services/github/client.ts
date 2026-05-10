import { API_ENDPOINTS } from "~constants"
import type { GithubConfig } from "~types"

export class GithubClient {
  constructor(private readonly config: GithubConfig) {}

  private get headers() {
    return {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${this.config.token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  }

  async getFile(path: string): Promise<{ sha: string } | null> {
    const url = `${API_ENDPOINTS.GITHUB_API}/repos/${this.config.owner}/${this.config.repo}/contents/${path}?ref=${this.config.branch}`
    const response = await fetch(url, { headers: this.headers })
    if (response.status === 404) return null
    if (!response.ok) throw new Error(`GitHub getFile failed (${response.status})`)
    return response.json()
  }

  async putFile(path: string, content: string, message: string, sha?: string): Promise<void> {
    const url = `${API_ENDPOINTS.GITHUB_API}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`
    const payload = { message, content: btoa(unescape(encodeURIComponent(content))), branch: this.config.branch, sha }
    const response = await fetch(url, { method: "PUT", headers: { ...this.headers, "content-type": "application/json" }, body: JSON.stringify(payload) })
    if (!response.ok) throw new Error(`GitHub putFile failed (${response.status})`)
  }
}
