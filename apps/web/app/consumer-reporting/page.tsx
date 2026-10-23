export default function ConsumerReportingPage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">Consumer reporting</h1>
      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-soft">
        <div className="grid gap-4 md:grid-cols-3">
          <div><label className="mb-2 block text-sm font-medium text-slate-700">Consumer ID</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="CONS-78412" /></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700">Report Type</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="Standard" /></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700">Reference</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2.5" value="CR-2041" /></div>
        </div>
        <button className="mt-6 rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Submit report request</button>
      </div>
    </main>
  );
}
