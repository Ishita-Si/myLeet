import { API_ENDPOINTS } from "~constants"
import type { GithubConfig } from "~types"
import { AppError } from "~utils/errors"

interface ContentItem { name: string; path: string; sha: string; type: "file" | "dir" }

export class GithubClient {
  constructor(private readonly config: GithubConfig) {}

  private get headers() {
    return {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${this.config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json"
    }
  }

  private async request(path: string, init?: RequestInit) {
    const response = await fetch(`${API_ENDPOINTS.GITHUB_API}${path}`, { ...init, headers: this.headers })
    if (response.status === 401) throw new AppError("Invalid GitHub token", "INVALID_TOKEN")
    if (response.status === 404) throw new AppError("Repository or path not found", "REPO_NOT_FOUND")
    if (response.status === 403) throw new AppError("GitHub API rate limited", "RATE_LIMIT", true)
    if (!response.ok) throw new AppError(`GitHub request failed (${response.status})`, "NETWORK", true)
    return response
  }

  async validateTokenAndRepo(): Promise<void> {
    await this.request("/user")
    await this.request(`/repos/${this.config.owner}/${this.config.repo}`)
  }

  async getDirectory(path: string): Promise<ContentItem[]> {
    try {
      const res = await this.request(`/repos/${this.config.owner}/${this.config.repo}/contents/${path}?ref=${this.config.branch}`)
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } catch {
      return []
    }
  }

  async putFile(path: string, content: string, message: string): Promise<void> {
    const body = JSON.stringify({
      message,
      content: btoa(unescape(encodeURIComponent(content))),
      branch: this.config.branch
    })
    await this.request(`/repos/${this.config.owner}/${this.config.repo}/contents/${path}`, { method: "PUT", body })
  }
}
