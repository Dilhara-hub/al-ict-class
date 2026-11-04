import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import AboutClass from './components/AboutClass'
import Syllabus from './components/Syllabus'
import PythonBoostCamp from './components/PythonBoostCamp'
import Timetable from './components/Timetable'
import Teacher from './components/Teacher'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <AboutClass />
        <Syllabus />
        <PythonBoostCamp />
        <Timetable />
        <Teacher />
        <Contact />
      </main>
      <Footer />
      {show && (
        <button
          aria-label="ඉහළට යන්න"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-iris-500 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-iris-600 focus-visible:ring-2 focus-visible:ring-white"
        >
          <ArrowUp />
        </button>
      )}
    </>
  )
}
