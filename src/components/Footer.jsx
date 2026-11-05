import { site } from '../data/website'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div className="flex items-start gap-4">
          <img
            src="/logo.png"
            alt={site.brand}
            className="h-14 w-14 rounded-full border border-white/20 object-cover shadow-md"
          />
          <div>
            <p className="text-lg font-bold text-white">{site.brand}</p>
            <p className="mt-1 text-sm text-slate-400">A/L ICT පන්තිය - මාතර</p>
            <p className="mt-2 text-xs text-iris-400">Theory · Practical · Revision · Python & Web Dev Boost Camps</p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {site.nav.map(([id, l]) => (
            <li key={id}>
              <a
                className={`transition-colors hover:text-white ${
                  id === 'python-bootcamp'
                    ? 'text-cyan2 font-medium hover:text-cyan-300'
                    : id === 'webdev-bootcamp'
                    ? 'text-orange-400 font-medium hover:text-orange-300'
                    : ''
                }`}
                href={`#${id}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-sm">
          <p className="font-medium text-white">{site.locationText}</p>
          <p>{site.phone || 'දුරකථන අංකය: පසුව එක් කෙරේ'}</p>
          <div className="pt-2 space-x-4">
            {site.facebookUrl && (
              <a className="text-slate-300 transition-colors hover:text-white" href={site.facebookUrl}>
                Facebook
              </a>
            )}
            {site.youtubeUrl && (
              <a className="text-slate-300 transition-colors hover:text-white" href={site.youtubeUrl}>
                YouTube
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.brand}. සියලුම හිමිකම් ඇවිරිණි.
      </p>
    </footer>
  )
}
