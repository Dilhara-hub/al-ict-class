export default function Section({ id, title, intro, dark, children }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${dark ? 'bg-navy-900 text-slate-200' : 'bg-white'}`}>
      <div className="mx-auto max-w-6xl px-5">
        <h2 className={`max-w-2xl text-3xl font-extrabold sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
        {intro && <p className={`mt-3 max-w-2xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
