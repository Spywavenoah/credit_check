import React from 'react';

export default function IncomeServicePage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Verification</p>
        <h1 className="mt-2 text-3xl font-bold">Income service</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {['Pending', 'Approved', 'Rejected'].map((state, i) => (
          <div key={state} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">{state}</div>
            <div className="mt-3 text-3xl font-bold">{i === 0 ? 8 : i === 1 ? 24 : 3}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
