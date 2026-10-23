export default function IncomeServicePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">Income service</h1>
      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-soft">
        <div className="grid gap-4 md:grid-cols-3">
          <div><label className="mb-2 block text-sm font-medium text-slate-700">Applicant ID</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="APP-88903" /></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700">Verification Type</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="Payroll" /></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700">Status</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="Approved" /></div>
        </div>
        <button className="mt-6 rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Run verification</button>
      </div>
    </main>
  );
}
