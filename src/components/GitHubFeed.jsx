import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import { staggerParent, staggerItem } from './Reveal'
import Icon from './Icons'

const USER = profile.links.github.split('/').filter(Boolean).pop()
const CACHE_KEY = 'gh-repos'
// Repos kept off the portfolio: the profile README, DSA practice, and the retired cost tool.
const HIDE = new Set([USER, 'DSA-C-', 'AWS-Cost-Optimization'].map((n) => n.toLowerCase()))

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000)
  if (days < 1) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  return months < 12 ? `${months} mo ago` : `${Math.floor(months / 12)} yr ago`
}

async function loadRepos() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null')
    if (cached) return cached
  } catch {}
  const res = await fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=30`)
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const repos = (await res.json())
    .filter((r) => !r.fork && !HIDE.has(r.name.toLowerCase()))
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      pushed: r.pushed_at,
    }))
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(repos)) } catch {}
  return repos
}

/** Recently pushed public repos, fetched live from the GitHub API. Renders nothing on failure. */
export default function GitHubFeed() {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    let alive = true
    loadRepos()
      .then((r) => alive && setRepos(r))
      .catch((err) => {
        console.warn('GitHub feed unavailable:', err.message)
        if (alive) setRepos([])
      })
    return () => { alive = false }
  }, [])

  if (!repos?.length) return null

  return (
    <div className="gh-feed">
      <div className="gh-feed-head mono">
        <span className="pulse-dot" />
        <span>live from github.com/{USER} · recently pushed</span>
      </div>
      <motion.div
        className="gh-grid"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
      >
        {repos.map((r) => (
          <motion.a
            key={r.name}
            className="gh-repo"
            href={r.url}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
            data-cursor
          >
            <div className="gh-repo-name mono">
              <Icon.github width={15} height={15} />
              <span>{r.name}</span>
            </div>
            {r.description && <p className="gh-repo-desc">{r.description}</p>}
            <div className="gh-repo-meta mono">
              {r.language && <span>{r.language}</span>}
              {r.stars > 0 && <span>★ {r.stars}</span>}
              <span>updated {timeAgo(r.pushed)}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}
