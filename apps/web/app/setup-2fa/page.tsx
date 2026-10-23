import React from 'react';

export default function SetupTwoFactorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="text-2xl font-bold">Set up 2FA</h1>
        <p className="mt-2 text-sm text-slate-400">Use your authenticator app to scan the QR code.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="flex min-h-52 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
            <div className="grid h-36 w-36 place-items-center rounded-2xl bg-white text-3xl font-bold text-slate-950">QR</div>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-300">Secret: JBSWY3DPEHPK3PXP</div>
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-300">otpauth://totp/CreditCheck:admin@creditcheck.africa</div>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5" placeholder="Enter 6-digit code" />
            <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950">Verify & enable</button>
          </div>
        </div>
      </div>
    </main>
  );
}
