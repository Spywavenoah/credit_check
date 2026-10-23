const policies = [
  'Minimum 12 characters',
  'Uppercase and lowercase letters',
  'At least one number and one symbol',
  'No reuse of previous passwords',
];

export default function SecurityPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Security</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Security settings</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Password policy</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {policies.map((policy) => (
              <li key={policy} className="flex items-center gap-3">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {policy}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Session lock</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-3">
              <span>Auto-lock on inactivity</span>
              <span className="font-semibold text-emerald-700">Enabled</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <span>Idle timeout</span>
              <span className="font-semibold text-slate-700">15 minutes</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <span>Blur/focus lock</span>
              <span className="font-semibold text-slate-700">Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
