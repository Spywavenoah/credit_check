export default function AuditPage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">Audit logs</h1>
      <div className="mt-6 rounded-2xl border bg-white p-4 shadow-soft">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="p-3">Action</th>
              <th className="p-3">Actor</th>
              <th className="p-3">Target</th>
              <th className="p-3">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Password reset generated', 'Ada Johnson', 'Peter Smith', '2026-10-23 15:10'],
              ['2FA reset', 'System', 'Jane Doe', '2026-10-23 14:55'],
              ['Consumer report created', 'Grace Ade', 'Ref-2041', '2026-10-23 14:32'],
            ].map(([action, actor, target, time]) => (
              <tr key={action} className="border-t">
                <td className="p-3">{action}</td>
                <td className="p-3">{actor}</td>
                <td className="p-3">{target}</td>
                <td className="p-3">{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
