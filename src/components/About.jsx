import { motion } from 'framer-motion'
import { profile, metrics, education } from '../data'
import { useCountUp, useInView } from '../hooks'
import Reveal from './Reveal'
import Icon from './Icons'

function Metric({ m, start }) {
  const value = useCountUp(m.value, { start })
  return (
    <div className="metric">
      <div className="metric-value">
        <span className="metric-num">{m.prefix || ''}{value}{m.suffix || ''}</span>
      </div>
      <div className="metric-label">{m.label}</div>
      <div className="metric-sub mono">{m.sub}</div>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <Reveal><span className="eyebrow">01 — Profile</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title">
                Automating the boring parts of the cloud, so releases stay <span className="text-grad">boring too</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-lead">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="about-note">
                Final-year B.Tech CSE student in Cloud Computing &amp; Automation, and an
                <strong> AWS Certified Solutions Architect – Associate</strong> and
                <strong> Cloud Practitioner</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="edu-list">
              {education.map((e) => (
                <div className="edu-item" key={e.school}>
                  <div className="edu-dot" />
                  <div>
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-detail">{e.detail}</div>
                  </div>
                  <div className="edu-meta mono">
                    <span>{e.period}</span>
                    {e.score && <span className="edu-score">{e.score}</span>}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <motion.div ref={ref} className="metrics-card">
            <div className="metrics-card-head mono">
              <Icon.spark width={16} height={16} />
              <span>impact.log</span>
            </div>
            <div className="metrics-grid">
              {metrics.map((m) => (
                <Metric key={m.label} m={m} start={inView} />
              ))}
            </div>
            <div className="metrics-foot mono">measured across internship &amp; projects</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
