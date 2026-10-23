import React from 'react';

const cards = [
  { label: 'Total Users', value: '128', change: '+12.4%' },
  { label: 'Active Sessions', value: '42', change: '+8.1%' },
  { label: 'Pending Reports', value: '18', change: '-3.6%' },
  { label: 'Income Checks', value: '27', change: '+5.2%' },
];

export default function DashboardPage() {
  return (
    <main className="space-y-8 bg-slate-950 p-6 text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Overview</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
        </div>
        <button className="rounded-xl border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">Export report</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
            <p className="text-sm text-slate-400">{card.label}</p>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-3xl font-bold">{card.value}</span>
              <span className="text-sm text-emerald-400">{card.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">Recent activity</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex justify-between border-b border-slate-800 pb-3"><span>New user created</span><span>2m ago</span></li>
            <li className="flex justify-between border-b border-slate-800 pb-3"><span>2FA reset requested</span><span>14m ago</span></li>
            <li className="flex justify-between border-b border-slate-800 pb-3"><span>Income verification approved</span><span>31m ago</span></li>
            <li className="flex justify-between"><span>Consumer report reviewed</span><span>1h ago</span></li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">Status by module</h2>
          <div className="space-y-4 text-sm">
            {['RecovaPro', 'Consumer Reporting', 'Income Service', 'Security'].map((module, i) => (
              <div key={module}>
                <div className="mb-2 flex justify-between text-slate-300"><span>{module}</span><span>{90 + i * 3}%</span></div>
                <div className="h-2 rounded-full bg-slate-800"><div className="h-2 rounded-full bg-cyan-500" style={{ width: `${90 + i * 3}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
