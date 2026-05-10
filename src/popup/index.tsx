import "./style.css"
import { useEffect, useState } from "react"
import type { ExtensionSettings, UploadRecord } from "~types"
import { STORAGE_KEYS } from "~constants"
import { setSettings } from "~utils/storage"

const defaultSettings: ExtensionSettings = {
  autoUploadEnabled: true,
  github: { token: "", owner: "", repo: "", branch: "main", basePath: "leetcode-solutions" }
}

export default function Popup() {
  const [settings, setLocalSettings] = useState<ExtensionSettings>(defaultSettings)
  const [uploads, setUploads] = useState<UploadRecord[]>([])

  useEffect(() => {
    void chrome.storage.local.get([STORAGE_KEYS.SETTINGS, STORAGE_KEYS.RECENT_UPLOADS], (items) => {
      if (items[STORAGE_KEYS.SETTINGS]) setLocalSettings(items[STORAGE_KEYS.SETTINGS])
      setUploads(items[STORAGE_KEYS.RECENT_UPLOADS] ?? [])
    })
  }, [])

  const onSave = async () => {
    await setSettings(settings)
  }

  return (
    <main className="w-[380px] bg-slate-950 text-slate-100 p-4 space-y-4">
      <h1 className="text-lg font-semibold">LeetCode GitHub Organizer</h1>
      <input className="w-full rounded bg-slate-900 p-2" placeholder="GitHub Token" value={settings.github.token} onChange={(e) => setLocalSettings({ ...settings, github: { ...settings.github, token: e.target.value } })} />
      <div className="grid grid-cols-2 gap-2">
        <input className="rounded bg-slate-900 p-2" placeholder="Owner" value={settings.github.owner} onChange={(e) => setLocalSettings({ ...settings, github: { ...settings.github, owner: e.target.value } })} />
        <input className="rounded bg-slate-900 p-2" placeholder="Repo" value={settings.github.repo} onChange={(e) => setLocalSettings({ ...settings, github: { ...settings.github, repo: e.target.value } })} />
      </div>
      <button className="w-full rounded bg-brand p-2" onClick={() => void onSave()}>Save</button>
      <section>
        <h2 className="font-medium">Recent Uploads</h2>
        <ul className="text-xs space-y-1 mt-1 max-h-40 overflow-auto">
          {uploads.map((upload) => <li key={upload.id}>{upload.success ? "✅" : "❌"} {upload.title} - {upload.message}</li>)}
        </ul>
      </section>
    </main>
  )
}
