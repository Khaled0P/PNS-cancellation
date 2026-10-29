import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// A button that runs away from the pointer. After `maxEscapes` it gets tired
// and becomes clickable, showing `caughtLabel`.
export default function DodgeButton({
  label,
  caughtLabel,
  taunts = [],
  maxEscapes = 5,
  proximity = false,
  className = '',
  onClick,
}) {
  const ref = useRef(null)
  const lastFlee = useRef(0)
  const [pos, setPos] = useState(null)
  const [escapes, setEscapes] = useState(0)
  const caught = escapes >= maxEscapes

  const flee = useCallback((px, py) => {
    const now = Date.now()
    if (now - lastFlee.current < 120) return
    lastFlee.current = now

    const btn = ref.current
    if (!btn) return
    const { width: w, height: h } = btn.getBoundingClientRect()
    const margin = 16
    const maxX = Math.max(margin, window.innerWidth - w - margin)
    const maxY = Math.max(margin, window.innerHeight - h - margin)
    let x
    let y
    let tries = 0
    do {
      x = margin + Math.random() * (maxX - margin)
      y = margin + Math.random() * (maxY - margin)
      tries++
    } while (tries < 40 && Math.hypot(x + w / 2 - px, y + h / 2 - py) < 240)

    setPos({ x, y })
    setEscapes((e) => e + 1)
  }, [])

  // On the hardest level, it flees before the cursor even touches it.
  useEffect(() => {
    if (!proximity || caught) return
    const onMove = (e) => {
      const r = ref.current?.getBoundingClientRect()
      if (!r) return
      const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right)
      const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom)
      if (Math.hypot(dx, dy) < 70) flee(e.clientX, e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [proximity, caught, flee])

  const fleeFromSelf = () => {
    const r = ref.current.getBoundingClientRect()
    flee(r.left + r.width / 2, r.top + r.height / 2)
  }

  const text = caught
    ? caughtLabel
    : escapes > 0 && taunts.length
      ? taunts[(escapes - 1) % taunts.length]
      : label

  const button = (
    <button
      ref={ref}
      type="button"
      className={`btn ${className} ${pos ? 'btn--loose' : ''} ${caught ? 'btn--caught' : ''}`}
      style={pos ? { left: pos.x, top: pos.y } : undefined}
      onPointerEnter={(e) => !caught && flee(e.clientX, e.clientY)}
      onPointerDown={(e) => {
        if (caught) return
        e.preventDefault()
        flee(e.clientX, e.clientY)
      }}
      // Keyboard users don't get a free pass either.
      onClick={() => (caught ? onClick() : fleeFromSelf())}
    >
      {text}
    </button>
  )

  if (!pos) return button
  return (
    <>
      <span className={`btn ${className} btn--ghost`} aria-hidden="true">{label}</span>
      {createPortal(button, document.body)}
    </>
  )
}
