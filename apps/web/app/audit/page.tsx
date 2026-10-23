import React from 'react';

const logs = [
  { action: 'Login succeeded', user: 'admin@creditcheck.africa', time: 'Today, 09:15' },
  { action: 'Password reset link generated', user: 'jane@creditcheck.africa', time: 'Today, 08:42' },
  { action: '2FA reset performed', user: 'ops@creditcheck.africa', time: 'Today, 07:10' },
];

export default function AuditPage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Monitoring</p>
        <h1 className="mt-2 text-3xl font-bold">Audit logs</h1>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.action} className="border-t border-slate-800">
                <td className="px-4 py-3">{log.action}</td>
                <td className="px-4 py-3 text-slate-300">{log.user}</td>
                <td className="px-4 py-3 text-slate-400">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
