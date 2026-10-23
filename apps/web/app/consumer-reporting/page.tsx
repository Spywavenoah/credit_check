import React from 'react';

export default function ConsumerReportingPage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Reports</p>
        <h1 className="mt-2 text-3xl font-bold">Consumer reporting</h1>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {['Submitted', 'In review', 'Approved'].map((status, i) => (
            <div key={status} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">{status}</div>
              <div className="mt-2 text-2xl font-bold">{12 + i * 4}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
