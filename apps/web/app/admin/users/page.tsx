const users = [
  ['Ada Johnson', 'ada@creditcheck.africa', 'Super Admin', 'active'],
  ['Peter Smith', 'ops@creditcheck.africa', 'Admin', 'active'],
  ['Aisha Bello', 'support@creditcheck.africa', 'Support Agent', 'pending'],
  ['Grace Bassey', 'compliance@creditcheck.africa', 'Compliance Officer', 'suspended'],
];

export default function UsersPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Admin</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">User management</h1>
        </div>
        <button className="rounded-xl bg-primary-600 px-4 py-2.5 font-medium text-white">Add user</button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(([name, email, role, status]) => (
              <tr key={name} className="border-t border-slate-200">
                <td className="p-4">{name}</td>
                <td className="p-4">{email}</td>
                <td className="p-4">{role}</td>
                <td className="p-4">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">{status}</span>
                </td>
                <td className="p-4 space-x-3">
                  <button className="text-primary-600">Edit</button>
                  <button className="text-red-600">Reset MFA</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
