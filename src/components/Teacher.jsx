import { GraduationCap, UserRound } from 'lucide-react'
import Section from './Section'
import { site } from '../data/website'

export default function Teacher() {
  return (
    <Section id="teacher" title="ගුරුවරයා">
      <div className="grid items-center gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          {site.photo ? (
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-b from-navy-950 to-navy-900 p-8 shadow-xl">
              <img
                src={site.photo}
                alt={site.teacher}
                loading="lazy"
                className="aspect-square w-full max-w-[280px] rounded-full border-4 border-iris-500/40 object-cover shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          ) : (
            <div className="grid aspect-[4/5] w-full place-items-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400">
              <div className="text-center">
                <UserRound size={64} className="mx-auto" aria-hidden="true" />
                <p className="mt-2 text-sm">ඡායාරූපය මෙහි (website.js → photo)</p>
              </div>
            </div>
          )}
        </div>
        <div className="md:col-span-3">
          <h3 className="text-2xl font-extrabold text-navy-900">{site.teacher}</h3>
          <p className="mt-4 text-lg text-slate-600">{site.teacherBio}</p>
          <ul className="mt-6 space-y-2">
            {site.education.map((e) => (
              <li key={e} className="flex items-center gap-3 font-medium text-navy-800">
                <GraduationCap size={20} className="text-iris-600" aria-hidden="true" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
