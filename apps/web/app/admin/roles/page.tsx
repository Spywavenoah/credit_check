import React from 'react';

const roleMap = [
  { name: 'Super Admin', permissions: 'All permissions' },
  { name: 'Admin', permissions: 'User + reporting + security' },
  { name: 'Support Agent', permissions: 'Reporting + support tools' },
  { name: 'Compliance Officer', permissions: 'Audit + compliance' },
];

export default function RolesPage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Access</p>
          <h1 className="mt-2 text-3xl font-bold">Roles & permissions</h1>
        </div>
        <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">Create role</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {roleMap.map((role) => (
          <div key={role.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold">{role.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{role.permissions}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {['user:view', 'report:view', 'security:manage', 'audit:view'].map((permission) => (
                <span key={permission} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-slate-300">{permission}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
