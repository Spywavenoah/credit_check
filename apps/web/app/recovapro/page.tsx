export default function RecovaProPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Integration</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">RecovaPro</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Integration setup</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <div>
              <label className="mb-2 block font-medium text-slate-700">API key</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" value="••••••••••••" />
            </div>
            <div>
              <label className="mb-2 block font-medium text-slate-700">Environment</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" value="sandbox" />
            </div>
            <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Save configuration</button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Request status</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-center justify-between border-b border-slate-100 pb-3"><span>REC-1001</span><span className="text-emerald-600">Completed</span></li>
            <li className="flex items-center justify-between border-b border-slate-100 pb-3"><span>REC-1002</span><span className="text-amber-600">Pending</span></li>
            <li className="flex items-center justify-between"><span>REC-1003</span><span className="text-red-600">Failed</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
