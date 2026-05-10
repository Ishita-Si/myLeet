import "./style.css"
import { useEffect, useMemo, useState } from "react"
import { STORAGE_KEYS, MESSAGE_TYPES } from "~constants"
import type { ComplexityInput, ExtensionSettings, PendingSubmission, UploadRecord } from "~types"
import { setSettings } from "~utils/storage"
import { complexitySchema, githubSettingsSchema } from "~utils/validation"

const defaults: ExtensionSettings = {
  autoUploadEnabled: true,
  askComplexityOnAccepted: true,
  maxUploadRetries: 2,
  github: { token: "", owner: "", repo: "", branch: "main", basePath: "leetcode-solutions" }
}

export default function Popup() {
  const [settings, setLocalSettings] = useState<ExtensionSettings>(defaults)
  const [uploads, setUploads] = useState<UploadRecord[]>([])
  const [pending, setPending] = useState<PendingSubmission | null>(null)
  const [complexity, setComplexity] = useState<ComplexityInput>({ timeComplexity: "O(n)", spaceComplexity: "O(1)" })
  const [status, setStatus] = useState<string>("")

  useEffect(() => {
    void chrome.storage.local.get([STORAGE_KEYS.SETTINGS, STORAGE_KEYS.RECENT_UPLOADS], (items) => {
      if (items[STORAGE_KEYS.SETTINGS]) setLocalSettings(items[STORAGE_KEYS.SETTINGS])
      setUploads(items[STORAGE_KEYS.RECENT_UPLOADS] ?? [])
    })
    void chrome.runtime.sendMessage({ type: MESSAGE_TYPES.GET_PENDING_SUBMISSION }, (resp) => setPending(resp?.pending ?? null))
  }, [])

  const settingsError = useMemo(() => {
    const parsed = githubSettingsSchema.safeParse(settings.github)
    return parsed.success ? "" : parsed.error.issues[0]?.message ?? "Invalid settings"
  }, [settings])

  const onSave = async () => {
    if (settingsError) return setStatus(settingsError)
    await setSettings(settings)
    setStatus("Settings saved")
  }

  const submitUpload = async () => {
    if (!pending) return
    const parsed = complexitySchema.safeParse(complexity)
    if (!parsed.success) return setStatus("Invalid complexity format")
    setStatus("Uploading...")
    const response = await chrome.runtime.sendMessage({
      type: MESSAGE_TYPES.REQUEST_UPLOAD,
      payload: { metadata: pending.metadata, complexity: parsed.data }
    })
    if (response?.ok) {
      setPending(null)
      setStatus(`Uploaded: ${response.filePath}`)
    } else {
      setStatus(response?.error ?? "Upload failed")
    }
  }

  return (
    <main className="w-[390px] bg-slate-950 text-slate-100 p-4 space-y-3 text-sm">
      <h1 className="text-lg font-semibold">LeetCode GitHub Organizer</h1>
      <input className="w-full rounded bg-slate-900 p-2" placeholder="GitHub Token" type="password" value={settings.github.token} onChange={(e) => setLocalSettings({ ...settings, github: { ...settings.github, token: e.target.value } })} />
      <div className="grid grid-cols-2 gap-2">
        <input className="rounded bg-slate-900 p-2" placeholder="Owner" value={settings.github.owner} onChange={(e) => setLocalSettings({ ...settings, github: { ...settings.github, owner: e.target.value } })} />
        <input className="rounded bg-slate-900 p-2" placeholder="Repo" value={settings.github.repo} onChange={(e) => setLocalSettings({ ...settings, github: { ...settings.github, repo: e.target.value } })} />
      </div>
      <button className="w-full rounded bg-brand p-2" onClick={() => void onSave()}>Save Settings</button>

      {pending && (
        <section className="rounded border border-slate-700 p-3 space-y-2">
          <h2 className="font-medium">Pending Accepted Submission</h2>
          <p>{pending.metadata.title} ({pending.metadata.language})</p>
          <input className="w-full rounded bg-slate-900 p-2" value={complexity.timeComplexity} onChange={(e) => setComplexity({ ...complexity, timeComplexity: e.target.value })} placeholder="Time Complexity" />
          <input className="w-full rounded bg-slate-900 p-2" value={complexity.spaceComplexity} onChange={(e) => setComplexity({ ...complexity, spaceComplexity: e.target.value })} placeholder="Space Complexity" />
          <button className="w-full rounded bg-emerald-600 p-2" onClick={() => void submitUpload()}>Upload to GitHub</button>
        </section>
      )}

      <p className="text-xs text-slate-300">{status}</p>
      <ul className="max-h-32 overflow-auto text-xs space-y-1">
        {uploads.map((u) => <li key={u.id}>{u.success ? "✅" : "❌"} {u.title} — {u.message}</li>)}
      </ul>
    </main>
  )
}
