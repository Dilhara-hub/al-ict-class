import { MapPin, MessageCircle, Phone, Facebook, Youtube } from 'lucide-react'
import Section from './Section'
import { site } from '../data/website'
import { waUrl } from '../lib'
const row = 'flex items-center gap-3 rounded-xl border border-slate-200 p-4'
const Soon = ({ children }) => <span className="text-slate-400">{children} (පසුව එක් කෙරේ)</span>
export default function Contact() {
  return (
    <Section id="contact" title="සම්බන්ධ වන්න" intro="පන්තියට ඇතුළත් වීමට හෝ වැඩි විස්තර දැනගැනීමට WhatsApp මගින් පණිවිඩයක් එවන්න.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <a href={waUrl()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white hover:bg-green-700"><MessageCircle aria-hidden="true" />WhatsApp මගින් සම්බන්ධ වන්න</a>
          <div className={row}><Phone className="text-iris-600" aria-hidden="true" />{site.phone ? <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a> : <Soon>දුරකථන අංකය</Soon>}</div>
          <div className={row}><MapPin className="text-iris-600" aria-hidden="true" />{site.locationText}</div>
          <div className={row}><Facebook className="text-iris-600" aria-hidden="true" />{site.facebookUrl ? <a href={site.facebookUrl} target="_blank" rel="noreferrer">Facebook පිටුව</a> : <Soon>Facebook පිටුව</Soon>}</div>
          <div className={row}><Youtube className="text-iris-600" aria-hidden="true" />{site.youtubeUrl ? <a href={site.youtubeUrl} target="_blank" rel="noreferrer">YouTube නාලිකාව</a> : <Soon>YouTube නාලිකාව</Soon>}</div>
        </div>
        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {site.mapEmbedUrl
            ? <iframe title="පන්තියේ ස්ථානය" src={site.mapEmbedUrl} loading="lazy" className="h-full min-h-[320px] w-full border-0" />
            : <div className="grid h-full min-h-[320px] place-items-center p-6 text-center text-slate-400"><div><MapPin size={40} className="mx-auto" aria-hidden="true" /><p className="mt-2">Google Maps ස්ථානය මෙහි (website.js → mapEmbedUrl)</p></div></div>}
        </div>
      </div>
    </Section>
  )
}
