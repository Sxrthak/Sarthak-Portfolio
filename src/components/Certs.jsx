import { motion } from 'framer-motion'
import { certifications, profile } from '../data'
import Reveal, { staggerParent, staggerItem } from './Reveal'
import Icon from './Icons'

export default function Certs() {
  return (
    <section id="certs" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">05 — Credentials</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Certified, and above the bar</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Scored <strong>900+/1000</strong> on both AWS exams — clearing each well above the required passing score.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="certs-grid"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certifications.map((c) => (
            <motion.a
              key={c.title}
              className="cert-card"
              variants={staggerItem}
              href={profile.links.credly}
              target="_blank"
              rel="noreferrer"
              data-cursor
            >
              <div className="cert-badge">
                <Icon.award width={26} height={26} />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{c.title}</h3>
                <div className="cert-meta mono">
                  <span>{c.code}</span>
                  <span className="cert-dot">·</span>
                  <span>{c.date}</span>
                </div>
                {c.score && <div className="cert-score">{c.score}</div>}
              </div>
              <Icon.arrowUpRight width={16} height={16} className="cert-arrow" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
