export default function FirstLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-600">Mandatory</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Change your default password</h1>
        <p className="mt-2 text-sm text-slate-500">You must set a new password and complete MFA setup before using the platform.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">New password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" defaultValue="NewPass@2026" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" defaultValue="NewPass@2026" />
          </div>
          <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Continue to MFA setup</button>
        </form>
      </div>
    </main>
  );
}
