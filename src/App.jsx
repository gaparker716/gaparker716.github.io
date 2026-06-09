import { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const sectionsRef = useRef({})
  const [active, setActive] = useState('home')
  const register = (id) => (el) => {
    if (el) sectionsRef.current[id] = el
    else delete sectionsRef.current[id]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = Object.keys(sectionsRef.current).find(
            (key) => sectionsRef.current[key] === visible[0].target
          )
          if (id) setActive(id)
        }
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    Object.values(sectionsRef.current).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={toggleTheme} active={active} />
      <main className="main">
        <div ref={register('home')} id="home" className="page"><Home /></div>
        <div ref={register('about')} id="about"><About /></div>
        <div ref={register('experience')} id="experience"><Experience /></div>
        <div ref={register('projects')} id="projects"><Projects /></div>
        <div ref={register('contact')} id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}
