import Section from './Section'
import Icon from './Icon'
import { site } from '../data/website'
export default function AboutClass() {
  return (
    <Section dark id="about-class" title="පන්තිය ඉගැන්වෙන ආකාරය" intro="න්‍යාය, ප්‍රායෝගිකය සහ නිරන්තර පරීක්ෂණ එකට බැඳුණු ඉගැන්වීමේ ක්‍රමයක්.">
      <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {site.methods.map(([icon, title, text]) => (
          <article key={title} className="bg-navy-900 p-6">
            <Icon name={icon} size={26} className="text-cyan2" />
            <h3 className="mt-4 font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
