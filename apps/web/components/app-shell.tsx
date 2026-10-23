'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  CreditCard,
  FileText,
  LayoutDashboard,
  Lock,
  LogOut,
  ShieldCheck,
  Users,
} from 'lucide-react';

const navigation = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/security', label: 'Security', icon: ShieldCheck },
  { href: '/recovapro', label: 'RecovaPro', icon: CreditCard },
  { href: '/consumer-reporting', label: 'Consumer Reports', icon: FileText },
  { href: '/income-service', label: 'Income Service', icon: Bell },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = ['/login', '/first-login', '/setup-2fa'].includes(pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="w-72 border-r border-slate-200 bg-slate-950 text-slate-100">
        <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 font-bold text-white">
            CC
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Admin</p>
            <h2 className="text-lg font-semibold text-white">CreditCheck</h2>
          </div>
        </div>

        <nav className="space-y-2 px-4 py-5">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={[
                  'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition',
                  active ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                ].join(' ')}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 border-t border-slate-800 px-4 py-5">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
            <Lock size={16} />
            Lock screen
          </button>
          <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Operations</p>
            <h1 className="text-xl font-bold text-slate-900">Admin Console</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              System online
            </div>
            <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              Profile
            </button>
          </div>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
