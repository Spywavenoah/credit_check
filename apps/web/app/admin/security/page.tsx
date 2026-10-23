import React from 'react';

export default function SecurityPage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Security</p>
        <h1 className="mt-2 text-3xl font-bold">Security controls</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Password policy</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Minimum 12 characters</li>
            <li>• Require uppercase, lowercase, number, symbol</li>
            <li>• Prevent reuse of last 5 passwords</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Session lock</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Idle timeout: 15 minutes</li>
            <li>• Lock on blur or visibility loss</li>
            <li>• Re-authentication using password or MFA</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
