import { motion } from 'framer-motion'
import { projects } from '../data'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import Icon from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">04 — Selected work</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Projects that paid for themselves</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Infrastructure and automation built end-to-end — from the boto3 scanner to the pipeline that ships it.
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
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="projects-cta">
          <a href="https://github.com/Sxrthak" target="_blank" rel="noreferrer" className="link-arrow" data-cursor>
            <Icon.github width={18} height={18} />
            <span>More on GitHub</span>
            <Icon.arrowUpRight width={16} height={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
