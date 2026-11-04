import { useState } from 'react'
import Section from './Section'
import SyllabusCard from './SyllabusCard'
import { syllabus, totalHours } from '../data/syllabus'
const shades = ['#6c63ff', '#4dd6e8', '#1a2d63']
export default function Syllabus() {
  const [openNo, setOpenNo] = useState(null)
  return (
    <Section id="syllabus" title="සම්පූර්ණ A/L ICT විෂය නිර්දේශය" intro={`ඒකක 14ක්, මුළු කාලය පැය ${totalHours}ක්. ඒකකයක් ක්ලික් කර විස්තර බලන්න.`}>
      <div className="mb-10 rounded-2xl bg-navy-900 p-5">
        <p className="mb-3 text-sm font-semibold text-slate-300">පැය බෙදී යාම (ඒකක 14)</p>
        <div className="flex h-8 overflow-hidden rounded-lg" role="img" aria-label="ඒකක 14 අතර පැය බෙදීම">
          {syllabus.map((u, i) => (
            <button key={u.no} onClick={() => { setOpenNo(u.no); document.getElementById(`unit-${u.no}`)?.parentElement.scrollIntoView({ block: 'center' }) }}
              title={`${u.no}. ${u.en} – පැය ${u.hours}`} aria-label={`ඒකකය ${u.no}`}
              style={{ width: `${(u.hours / totalHours) * 100}%`, background: shades[i % 3] }}
              className="border-r border-navy-900 text-[11px] font-bold text-white hover:brightness-125">{u.hours >= 22 ? u.no : ''}</button>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-400">දිගම ඒකක: ක්‍රමලේඛකරණය (74), පද්ධති විශ්ලේෂණය (68), වෙබ් සංවර්ධනය (60).</p>
      </div>
      <div className="space-y-3">
        {syllabus.map((u) => <SyllabusCard key={u.no} unit={u} total={totalHours} open={openNo === u.no} onToggle={() => setOpenNo(openNo === u.no ? null : u.no)} />)}
      </div>
    </Section>
  )
}
