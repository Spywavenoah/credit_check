export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Overview</p>
          <h1 className="text-3xl font-bold text-slate-900">Admin dashboard</h1>
        </div>
        <button className="rounded-xl bg-primary-600 px-4 py-2.5 font-medium text-white">New report</button>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ['Users', '1,248', 'active'],
          ['Reports', '3,842', 'processed'],
          ['Income Checks', '982', 'verified'],
          ['Security Events', '14', 'today'],
        ].map(([label, value, status]) => (
          <div key={label} className="rounded-2xl border bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{label}</p>
            <div className="mt-3 flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">{value}</p>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{status}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex justify-between border-b pb-2"><span>2FA reset for Jane Doe</span><span>2m ago</span></li>
            <li className="flex justify-between border-b pb-2"><span>RecovaPro integration synced</span><span>12m ago</span></li>
            <li className="flex justify-between border-b pb-2"><span>Income verification completed</span><span>45m ago</span></li>
            <li className="flex justify-between"><span>Password reset link generated</span><span>1h ago</span></li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Security status</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-3"><span>2FA coverage</span><span className="font-bold text-emerald-700">96%</span></div>
            <div className="flex items-center justify-between rounded-xl bg-amber-50 p-3"><span>Pending password resets</span><span className="font-bold text-amber-700">8</span></div>
            <div className="flex items-center justify-between rounded-xl bg-red-50 p-3"><span>Locked accounts</span><span className="font-bold text-red-700">3</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
