# LeetCode GitHub Organizer

Chrome extension (Plasmo + React + TypeScript) that detects **Accepted** LeetCode submissions and uploads them to GitHub in topic-based folders.

## Install & run

```bash
npm install
cp .env.example .env
npm run dev
```

Load extension from `build/chrome-mv3-dev` in Chrome.

## How to use

1. Open extension popup.
2. Fill GitHub Token, Owner, Repo and click **Save Settings**.
3. Solve a LeetCode problem and submit.
4. On accepted result page, extension captures metadata and stores pending submission.
5. Re-open popup, enter TC/SC, click **Upload to GitHub**.
6. File is committed automatically in:
   - `leetcode-solutions/<Primary Topic>/<ProblemName>.ext`
   - duplicates become `ProblemName2.ext`, `ProblemName3.ext`, etc.

## Architecture

- `src/contents/leetcode.ts` — detection and pending submission creation
- `src/services/leetcode/*` — GraphQL metadata extraction
- `src/background/index.ts` — upload orchestration, retry, dedupe
- `src/services/github/*` — token/repo validation + upload
- `src/popup/index.tsx` — settings + complexity modal flow
- `src/utils/*` — storage, validation, retry, error helpers

## Security practices

- PAT never hardcoded and never logged.
- Token input masked (`type=password`).
- Least host permissions (`leetcode.com`, `api.github.com`).

## Debugging and testing

- Inspect content script in LeetCode tab DevTools.
- Inspect service worker via `chrome://extensions` > service worker.
- Test cases:
  - invalid token (expect clear error)
  - missing repo (404)
  - duplicate submissions (file suffix increment)
  - rate limit (retry path)
  - refresh accepted page (no duplicate upload)
