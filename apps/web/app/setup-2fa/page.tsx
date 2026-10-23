export default function SetupTwoFactorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6">
      <div className="grid w-full max-w-4xl gap-8 rounded-3xl border border-white/10 bg-white p-8 shadow-2xl md:grid-cols-[1fr_1.2fr]">
        <div className="flex items-center justify-center rounded-3xl bg-indigo-50 p-6">
          <div className="flex h-60 w-60 items-center justify-center rounded-3xl border-2 border-dashed border-indigo-300 bg-white text-center text-sm font-medium text-indigo-700">
            QR CODE
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary-600">Security</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Set up 2FA</h1>
          <p className="mt-2 text-sm text-slate-500">Scan the QR code and confirm your one-time code to complete MFA enrollment.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Authenticator code</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" placeholder="123456" />
            </div>
            <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Verify and enable</button>
          </div>
        </div>
      </div>
    </main>
  );
}
