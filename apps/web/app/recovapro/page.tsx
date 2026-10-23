export default function RecovaProPage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">RecovaPro integration</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Integration settings</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div><label className="mb-2 block">API Key</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="••••••••••••" /></div>
            <div><label className="mb-2 block">Environment</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="sandbox" /></div>
            <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Save configuration</button>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Recent request status</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex justify-between border-b pb-2"><span>RecovaPro-1042</span><span className="text-emerald-600">Completed</span></li>
            <li className="flex justify-between border-b pb-2"><span>RecovaPro-1041</span><span className="text-amber-600">Pending</span></li>
            <li className="flex justify-between"><span>RecovaPro-1040</span><span className="text-red-600">Failed</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
