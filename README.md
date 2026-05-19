# myLeet

Chrome extension (Plasmo + React + TypeScript) that detects **Accepted** LeetCode submissions and uploads them to GitHub in topic‑based folders, packaged as **myLeet**.

## Install & run

```bash
npm install
cp .env.example .env
npm run dev
```

Load extension from `build/chrome-mv3-dev` in Chrome.

## How to create a GitHub token (fine-grained recommended)

1. Go to GitHub **Settings**.
2. Open **Developer settings** (left sidebar).
3. Click **Personal access tokens**.
4. Choose one:
   - **Fine-grained tokens** (recommended)
   - **Tokens (classic)** (fallback)
5. Click **Generate new token**.
6. Set expiration (for example 90 days).
7. Repository access:
   - select **Only select repositories**
   - choose your target LeetCode solutions repository
8. Required permissions:
   - **Contents: Read and write**
   - **Metadata: Read-only**
9. Generate token and **copy it once** (GitHub does not show it again).
10. Open extension popup and paste token in **GitHub Token**.

> Security: Never share token in screenshots, commits, or logs.

## How to use extension (new workflow)

1. Open extension popup.
2. Fill the fields:
   - **Owner**: Your GitHub account or organization name (e.g., `johnsmith`).
   - **Repo**: Repository name only (e.g., `leetcode-solutions`). Do **not** include the full URL.
   - **Token**: A GitHub Personal Access Token with *repo contents* write permission.
   - Click **Save Settings**.
3. Solve a LeetCode problem and submit.
4. On accepted submission page, extension auto-detects metadata.
5. Click the floating **Push to GitHub** button shown on the LeetCode page (no popup reopen needed).
6. Enter Time Complexity and Space Complexity in prompts.
7. Extension uploads and commits automatically.

Result path:
- `<Primary Topic>/<ProblemName>.ext`
- duplicates become `ProblemName2.ext`, `ProblemName3.ext`, etc.

## Plasmo icon requirements

Plasmo reads extension icons from the project-root `assets/` folder during build.

Use these PNG sizes:
- `assets/icon16.png` — 16x16
- `assets/icon32.png` — 32x32
- `assets/icon48.png` — 48x48
- `assets/icon128.png` — 128x128

Optional:
- `assets/icon.png` — keep this as **128x128** (safe default).

If icons are missing or in another folder, `plasmo build` can fail with `gen-assets/icon*.plasmo.png` resolution errors.

## Architecture

- `src/contents/leetcode.ts` — detection + on-page push button + upload trigger
- `src/services/leetcode/*` — GraphQL metadata extraction
- `src/background/index.ts` — upload orchestration, retry, dedupe
- `src/services/github/*` — token/repo validation + upload
- `src/popup/index.tsx` — settings and upload history
- `src/utils/*` — storage, validation, retry, error helpers

## Debugging and testing

- Inspect content script in LeetCode tab DevTools.
- Inspect service worker via `chrome://extensions` > service worker.
- Test cases:
  - invalid token (expect clear error)
  - missing repo (404)
  - duplicate submissions (file suffix increment)
  - rate limit (retry path)
  - refresh accepted page (no duplicate upload)
