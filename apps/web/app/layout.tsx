import './globals.css';
import type { Metadata } from 'next';
import { AppShell } from '../components/app-shell';
import { SessionLockMonitor } from '../components/lock-screen';

export const metadata: Metadata = {
  title: 'CreditCheck Admin',
  description: 'Secure enterprise admin dashboard and service integration portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionLockMonitor />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
