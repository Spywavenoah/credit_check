const logs = [
  ['Password reset generated', 'Ada Johnson', 'Peter Smith', '2026-10-23 15:10'],
  ['2FA reset completed', 'System Admin', 'Jane Doe', '2026-10-23 14:55'],
  ['Consumer report created', 'Grace Ade', 'CR-2041', '2026-10-23 14:32'],
  ['Income verification approved', 'Operations Team', 'INC-889', '2026-10-23 13:40'],
];

export default function AuditPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Compliance</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Audit logs</h1>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Action</th>
              <th className="p-4">Actor</th>
              <th className="p-4">Target</th>
              <th className="p-4">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(([action, actor, target, timestamp]) => (
              <tr key={action + timestamp} className="border-t border-slate-200">
                <td className="p-4">{action}</td>
                <td className="p-4">{actor}</td>
                <td className="p-4">{target}</td>
                <td className="p-4 text-slate-500">{timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
