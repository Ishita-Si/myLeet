# Merge Workflow (Conflict-Minimized)

Use this sequence before opening or updating PRs:

```bash
git fetch origin
git rebase origin/main
npm run typecheck
npm run lint
```

If rebase reports conflicts:

1. Resolve conflict markers in files.
2. Run:

```bash
git add <resolved-files>
git rebase --continue
```

After successful rebase:

```bash
git push --force-with-lease
```

## Why this helps
- Rebasing on latest `main` dramatically lowers overlapping hunks.
- Running checks after rebase catches integration breakages early.
- `--force-with-lease` avoids overwriting teammates' remote work accidentally.
