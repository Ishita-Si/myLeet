# LeetCode GitHub Organizer — Advanced Implementation Notes

## Detection System
- Uses URL-based submission id parsing (`/submissions/detail/{id}`) plus accepted text verification.
- Uses debounced MutationObserver + popstate/load listeners.
- De-duplicates by storing `lastProcessedSubmissionId` in `chrome.storage.local`.

## Metadata Extraction
- Pulls authoritative metadata from LeetCode GraphQL `submissionDetails` query.
- Parses title, slug, difficulty, topics, runtime, memory, language, code, timestamp, url.
- Uses strict typing and AppError for invalid states.

## GitHub Integration
- Validates token and repository using `/user` and `/repos/{owner}/{repo}`.
- Uploads files via Contents API PUT.
- Handles status-specific failures (401,403,404).

## Upload Workflow
- Content script stores pending submission.
- Popup asks TC/SC and triggers background upload.
- Background deduplicates in-flight uploads and retries transient failures.

## File Organization
- Primary topic => folder.
- Sanitized folder/file names.
- Duplicate filenames versioned (`X.cpp`, `X2.cpp`, ...).

## Security
- Token masked in popup input.
- Token stored in `chrome.storage.local` only.
- Minimal host permissions.
- No token logs.

## Performance
- Debounced observation to avoid repeated extraction.
- Inflight set prevents duplicate upload requests.
- Storage is used as lightweight state bridge across contexts.
