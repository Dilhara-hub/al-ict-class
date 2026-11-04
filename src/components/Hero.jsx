import { Clock, MapPin } from 'lucide-react'
import { site } from '../data/website'
import { timetable } from '../data/timetable'
import { waUrl } from '../lib'

const bits = Array.from({ length: 60 }, (_, r) =>
  Array.from({ length: 42 }, (_, c) => ((r * 7 + c * 13 + r * c) % 5 < 2 ? '1' : '0')).join(' ')
)

export default function Hero() {
  const t = timetable[0]
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bits pointer-events-none absolute inset-0 select-none overflow-hidden text-[13px] text-iris-400/15" aria-hidden="true">
        <div className="drift whitespace-pre">{[...bits, ...bits].map((l, i) => <div key={i}>{l}</div>)}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="inline-block rounded-full border border-iris-400/50 px-4 py-1 text-sm font-semibold text-iris-400">A/L ICT </p>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-[3.4rem]">අනාගත තාක්ෂණික ලෝකයට අදම සූදානම් වෙමු!</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT) විෂය නිවැරදිව අවබෝධ කරගෙන විශිෂ්ට ප්‍රතිඵලයක් කරා යන සාර්ථක අධ්‍යයන ගමන.</p>
          <p className="mt-4 max-w-xl text-slate-400">සම්පූර්ණ විෂය නිර්දේශය, ප්‍රායෝගික නිරූපණ සහ past paper සාකච්ඡා සහිත ක්‍රමානුකූල A/L ICT පන්තියක්.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waUrl()} target="_blank" rel="noreferrer" className="rounded-full bg-iris-500 px-7 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-iris-600">
              Enroll Now
            </a>
            <a href="#python-bootcamp" className="rounded-full border border-cyan2/40 bg-cyan2/10 px-7 py-3 font-semibold text-cyan2 transition-colors hover:bg-cyan2/20">
              Python Boost Camp 🚀
            </a>
            <a href="#syllabus" className="rounded-full border border-white/30 px-7 py-3 font-semibold hover:bg-white/10">
              Explore Syllabus
            </a>
          </div>
        </div>
        <div className="self-end lg:col-span-2">
          <div className="rounded-2xl border border-white/15 bg-navy-800/80 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <img
                src="/logo.png"
                alt={site.teacher}
                className="h-16 w-16 rounded-full border-2 border-iris-400/50 object-cover shadow-md"
              />
              <div>
                {/* <p className="text-xs font-semibold uppercase tracking-wider text-iris-400">Class Mentor & Lecturer</p> */}
                <p className="text-lg font-bold text-white">{site.teacher}</p>
                <p className="text-xs text-slate-400">University of Ruhuna (BICT)</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2 text-slate-300"><Clock size={18} className="text-cyan2" aria-hidden="true" />{t.day} · {t.start} – {t.end}</p>
              <p className="flex items-center gap-2 text-slate-300"><MapPin size={18} className="text-cyan2" aria-hidden="true" />{t.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
