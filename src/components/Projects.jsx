import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import Icon from './Icons'
import GitHubFeed from './GitHubFeed'

export default function Projects() {
  const [open, setOpen] = useState(null) // the screenshot shown full-size

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">04 — Selected work</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Things I've built and shipped</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Built end-to-end — from a live product to the pipeline that ships it. The code is one click away.
            </p>
          </Reveal>
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 0.08}>
              <TiltCard className="project-card" data-cursor>
                <div className="project-index mono">0{idx + 1}</div>
                <div className="project-metric">
                  <span className="project-metric-big text-grad">{p.metric.big}</span>
                  <span className="project-metric-small">{p.metric.small}</span>
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-headline">{p.headline}</p>

                {p.shots && (
                  <div className="project-shots">
                    {p.shots.map((shot) => (
                      <button
                        key={shot.src}
                        className="project-shot"
                        onClick={() => setOpen(shot)}
                        aria-label={`Enlarge: ${shot.alt}`}
                        data-cursor
                      >
                        <img src={shot.src} alt={shot.alt} loading="lazy" width="1440" height="900" />
                      </button>
                    ))}
                  </div>
                )}

                <ul className="project-points">
                  {p.points.map((pt, i) => (
                    <li key={i}>
                      <span className="bullet" aria-hidden="true">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="project-foot">
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span className="chip chip-sm" key={s}>{s}</span>
                    ))}
                  </div>
                  <span className="project-date mono">{p.period}</span>
                </div>

                {(p.repo || p.live) && (
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="link-arrow" data-cursor>
                        <span>Visit live site</span>
                        <Icon.arrowUpRight width={16} height={16} />
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="link-arrow" data-cursor>
                        <Icon.github width={16} height={16} />
                        <span>View code</span>
                        <Icon.arrowUpRight width={16} height={16} />
                      </a>
                    )}
                  </div>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <GitHubFeed />

        <Reveal delay={0.1} className="projects-cta">
          <a href="https://github.com/Sxrthak" target="_blank" rel="noreferrer" className="link-arrow" data-cursor>
            <Icon.github width={18} height={18} />
            <span>More on GitHub</span>
            <Icon.arrowUpRight width={16} height={16} />
          </a>
        </Reveal>
      </div>

      {/* Rendered outside the tilt cards: a transformed ancestor would trap position: fixed. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={open.alt}
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.figure
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={open.src} alt={open.alt} />
              <figcaption className="mono">{open.caption}</figcaption>
            </motion.figure>
            <button className="lightbox-close mono" onClick={() => setOpen(null)} autoFocus>
              close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
