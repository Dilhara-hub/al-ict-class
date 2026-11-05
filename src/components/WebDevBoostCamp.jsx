import { Layout, Palette, Server, FileCode, FileQuestion, Globe, ArrowRight, Laptop, MessageCircle } from 'lucide-react'
import { site } from '../data/website'
import { waUrl } from '../lib'

const iconMap = {
  Layout,
  Palette,
  Server,
  FileCode,
  FileQuestion,
  Globe
}

export default function WebDevBoostCamp() {
  const camp = site.webDevCamp
  if (!camp) return null

  return (
    <section id="webdev-bootcamp" className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header Badge, Tech Pills & Title */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-navy-950/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-300 backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400" />
              {camp.badge}
            </div>
            {camp.tags && camp.tags.map((tag) => (
              <span
                key={tag.name}
                className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wider ${tag.color}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-300 bg-clip-text text-transparent">
              {camp.title}
            </span>{' '}
            <span className="block mt-2 text-2xl font-bold text-orange-400 sm:text-3xl">
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
                const IconComponent = iconMap[item.icon] || Layout
                return (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-white/10 bg-navy-950/70 p-4 transition-all duration-300 hover:border-orange-400/50 hover:bg-navy-800/80"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-orange-500/20 p-2.5 text-orange-400 transition-transform group-hover:scale-110">
                        <IconComponent size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors">
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
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-105 hover:from-orange-600 hover:to-amber-700 focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>Web Dev Camp එකට ලියාපදිංචි වන්න</span>
              </a>
              <a
                href="#syllabus"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/60 px-6 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-white/10 hover:text-white"
              >
                <span>විෂය නිර්දේශය (Unit 12)</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right / Visual Banner Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 via-sky-500 to-indigo-500 opacity-30 blur-xl transition duration-500 group-hover:opacity-60" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-950/90 shadow-2xl">
                {/* Course Banner Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={camp.image}
                    alt="Web Development Boost Camp Banner - HTML, CSS, PHP"
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-navy-950/85 p-3 backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/20 text-orange-400">
                        <Laptop size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Full-Stack Web Lab</p>
                        <p className="text-[11px] text-slate-400">Client-Side & Server-Side</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-indigo-500/20 px-3 py-1 text-xs font-semibold text-orange-300 border border-orange-400/30">
                      HTML · CSS · PHP
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
                        className="flex items-center gap-2 rounded-lg bg-navy-900/80 p-2.5 border border-white/5"
                      >
                        <span className="font-mono font-bold text-orange-400">{m.num}</span>
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

