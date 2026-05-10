# LeetCode GitHub Organizer

Chrome extension (Plasmo + React + TypeScript) that detects **Accepted** LeetCode submissions and uploads them to GitHub in topic-based folders.

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
2. Fill GitHub Token, Owner, Repo and click **Save Settings**.
3. Solve a LeetCode problem and submit.
4. On accepted submission page, extension auto-detects metadata.
5. Click the floating **Push to GitHub** button shown on the LeetCode page (no popup reopen needed).
6. Enter Time Complexity and Space Complexity in prompts.
7. Extension uploads and commits automatically.

Result path:
- `leetcode-solutions/<Primary Topic>/<ProblemName>.ext`
- duplicates become `ProblemName2.ext`, `ProblemName3.ext`, etc.

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
