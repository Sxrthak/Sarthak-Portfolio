import { useEffect, useRef, useState } from 'react'
import { profile, skillGroups, experience, projects, certifications } from '../data'
import Reveal from './Reveal'

const PROMPT = 'guest@sarthak:~$'

// Each command returns lines to print. A line is a string, or { text, href } for a link,
// or { text, tone } to colour it.
const commands = {
  help: () => [
    'Available commands:',
    ...[
      ['whoami', 'who I am, in one line'],
      ['skills', 'my stack, grouped'],
      ['experience', 'where I have worked'],
      ['projects', 'what I have built'],
      ['open <n>', 'open project n (live site or code)'],
      ['certs', 'certifications'],
      ['contact', 'how to reach me'],
      ['resume', 'download my résumé'],
      ['github', 'open my GitHub'],
      ['clear', 'clear the screen'],
    ].map(([c, d]) => `  ${c.padEnd(12)}${d}`),
    { text: 'Tip: Tab completes, ↑/↓ walks history, Ctrl+K jumps here from anywhere.', tone: 'dim' },
  ],
  whoami: () => [
    `${profile.name} — ${profile.role}`,
    { text: profile.summary, tone: 'dim' },
    { text: profile.status, tone: 'ok' },
  ],
  skills: () =>
    skillGroups.flatMap((g) => [{ text: `# ${g.title}`, tone: 'head' }, `  ${g.items.join(', ')}`]),
  experience: () =>
    experience.flatMap((e) => [
      { text: `${e.role} @ ${e.company} (${e.mode})`, tone: 'head' },
      { text: `  ${e.period}`, tone: 'dim' },
      ...e.points.map((p) => `  • ${p}`),
    ]),
  projects: () => [
    ...projects.map((p, i) => ({
      text: `  [${i + 1}] ${p.title}  —  ${p.stack.slice(0, 4).join(' · ')}`,
    })),
    { text: 'Run `open 1` to open a project.', tone: 'dim' },
  ],
  open: (arg) => {
    const p = projects[Number(arg) - 1]
    if (!p) return [{ text: `open: no project "${arg ?? ''}" — try \`projects\``, tone: 'err' }]
    const url = p.live || p.repo
    if (!url) return [{ text: `open: ${p.title} has no public link yet`, tone: 'err' }]
    window.open(url, '_blank', 'noopener')
    return [{ text: `Opening ${url}`, href: url }]
  },
  certs: () =>
    certifications.map((c) => `  ✔ ${c.title} (${c.code}, ${c.date})${c.score ? ` — ${c.score}` : ''}`),
  contact: () => [
    { text: `email     ${profile.email}`, href: `mailto:${profile.email}` },
    { text: `linkedin  ${profile.links.linkedin}`, href: profile.links.linkedin },
    { text: `github    ${profile.links.github}`, href: profile.links.github },
  ],
  resume: () => {
    const a = document.createElement('a')
    a.href = profile.resume
    a.download = ''
    a.click()
    return [{ text: 'Downloading résumé…', tone: 'ok' }]
  },
  github: () => {
    window.open(profile.links.github, '_blank', 'noopener')
    return [{ text: `Opening ${profile.links.github}`, href: profile.links.github }]
  },
  ls: () => ['about.txt  skills/  experience/  projects/  certs/  resume.pdf'],
  sudo: (arg, raw) =>
    raw.includes('hire')
      ? [{ text: 'Permission granted. Sending you to my inbox…', tone: 'ok' }, ...commands.contact()]
      : [{ text: 'sudo: nice try. (hint: sudo hire-me)', tone: 'err' }],
}

const names = [...Object.keys(commands), 'clear']

const intro = [
  { text: `Welcome to ${profile.firstName}'s shell. Type \`help\` to get started.`, tone: 'ok' },
]

export default function Terminal() {
  const [history, setHistory] = useState(intro)
  const [input, setInput] = useState('')
  const [past, setPast] = useState([])
  const [cursor, setCursor] = useState(-1)
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  // Ctrl/Cmd+K jumps to the terminal from anywhere on the page.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        document.getElementById('shell')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        inputRef.current?.focus({ preventScroll: true })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [history])

  const run = (raw) => {
    const line = raw.trim()
    const echo = { text: `${PROMPT} ${line}`, tone: 'cmd' }
    if (!line) return setHistory((h) => [...h, echo])
    setPast((p) => [line, ...p].slice(0, 50))
    setCursor(-1)

    const [name, arg] = line.split(/\s+/)
    const cmd = name.toLowerCase()
    if (cmd === 'clear') return setHistory([])
    const fn = commands[cmd]
    const out = fn
      ? fn(arg, line)
      : [{ text: `command not found: ${cmd} — type \`help\``, tone: 'err' }]
    setHistory((h) => [...h, echo, ...out])
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = names.filter((n) => n.startsWith(input.trim().toLowerCase()))
      if (match.length === 1) setInput(match[0] + ' ')
      else if (match.length > 1) setHistory((h) => [...h, { text: match.join('  '), tone: 'dim' }])
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(cursor + 1, past.length - 1)
      if (past[next] !== undefined) { setCursor(next); setInput(past[next]) }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = cursor - 1
      setCursor(Math.max(next, -1))
      setInput(next >= 0 ? past[next] : '')
    }
  }

  return (
    <section id="shell" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">06 — Prefer the terminal?</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Explore this portfolio from a shell</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Type <span className="mono kbd">help</span> to see what it can do. Press{' '}
              <span className="mono kbd">Ctrl</span> + <span className="mono kbd">K</span> anywhere to jump back here.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="term" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
            <div className="loader-head">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="loader-title mono">sarthak — zsh</span>
            </div>
            <div className="term-body mono" ref={bodyRef} aria-live="polite">
              {history.map((l, i) => {
                const item = typeof l === 'string' ? { text: l } : l
                const cls = `term-line ${item.tone ? `t-${item.tone}` : ''}`
                return item.href ? (
                  <a key={i} className={cls} href={item.href} target="_blank" rel="noreferrer">{item.text}</a>
                ) : (
                  <div key={i} className={cls}>{item.text}</div>
                )
              })}
              <label className="term-input-row">
                <span className="term-prompt">{PROMPT}</span>
                <input
                  ref={inputRef}
                  className="term-input mono"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="Terminal command"
                />
              </label>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
