export default function ConsumerReportingPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-600">Reporting</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Consumer reporting</h1>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Consumer ID</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" value="CONS-78412" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Report type</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" value="Standard" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Reference</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" value="CR-2041" />
          </div>
        </div>
        <button className="mt-6 rounded-xl bg-primary-600 px-4 py-3 font-medium text-white">Submit report request</button>
      </div>
    </div>
  );
}
