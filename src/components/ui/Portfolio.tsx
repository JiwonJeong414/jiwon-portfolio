export function Portfolio() {
  return (
    <div className="min-h-sreen bg-emerald-900 p-8 text-white">
      <div className="p-6">
        <h1 className="tracking-tightfont-bold mb-4 text-5xl">
          Hello My Name is Jiwon
        </h1>
        <p className="mb-8 text-xl text-slate-400">Frontend Developer</p>
      </div>

      <div className="flex gap-4">
        <button className="rounded-lg bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-200">
          View Work
        </button>
        <button className="rounded-lg border border-white px-6 py-3 font-medium hover:bg-white hover:text-slate-900">
          Contact Me
        </button>
      </div>
    </div>
  );
}
