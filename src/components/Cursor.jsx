import { useEffect, useRef } from 'react'

/**
 * A two-part custom cursor: a precise dot that tracks 1:1, and a soft ring
 * that lags with easing and grows over interactive elements.
 *
 * The elements are ALWAYS rendered (hidden via CSS for coarse pointers) so the
 * effect can bind to real refs — gating render on state would make the effect
 * capture null refs and never move the cursor.
 */
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    document.body.classList.add('has-custom-cursor')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf
    let visible = false

    const show = () => {
      if (visible) return
      visible = true
      dotRef.current?.classList.add('is-visible')
      ringRef.current?.classList.add('is-visible')
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      const dot = dotRef.current
      if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
      show()
    }

    const loop = () => {
      rx += (mx - rx) * 0.2
      ry += (my - ry) * 0.2
      const ring = ringRef.current
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    const setHover = (on) => ringRef.current?.classList.toggle('is-hover', on)
    const onOver = (e) => {
      if (e.target.closest?.('a, button, [data-cursor]')) setHover(true)
    }
    const onOut = (e) => {
      if (e.target.closest?.('a, button, [data-cursor]')) setHover(false)
    }
    const onDown = () => ringRef.current?.classList.add('is-down')
    const onUp = () => ringRef.current?.classList.remove('is-down')
    const onLeave = () => {
      visible = false
      dotRef.current?.classList.remove('is-visible')
      ringRef.current?.classList.remove('is-visible')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
