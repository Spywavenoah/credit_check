const cards = [
  { label: 'Active users', value: '1,248', trend: '+12.4%' },
  { label: 'Report requests', value: '3,842', trend: '+8.9%' },
  { label: 'Income checks', value: '982', trend: '+4.2%' },
  { label: 'Security events', value: '14', trend: '-3.1%' },
];

const recentActivity = [
  ['2FA reset for Jane Doe', '2 minutes ago'],
  ['RecovaPro integration synced', '12 minutes ago'],
  ['Consumer report created', '45 minutes ago'],
  ['Password reset link sent', '1 hour ago'],
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Admin dashboard</h1>
        </div>
        <button className="rounded-xl bg-primary-600 px-4 py-2.5 font-medium text-white">Create report</button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {cards.map(({ label, value, trend }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <div className="mt-3 flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">{trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Platform health</h2>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">Updated 5m ago</span>
          </div>

          <div className="mb-6 grid grid-cols-4 gap-4 text-sm text-slate-500">
            <div>
              <p>RecovaPro</p>
              <p className="mt-1 text-xl font-bold text-slate-900">93%</p>
            </div>
            <div>
              <p>Consumer reports</p>
              <p className="mt-1 text-xl font-bold text-slate-900">1,240</p>
            </div>
            <div>
              <p>Income checks</p>
              <p className="mt-1 text-xl font-bold text-slate-900">804</p>
            </div>
            <div>
              <p>Security</p>
              <p className="mt-1 text-xl font-bold text-slate-900">96%</p>
            </div>
          </div>

          <div className="flex h-52 items-end gap-2 rounded-2xl bg-gradient-to-tr from-indigo-100 to-sky-50 p-4">
            {[20, 35, 42, 58, 72, 68, 82, 90].map((height, index) => (
              <div key={index} className="w-full rounded-t-xl bg-primary-500" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-600">
            {recentActivity.map(([action, time]) => (
              <li key={action} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-none last:pb-0">
                <span>{action}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
