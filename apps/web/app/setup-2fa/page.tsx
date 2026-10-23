export default function SetupTwoFactorPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6">
      <div className="grid w-full max-w-4xl gap-6 rounded-2xl border bg-white p-8 shadow-soft md:grid-cols-[1fr_1.2fr]">
        <div className="flex items-center justify-center rounded-2xl bg-indigo-50 p-6">
          <div className="h-56 w-56 rounded-2xl border-2 border-dashed border-indigo-300 bg-white p-4">
            <div className="grid h-full place-items-center text-center text-sm text-indigo-700">
              QR<br />Code
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Security</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Set up 2FA</h1>
          <p className="mt-2 text-sm text-slate-500">Scan the QR code with an authenticator app to enable two-factor verification.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Verification Code</label>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" placeholder="123456" />
            </div>
            <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Verify and enable</button>
          </div>
        </div>
      </div>
    </main>
  );
}
