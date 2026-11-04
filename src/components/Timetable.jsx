import { CalendarDays, Clock, MapPin, Megaphone } from 'lucide-react'
import Section from './Section'
import { timetable } from '../data/timetable'
export default function Timetable() {
  return (
    <Section dark id="timetable" title="පන්ති කාලසටහන" intro="පන්ති දිනය, වේලාව සහ ස්ථානය පහත දැක්වේ.">
      <div className="grid gap-6 md:grid-cols-2">
        {timetable.map((t, i) => (
          <article key={i} className="rounded-2xl border border-white/15 bg-navy-800 p-6">
            <p className="inline-block rounded-full bg-iris-500 px-3 py-1 text-sm font-semibold text-white">{t.type}</p>
            <dl className="mt-5 space-y-3">
              <div className="flex items-center gap-3"><CalendarDays className="text-cyan2" size={20} aria-hidden="true" /><dt className="sr-only">දිනය</dt><dd className="text-xl font-bold text-white">{t.day}</dd></div>
              <div className="flex items-center gap-3"><Clock className="text-cyan2" size={20} aria-hidden="true" /><dt className="sr-only">වේලාව</dt><dd>{t.start} – {t.end}</dd></div>
              <div className="flex items-center gap-3"><MapPin className="text-cyan2" size={20} aria-hidden="true" /><dt className="sr-only">ස්ථානය</dt><dd>{t.location}</dd></div>
              {t.notice && <div className="flex items-start gap-3 rounded-lg bg-yellow-400/10 p-3 text-yellow-200"><Megaphone size={20} aria-hidden="true" className="mt-1 shrink-0" /><dd>{t.notice}</dd></div>}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}
