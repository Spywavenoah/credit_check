import React from 'react';

const users = [
  { name: 'Amina Yusuf', email: 'amina@creditcheck.africa', role: 'Admin', status: 'Active' },
  { name: 'Daniel Okafor', email: 'daniel@creditcheck.africa', role: 'Support Agent', status: 'Active' },
  { name: 'Grace Adams', email: 'grace@creditcheck.africa', role: 'Compliance Officer', status: 'Locked' },
];

export default function UsersPage() {
  return (
    <main className="space-y-6 bg-slate-950 p-6 text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Management</p>
          <h1 className="mt-2 text-3xl font-bold">User management</h1>
        </div>
        <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">Create user</button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-800/80 text-slate-300">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t border-slate-800">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3 text-slate-300">{user.email}</td>
                <td className="px-4 py-3 text-slate-300">{user.role}</td>
                <td className="px-4 py-3"><span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-300">{user.status}</span></td>
                <td className="px-4 py-3 text-cyan-400">View • Edit • Reset</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
