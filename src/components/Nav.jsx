import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks'
import { profile } from '../data'
import Icon from './Icons'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]
const ids = items.map((i) => i.id)

export default function Nav() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#home" className="nav-brand" onClick={go('home')} data-cursor>
          <span className="brand-mark">SC</span>
          <span className="brand-name mono">sarthak.dev</span>
        </a>

        <nav className="nav-pill" aria-label="Primary">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={go(it.id)}
              className={`nav-link ${active === it.id ? 'active' : ''}`}
            >
              {active === it.id && (
                <motion.span layoutId="nav-active" className="nav-active" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span>{it.label}</span>
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={profile.resume} download data-cursor>
          <Icon.download width={17} height={17} />
          <span>Résumé</span>
        </a>

        <button
          className={`nav-burger ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={go(it.id)}
                className={`nav-mobile-link ${active === it.id ? 'active' : ''}`}
              >
                {it.label}
              </a>
            ))}
            <a className="nav-mobile-cta" href={profile.resume} download onClick={() => setOpen(false)}>
              Download résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
