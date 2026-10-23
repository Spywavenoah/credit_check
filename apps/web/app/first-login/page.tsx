import React from 'react';

export default function FirstLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="text-2xl font-bold">Change your password</h1>
        <p className="mt-2 text-sm text-slate-400">You are required to update your temporary password before continuing.</p>

        <div className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm">Current password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5" defaultValue="TempPassword123!" />
          </div>
          <div>
            <label className="mb-2 block text-sm">New password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5" defaultValue="StrongPass@2026" />
          </div>
          <div>
            <label className="mb-2 block text-sm">Confirm new password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5" defaultValue="StrongPass@2026" />
          </div>
          <button className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950">Update password</button>
        </div>
      </div>
    </main>
  );
}
