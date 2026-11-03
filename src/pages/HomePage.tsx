import { ArrowDown, ArrowRight, Camera, MapPin, ShieldCheck, Sparkles, TrafficCone, Trash2, Droplets, Lightbulb, Construction } from 'lucide-react';

const categories = [
  { icon: TrafficCone, label: 'Road damage & potholes', tone: 'bg-[#f7eee2] text-[#9b6021]' },
  { icon: Trash2, label: 'Garbage & waste', tone: 'bg-[#e9f0e4] text-[#4b7656]' },
  { icon: Droplets, label: 'Water & drainage', tone: 'bg-[#e5eff2] text-[#3d7080]' },
  { icon: Lightbulb, label: 'Streetlights', tone: 'bg-[#f4f0db] text-[#8a7732]' },
  { icon: Construction, label: 'Public infrastructure', tone: 'bg-[#eeeaf3] text-[#705b86]' },
];

export function HomePage() {
  return (
    <>
      <section id="home" className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:items-center md:pb-28 md:pt-20 lg:px-12">
        <div className="absolute -left-40 top-12 -z-0 size-80 rounded-full bg-[#eaf0e6] blur-3xl" aria-hidden="true" />
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe6d9] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#527456]"><span className="size-1.5 rounded-full bg-[#8eae54]" /> A clearer view of your neighborhood</div>
          <h1 className="max-w-2xl text-[clamp(3.1rem,7vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.075em]">Better streets start with <span className="font-serif font-normal italic text-[#55794a]">being seen.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#68736d] sm:text-lg sm:leading-8">A simpler way for neighbors to document local infrastructure problems and help communities understand what needs attention.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#report" className="inline-flex items-center gap-2 rounded-full bg-[#174c3c] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#103c2f]">Explore the concept <ArrowRight size={16} /></a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-[#46534b] transition hover:bg-white">See how it works <ArrowDown size={15} /></a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs text-[#68736d]"><span className="grid size-8 place-items-center rounded-full bg-white text-[#174c3c]"><ShieldCheck size={16} /></span><span>Community-first by design <span className="mx-1 text-[#b4bcb4]">•</span> Privacy matters</span></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[510px]">
          <div className="absolute -right-5 -top-5 size-24 rounded-full border border-dashed border-[#bcc9b5]" aria-hidden="true" />
          <div className="relative rounded-[2rem] border border-[#e3e8df] bg-white p-3 shadow-[0_30px_90px_rgba(23,76,60,0.11)] sm:p-4">
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.45rem] bg-[#e9eee4] p-5 sm:min-h-[365px] sm:p-7">
              <div className="absolute inset-0 opacity-50" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(30deg, transparent 47%, #c7d2c4 48%, #c7d2c4 50%, transparent 51%), linear-gradient(120deg, transparent 44%, #d1dacd 45%, #d1dacd 48%, transparent 49%)', backgroundSize: '110px 110px' }} />
              <div className="relative flex items-center justify-between"><span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#526055]">NEIGHBORHOOD VIEW</span><span className="rounded-full bg-[#d5f27c] px-2.5 py-1.5 text-[10px] font-semibold text-[#314520]">CONCEPT</span></div>
              <div className="absolute left-[20%] top-[32%] grid size-12 place-items-center rounded-2xl bg-[#174c3c] text-[#d5f27c] shadow-lg"><MapPin size={21} /></div>
              <div className="absolute right-[22%] top-[53%] grid size-10 place-items-center rounded-xl bg-white text-[#9b6021] shadow-md"><TrafficCone size={18} /></div>
              <div className="absolute bottom-[20%] left-[42%] grid size-10 place-items-center rounded-xl bg-white text-[#3d7080] shadow-md"><Droplets size={18} /></div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-7">
                <div className="flex items-start gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#f7eee2] text-[#9b6021]"><Camera size={17} /></span><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><p className="truncate text-xs font-semibold">A street that needs attention</p><span className="shrink-0 rounded-full bg-[#f5f0dc] px-2 py-1 text-[9px] font-semibold text-[#806b27]">EXAMPLE</span></div><p className="mt-1 text-[10px] text-[#77817a]">A report card concept, not a live submission</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#edf0eb]"><div className="h-full w-[62%] rounded-full bg-[#8eae54]" /></div></div></div>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 pb-1 pt-4 text-[10px] font-medium text-[#77817a]"><span>Illustrative interface preview</span><span>Not connected to live data</span></div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl border border-[#e5e9e3] bg-white px-4 py-3 text-xs font-medium shadow-lg sm:flex"><span className="grid size-8 place-items-center rounded-xl bg-[#edf3e9] text-[#55794a]"><Sparkles size={16} /></span><span>Thoughtful tools for<br /><strong className="font-semibold text-[#17211d]">shared progress</strong></span></div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#e5e9e3] bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 md:gap-12 md:py-14 lg:px-12">
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#79934d]">01 / Notice</p><h2 className="mt-3 text-xl font-semibold tracking-[-0.04em]">Capture what you see</h2><p className="mt-2 text-sm leading-6 text-[#68736d]">A future reporting flow will let neighbors describe an issue and attach a photo.</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#79934d]">02 / Understand</p><h2 className="mt-3 text-xl font-semibold tracking-[-0.04em]">Make details useful</h2><p className="mt-2 text-sm leading-6 text-[#68736d]">Planned AI assistance can help organize reports, with people staying in control.</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#79934d]">03 / Act together</p><h2 className="mt-3 text-xl font-semibold tracking-[-0.04em]">See the bigger picture</h2><p className="mt-2 text-sm leading-6 text-[#68736d]">An envisioned dashboard can help communities spot patterns and follow progress.</p></div>
        </div>
      </section>

      <section id="issues" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#79934d]">What communities notice</p><h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">Small observations.<br />A clearer community picture.</h2></div><p className="max-w-sm text-sm leading-6 text-[#68736d]">These are the kinds of local concerns CivicLens aims to help organize. No reports or live map data are connected yet.</p></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{categories.map(({ icon: Icon, label, tone }) => <div key={label} className="flex items-center gap-3 rounded-2xl border border-[#e5e9e3] bg-white px-4 py-4"><span className={`grid size-9 shrink-0 place-items-center rounded-xl ${tone}`}><Icon size={17} /></span><span className="text-xs font-semibold leading-5">{label}</span></div>)}</div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <div className="grid gap-8 rounded-[2rem] bg-[#174c3c] px-6 py-9 text-white sm:px-10 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-14 md:py-14">
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c1d99a]">Our approach</p><h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">Useful technology should help people feel heard.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-white/70">CivicLens is being designed around dignity, accessibility, transparent AI assistance, and careful handling of community data.</p></div>
          <div id="report" className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6"><div className="flex items-center gap-2 text-xs font-semibold text-[#d5f27c]"><ShieldCheck size={15} /> FOUNDATION PREVIEW</div><p className="mt-4 text-sm leading-6 text-white/80">This repository currently contains a frontend foundation and planning documents. Report submission, accounts, maps, AI analysis, and a civic dashboard are planned, not implemented.</p><a href="https://github.com/Srikanth198v/civiclens-ai" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#d5f27c] hover:text-white">View project repository <ArrowRight size={14} /></a></div>
        </div>
      </section>
    </>
  );
}
