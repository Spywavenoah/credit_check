import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CreditCheck Admin',
  description: 'CreditCheck admin portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50">
          <header className="border-b bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-bold text-slate-900">
                CreditCheck Admin
              </Link>
              <nav className="flex gap-4 text-sm text-slate-600">
                <Link href="/login">Login</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/admin/users">Users</Link>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
