export default function RolesPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Access</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Roles and permissions</h1>
        </div>
        <button className="rounded-xl bg-primary-600 px-4 py-2.5 font-medium text-white">New role</button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ['Super Admin', 'Full system management, user access and security controls'],
          ['Admin', 'Manage users, integrations, and reports'],
          ['Compliance Officer', 'Review reports and audit logs'],
        ].map(([title, description]) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <p className="mt-3 text-sm text-slate-600">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              {['Users', 'Reports', 'Security', 'Audit'].map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-2 py-1">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
