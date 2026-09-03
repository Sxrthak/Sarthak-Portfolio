import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import Icon from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <Reveal><span className="eyebrow">06 — Let's build</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="contact-title">
              Got infrastructure that should <span className="text-grad">deploy itself</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="contact-lead">
              I'm looking for DevOps, Cloud Engineering, and Software Engineering internships.
              If that's you — let's talk.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="contact-actions">
            <Magnetic>
              <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`} data-cursor>
                <Icon.mail width={20} height={20} />
                <span>Email me</span>
              </a>
            </Magnetic>
            <button className="email-copy mono" onClick={copyEmail} data-cursor aria-live="polite">
              <Icon.copy width={16} height={16} />
              <span>{copied ? 'copied ✓' : profile.email}</span>
            </button>
          </Reveal>

          <Reveal delay={0.2} className="contact-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact-link" data-cursor>
              <Icon.github width={18} height={18} /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact-link" data-cursor>
              <Icon.linkedin width={18} height={18} /> LinkedIn
            </a>
            <a href={profile.resume} download className="contact-link" data-cursor>
              <Icon.download width={18} height={18} /> Résumé
            </a>
          </Reveal>
        </div>

        <footer className="footer">
          <div className="footer-brand mono">
            <span className="brand-mark sm">SC</span>
            {profile.name}
          </div>
          <p className="footer-note mono">
            Built with React &amp; Framer Motion · {new Date().getFullYear()}
          </p>
          <button className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-cursor>
            back to top ↑
          </button>
        </footer>
      </div>
    </section>
  )
}
