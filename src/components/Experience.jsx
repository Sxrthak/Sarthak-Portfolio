import { motion } from 'framer-motion'
import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">03 — Experience</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Where I've shipped in production</h2>
          </Reveal>
        </div>

        <div className="timeline">
          <motion.span
            className="timeline-rail"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          {experience.map((job) => (
            <Reveal className="timeline-item" key={job.company}>
              <span className="timeline-node" />
              <div className="timeline-card" data-cursor>
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-company">
                      {job.company} <span className="timeline-mode">· {job.mode}</span>
                    </div>
                  </div>
                  <span className="timeline-period mono">{job.period}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {job.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
