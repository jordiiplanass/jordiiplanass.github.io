import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ui } from '../i18n.js'
import Arrow from './Arrow.jsx'

// items: [{ slug, title, year, cover, href }]. Swipeable deck: drag the top card past 30% of its width
// (or use the buttons) to send it to the back. Key it by its list so the order resets when the list changes.
export default function Deck({ items, lang }) {
  const t = ui(lang)
  const [order, setOrder] = useState(items.map((_, i) => i)) // order[0] = top card
  const [dx, setDx] = useState(0)
  const [state, setState] = useState('idle') // idle | drag | fly
  const drag = useRef(null)
  const moved = useRef(false)

  const next = () => setOrder((o) => [...o.slice(1), o[0]])
  const prev = () => setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])

  const down = (e) => {
    if (state === 'fly') return
    drag.current = { x: e.clientX, id: e.pointerId, w: e.currentTarget.offsetWidth, cap: false }
    moved.current = false
  }
  const move = (e) => {
    const d = drag.current
    if (!d) return
    const x = e.clientX - d.x
    if (Math.abs(x) > 6 && !d.cap) { d.cap = true; moved.current = true; e.currentTarget.setPointerCapture(d.id); setState('drag') }
    if (d.cap) setDx(x)
  }
  const up = () => {
    const d = drag.current
    drag.current = null
    if (!d || !d.cap) return
    if (Math.abs(dx) > d.w * 0.3) {
      setState('fly'); setDx(Math.sign(dx) * d.w * 1.6)
      setTimeout(() => { next(); setState('idle'); setDx(0) }, 250)
    } else { setState('idle'); setDx(0) }
  }

  return (
    <div className="deck">
      <ul className="deck-cards">
        {items.map((g, i) => {
          const pos = order.indexOf(i)
          const top = pos === 0
          return (
            <li key={g.slug} className={'deck-card' + (top ? ' deck-top' : '') + (top && state === 'drag' ? ' deck-drag' : '')}
              style={{ ...(top ? { transform: `translateX(${dx}px) rotate(${dx / 18}deg)` } : { '--p': pos }), zIndex: items.length - pos }}
              onPointerDown={top ? down : undefined} onPointerMove={top ? move : undefined}
              onPointerUp={top ? up : undefined} onPointerCancel={top ? up : undefined}>
              <Link to={g.href} tabIndex={top ? 0 : -1} draggable={false}
                onClick={(e) => { if (moved.current) { e.preventDefault(); moved.current = false } }}>
                <img src={g.cover} alt={g.title} width="600" height="800" draggable={false} />
                <span className="deck-cap"><strong>{g.title}</strong> <span>{g.year}</span></span>
              </Link>
            </li>
          )
        })}
      </ul>
      {items.length > 1 && (
        <div className="deck-ctl">
          <button type="button" onClick={prev} aria-label={t.prev}><Arrow dir="left" chevron /></button>
          <span aria-live="polite">{order[0] + 1} / {items.length}</span>
          <button type="button" onClick={next} aria-label={t.next}><Arrow chevron /></button>
        </div>
      )}
    </div>
  )
}
