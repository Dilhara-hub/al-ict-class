import { ChevronDown } from 'lucide-react'
export default function SyllabusCard({ unit, open, onToggle, total }) {
  const pct = ((unit.hours / total) * 100).toFixed(1)
  const id = `unit-${unit.no}`
  return (
    <div className={`rounded-xl border ${open ? 'border-iris-500 bg-iris-500/5' : 'border-slate-200 bg-white'}`}>
      <h3>
        <button onClick={onToggle} aria-expanded={open} aria-controls={id} className="flex w-full items-center gap-4 p-4 text-left">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 font-bold text-white">{unit.no}</span>
          <span className="flex-1">
            <span className="block font-semibold text-navy-900">{unit.si}</span>
            <span className="block text-sm text-slate-500">{unit.en}</span>
          </span>
          <span className="whitespace-nowrap text-sm font-semibold text-iris-600">පැය {unit.hours}</span>
          <ChevronDown size={20} aria-hidden="true" className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <div id={id} role="region" className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="space-y-3 px-4 pb-5 pt-1 sm:pl-18">
            <p className="text-sm text-slate-600">ඒකක අංකය: <b>{unit.no}</b> · වෙන් කළ කාලය: <b>පැය {unit.hours}</b> (මුළු නිර්දේශයෙන් {pct}%)</p>
            <p className="text-slate-600">{unit.description || 'මෙම ඒකකයේ සවිස්තරාත්මක විස්තරය ඉක්මනින් එක් කෙරේ.'}</p>
            {unit.subtopics.length ? (
              <ul className="list-disc space-y-1 pl-5 text-slate-700">{unit.subtopics.map((s) => <li key={s}>{s}</li>)}</ul>
            ) : <p className="rounded-lg border border-dashed border-slate-300 p-3 text-sm text-slate-500">උපවිෂයන් (Subtopics) පසුව එක් කෙරේ.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
