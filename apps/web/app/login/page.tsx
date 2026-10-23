import React from 'react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-xl font-bold text-cyan-400">C</div>
          <h1 className="text-2xl font-bold">CreditCheck Admin</h1>
          <p className="mt-2 text-sm text-slate-400">Secure access portal</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 outline-none ring-0 transition focus:border-cyan-500" defaultValue="admin@creditcheck.africa" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 outline-none transition focus:border-cyan-500" defaultValue="TempPassword123!" />
          </div>
          <button type="button" className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Sign in</button>
        </form>
      </div>
    </main>
  );
}
