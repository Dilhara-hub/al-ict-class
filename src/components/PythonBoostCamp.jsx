import { Terminal, Code2, FileQuestion, Cpu, CheckCircle2, Sparkles, ArrowRight, Laptop, MessageCircle } from 'lucide-react'
import { site } from '../data/website'
import { waUrl } from '../lib'

const iconMap = {
  Terminal,
  Code2,
  FileQuestion,
  Cpu,
  CheckCircle2,
  Sparkles
}

export default function PythonBoostCamp() {
  const camp = site.pythonCamp
  if (!camp) return null

  return (
    <section id="python-bootcamp" className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-iris-500/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan2/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header Badge & Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan2/40 bg-navy-900/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan2 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan2" />
            {camp.badge}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-slate-100 to-iris-300 bg-clip-text text-transparent">
              {camp.title}
            </span>{' '}
            <span className="block mt-2 text-2xl font-bold text-iris-400 sm:text-3xl">
              {camp.sinhalaTitle}
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {camp.subtitle}
          </p>
        </div>

        {/* Main Content: Two Columns */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
          {/* Left / Info Column */}
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {camp.description}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {camp.features.map((item) => {
                const IconComponent = iconMap[item.icon] || Code2
                return (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-white/10 bg-navy-900/70 p-4 transition-all duration-300 hover:border-iris-400/50 hover:bg-navy-800/80"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-iris-500/20 p-2.5 text-cyan2 transition-transform group-hover:scale-110">
                        <IconComponent size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-cyan2 transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={waUrl(camp.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-iris-500 to-iris-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-iris-500/25 transition-all hover:scale-105 hover:from-iris-600 hover:to-iris-700 focus-visible:ring-2 focus-visible:ring-iris-400"
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>Boost Camp එකට ලියාපදිංචි වන්න</span>
              </a>
              <a
                href="#syllabus"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-900/50 px-6 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-white/10 hover:text-white"
              >
                <span>විෂය නිර්දේශය (Unit 08)</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right / Visual Banner Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-iris-500 to-cyan2 opacity-30 blur-xl transition duration-500 group-hover:opacity-60" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900/90 shadow-2xl">
                {/* Course Banner Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={camp.image}
                    alt="Python Boost Camp Banner"
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-navy-950/80 p-3 backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan2/20 text-cyan2">
                        <Laptop size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Hands-on Practical Lab</p>
                        <p className="text-[11px] text-slate-400">100% Practical Coding</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-iris-500/20 px-3 py-1 text-xs font-semibold text-iris-400 border border-iris-400/30">
                      Python 3.x
                    </span>
                  </div>
                </div>

                {/* Quick Modules Breakdown */}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Course Modules / ආවරණය වන ඒකක
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    {camp.modules.map((m) => (
                      <div
                        key={m.num}
                        className="flex items-center gap-2 rounded-lg bg-navy-950/60 p-2.5 border border-white/5"
                      >
                        <span className="font-mono font-bold text-cyan2">{m.num}</span>
                        <span className="truncate font-medium text-slate-300" title={m.title}>
                          {m.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

