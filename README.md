# LeetCode GitHub Organizer

Production-ready Plasmo + React + TypeScript Chrome extension that detects accepted LeetCode submissions and uploads them into topic-based folders in GitHub.

## 1) Project setup

```bash
npm install
cp .env.example .env
npm run dev
```

## 2) Folder structure

- `background.ts` / `src/background`: service worker orchestration
- `content.ts` / `src/contents`: LeetCode page detection and metadata extraction
- `popup.tsx` / `src/popup`: extension popup UI and settings
- `src/services/github`: GitHub REST client and upload orchestration
- `src/services/leetcode`: LeetCode GraphQL client + metadata fetch
- `src/utils`: storage and sanitization helpers
- `src/types`: shared TypeScript domain models
- `src/constants`: message, storage, endpoint constants

## 3) Dependencies

- Core: `plasmo`, `react`, `react-dom`, `typescript`
- Styling: `tailwindcss`, `postcss`, `autoprefixer`
- Tooling: `eslint`, `@types/chrome`, `@types/react`, `@types/react-dom`
- Validation: `zod`

## 4) Manifest setup (MV3)

Manifest is configured via `package.json` (`manifest` key):
- `manifest_version: 3`
- `background.service_worker: background.js`
- Permissions: `storage`, `tabs`
- Host permissions: LeetCode and GitHub API domains

## 5) Basic extension bootstrapping

- `content.ts`: injects LeetCode observer logic.
- `background.ts`: binds message handlers and upload flow.
- `popup.tsx`: renders settings UI and recent upload history.
- `options.tsx`: placeholder options page.

## End-to-end flow

1. Content script watches submission UI using `MutationObserver`.
2. On Accepted, script extracts slug/runtime/memory/code/language and fetches difficulty/tags from LeetCode GraphQL.
3. User is prompted for TC/SC.
4. Payload is sent to background service worker.
5. Background validates settings and uploads using GitHub Contents API.
6. Filename collision strategy appends numeric suffix (`Two Sum2.cpp`, etc.).
7. Upload result is persisted to `chrome.storage.local` and shown in popup history.

## Build and checks

```bash
npm run typecheck
npm run build
npm run package
```

## Security best practices

- Use a classic PAT with minimum scopes (`repo` only when private repo needed).
- Store token only in `chrome.storage.local`, never hardcode.
- Restrict host permissions to only required domains.
- Validate all settings before upload (recommended next step: add `zod` schema validation at save time).
- Add token masking and redaction in logs for production release.
