import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/website'
import { waUrl } from '../lib'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = 'text-xs xl:text-sm font-medium text-slate-200 hover:text-white transition-colors'

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-8xl items-center justify-between px-5" aria-label="ප්‍රධාන මෙනුව">
        <a href="#home" className="flex items-center gap-3 text-white group">
          <img
            src="/logo.png"
            alt="Dilhara Samaranayake Logo"
            className="h-10 w-10 rounded-full border border-iris-400/40 object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="text-base font-bold leading-tight">
              Dilhara Samaranayake <span className="text-iris-400">ICT</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-400">
              A/L ICT
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-3 xl:gap-5 lg:flex">
          {site.nav.map(([id, label]) => (
            <li key={id}>
              <a
                className={`${link} ${
                  id === 'python-bootcamp'
                    ? 'text-cyan2 font-semibold hover:text-cyan-300'
                    : id === 'webdev-bootcamp'
                    ? 'text-orange-400 font-semibold hover:text-orange-300'
                    : ''
                }`}
                href={`#${id}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={waUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-iris-500 px-4 py-2 text-xs xl:text-sm font-semibold text-white transition-colors hover:bg-iris-600 whitespace-nowrap"
            >
              පන්තියට සම්බන්ධ වන්න
            </a>
          </li>
        </ul>

        <button
          className="p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'මෙනුව වසන්න' : 'මෙනුව විවෘත කරන්න'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-navy-950 px-5 pb-5 lg:hidden">
          {site.nav.map(([id, label]) => (
            <li key={id}>
              <a
                onClick={() => setOpen(false)}
                className={`text-sm font-medium text-slate-200 hover:text-white block py-3 ${
                  id === 'python-bootcamp'
                    ? 'text-cyan2 font-semibold'
                    : id === 'webdev-bootcamp'
                    ? 'text-orange-400 font-semibold'
                    : ''
                }`}
                href={`#${id}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waUrl()}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-iris-500 px-5 py-3 text-center font-semibold text-white"
            >
              පන්තියට සම්බන්ධ වන්න
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
