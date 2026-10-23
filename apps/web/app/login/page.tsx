import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Secure Access</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Sign in</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-primary-500" defaultValue="admin@creditcheck.africa" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-primary-500" defaultValue="Temp@1234" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
            <Link href="/first-login" className="text-primary-600">Need password change?</Link>
          </div>

          <Link href="/dashboard" className="mt-4 block rounded-xl bg-primary-600 px-4 py-3 text-center font-medium text-white">Login</Link>
          <Link href="/setup-2fa" className="block rounded-xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700">Setup 2FA</Link>
        </form>
      </div>
    </main>
  );
}
