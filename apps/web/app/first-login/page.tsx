export default function FirstLoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-2xl border bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Mandatory Action</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Change your password</h1>
        <p className="mt-2 text-sm text-slate-500">You must update your default password before continuing.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">New Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" defaultValue="NewPass@2026" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" defaultValue="NewPass@2026" />
          </div>
          <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Update Password</button>
        </form>
      </div>
    </main>
  );
}
