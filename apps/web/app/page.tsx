export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 text-white">
      <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Secure platform</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">CreditCheck Admin</h1>
          </div>
          <a href="/login" className="inline-flex rounded-xl bg-primary-600 px-5 py-3 font-medium text-white shadow-lg">
            Open portal
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ['Admin access', 'User lifecycle management, permissions, and role assignment'],
            ['Security', 'MFA, password resets, default-password enforcement, lock screen'],
            ['Integration', 'RecovaPro, Consumer Reporting, Income Service workflows'],
          ].map(([title, summary]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{summary}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
