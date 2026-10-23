export default function UsersPage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Admin</p>
          <h1 className="text-3xl font-bold text-slate-900">Users</h1>
        </div>
        <button className="rounded-xl bg-primary-600 px-4 py-2.5 font-medium text-white">Add user</button>
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-soft">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Ada Johnson', 'ada@creditcheck.africa', 'Super Admin', 'active'],
              ['Peter Smith', 'ops@creditcheck.africa', 'Admin', 'active'],
              ['Aisha Bello', 'support@creditcheck.africa', 'Support Agent', 'pending'],
            ].map(([name, email, role, status]) => (
              <tr key={name} className="border-t">
                <td className="p-3">{name}</td>
                <td className="p-3">{email}</td>
                <td className="p-3">{role}</td>
                <td className="p-3"><span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{status}</span></td>
                <td className="p-3 space-x-2">
                  <button className="text-primary-600">Edit</button>
                  <button className="text-red-600">Reset MFA</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
