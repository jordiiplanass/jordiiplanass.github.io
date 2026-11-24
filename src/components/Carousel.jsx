import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from './Arrow.jsx'
import { getCover } from '../lib/media.js'
import { localePath, ui } from '../i18n.js'

// items: projects (kind 'game'). Infinite coverflow: the active card is centred and flat, neighbours on both
// sides are turned and pushed back. The list is repeated to ≥8 cards so a card only wraps from one side to the
// other while it is beyond ±2 (invisible). Buttons, ←/→ keys, swipe, or a click on a side card move it.
export default function Carousel({ items, lang }) {
  const t = ui(lang)
  const n = items.length
  const list = Array.from({ length: Math.ceil(8 / n) }, () => items).flat()
  const m = list.length
  const half = Math.floor(m / 2)
  const [active, setActive] = useState(0) // unbounded; wrapped with modulo
  const start = useRef(null)
  const cur = items[((active % n) + n) % n]
  const step = (d) => setActive((a) => a + d)

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1) }
  }
  const up = (e) => {
    if (start.current == null) return
    const d = e.clientX - start.current
    start.current = null
    if (Math.abs(d) > 40) step(d < 0 ? 1 : -1)
  }

  return (
    <div className="cf" tabIndex={0} role="group" aria-roledescription="carousel" aria-label={t.games.title.join('')} onKeyDown={onKey}
      onPointerDown={(e) => { start.current = e.clientX }} onPointerUp={up} onPointerCancel={() => { start.current = null }}>
      <ul className="cf-stage">
        {list.map((g, i) => {
          const o = ((((i - active + half) % m) + m) % m) - half
          const a = Math.abs(o)
          const { title } = g[lang]
          const img = <img src={getCover(g.slug)} alt={o === 0 ? title : ''} width="600" height="800" draggable={false} />
          return (
            <li key={i} className={'cf-card' + (a > 2 ? ' cf-far' : '')} style={{ '--o': o, '--s': Math.sign(o), '--a': a }} aria-hidden={o !== 0 || undefined}>
              {o === 0
                ? <Link to={localePath(lang, `/games/${g.slug}`)} draggable={false}>{img}</Link>
                : <button type="button" tabIndex={-1} onClick={() => step(o)}>{img}</button>}
            </li>
          )
        })}
      </ul>
      <div className="cf-title" aria-live="polite">
        <p className="cf-role">{cur[lang].meta.role}</p>
        <p className="cf-game"><strong>{cur[lang].title}</strong> <span>{cur.year}</span></p>
        <p className="cf-about">{cur[lang].meta.about}</p>
      </div>
      <div className="cf-ctl">
        <button type="button" onClick={() => step(-1)} aria-label={t.prev}><Arrow dir="left" chevron /></button>
        <button type="button" onClick={() => step(1)} aria-label={t.next}><Arrow chevron /></button>
      </div>
    </div>
  )
}
