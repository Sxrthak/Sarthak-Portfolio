import { useState } from 'react'
import './App.css'

import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certs from './components/Certs'
import Contact from './components/Contact'

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {/* Ambient background layers */}
      <div className="bg-field" />
      <div className="bg-grid" />
      <div className="bg-noise" />

      <Cursor />
      <Loader onDone={() => setBooted(true)} />

      {booted && (
        <>
          <ScrollProgress />
          <Nav />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certs />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}
