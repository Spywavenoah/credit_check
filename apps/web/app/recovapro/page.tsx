import React from 'react';

export default function RecovaProPage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Integration</p>
        <h1 className="mt-2 text-3xl font-bold">RecovaPro</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Connection status</h2>
          <div className="mt-4 text-emerald-400">Connected • Sandbox environment</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Latest request</h2>
          <div className="mt-4 text-sm text-slate-300">Reference: RP-1001 • Completed successfully</div>
        </div>
      </div>
    </main>
  );
}
