export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">Security settings</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Password policy</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Minimum 12 characters</li>
            <li>Uppercase and lowercase</li>
            <li>At least one number and symbol</li>
            <li>Previous passwords cannot be reused</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Session lock</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between"><span>Auto-lock on inactivity</span><span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">Enabled</span></div>
            <div className="flex items-center justify-between"><span>Idle timeout</span><span>15 minutes</span></div>
            <div className="flex items-center justify-between"><span>Blur/focus lock</span><span>Enabled</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}
