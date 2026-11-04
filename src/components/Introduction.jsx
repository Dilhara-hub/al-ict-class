import Section from './Section'
import Icon from './Icon'
import { site } from '../data/website'
export default function Introduction() {
  return (
    <Section id="about-ict" title="A/L ICT විෂය පිළිබඳව" intro="ICT යනු පරිගණක දැනුමට වඩා බොහෝ දේ ඉගෙනීමකි. එය අනාගතය සඳහා කුසලතා ගොඩනගන විෂයකි.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.intro.map(([icon, title, text]) => (
          <article key={title} className="rounded-2xl border border-slate-200 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-iris-500/10 text-iris-600"><Icon name={icon} size={22} /></span>
            <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
            <p className="mt-2 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
