import Link from 'next/link';

const stats = [
  { label: 'Active Users', value: '1,248', trend: '+12.4%' },
  { label: 'Report Requests', value: '3,842', trend: '+8.9%' },
  { label: 'Income Verifications', value: '982', trend: '+4.2%' },
  { label: 'Failed Logins', value: '18', trend: '-3.1%' },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{item.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-900">{item.value}</h3>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                {item.trend}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Platform Overview</h2>
            <button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Export</button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 text-sm text-slate-500">
              <div>
                <p>RecovaPro</p>
                <p className="mt-1 text-xl font-bold text-slate-900">93%</p>
              </div>
              <div>
                <p>Consumer Reports</p>
                <p className="mt-1 text-xl font-bold text-slate-900">1,240</p>
              </div>
              <div>
                <p>Income Checks</p>
                <p className="mt-1 text-xl font-bold text-slate-900">804</p>
              </div>
              <div>
                <p>Security Events</p>
                <p className="mt-1 text-xl font-bold text-slate-900">14</p>
              </div>
            </div>
            <div className="h-48 rounded-xl bg-gradient-to-r from-indigo-100 to-blue-50 p-4">
              <div className="flex h-full items-end gap-2">
                {[35, 52, 44, 66, 58, 72, 61, 88].map((height, i) => (
                  <div key={i} className="w-full rounded-t-xl bg-primary-500" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-5 space-y-3">
            <Link href="/admin/users" className="block rounded-xl border bg-slate-50 p-3 hover:bg-slate-100">Create user</Link>
            <Link href="/setup-2fa" className="block rounded-xl border bg-slate-50 p-3 hover:bg-slate-100">Enable 2FA</Link>
            <Link href="/recovapro" className="block rounded-xl border bg-slate-50 p-3 hover:bg-slate-100">RecovaPro integration</Link>
            <Link href="/consumer-reporting" className="block rounded-xl border bg-slate-50 p-3 hover:bg-slate-100">Consumer reporting</Link>
            <Link href="/income-service" className="block rounded-xl border bg-slate-50 p-3 hover:bg-slate-100">Income service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
