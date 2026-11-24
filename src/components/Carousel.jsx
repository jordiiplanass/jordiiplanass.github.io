import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getCover } from '../lib/media.js'
import { initials } from './ProjectList.jsx'
import { localePath, ui } from '../i18n.js'

// items: projects (kind 'game'). Native scroll-snap scroller; cards scale/fade by distance from centre.
// ponytail: no 3x infinite loop and no pointer drag (wheel/touch/buttons only); add if the list grows.
export default function Carousel({ items, lang, centerSlug = 'pipo-the-penguin' }) {
  const ref = useRef()
  const t = ui(lang)

  useEffect(() => {
    const box = ref.current
    const slides = [...box.querySelectorAll('.slide')]
    if (!slides.length) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const update = () => {
      if (reduce) return
      const b = box.getBoundingClientRect()
      const cx = b.left + b.width / 2
      for (const s of slides) {
        const r = s.getBoundingClientRect()
        const d = Math.min(Math.abs(cx - (r.left + r.width / 2)) / (b.width / 2), 1)
        s.firstChild.style.setProperty('--s', 1 - d * 0.16)
        s.firstChild.style.setProperty('--o', 1 - d * 0.55)
      }
    }
    const mid = slides.find((s) => s.dataset.slug === centerSlug) ?? slides[0]
    box.scrollLeft = mid.offsetLeft - (box.clientWidth - mid.offsetWidth) / 2
    update()
    let raf
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    box.addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', onScroll) }
  }, [items, centerSlug])

  const step = (dir) => {
    const [a, b] = ref.current.querySelectorAll('.slide')
    ref.current.scrollBy({ left: dir * (b ? b.offsetLeft - a.offsetLeft : a.offsetWidth), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="carousel" ref={ref}>
        <div className="track">
          {items.map((g) => {
            const { title } = g[lang]
            const cover = getCover(g.slug)
            return (
              <Link className="slide" key={g.slug} data-slug={g.slug} to={localePath(lang, `/games/${g.slug}`)} draggable={false}>
                <div className="card">
                  <div className="thumb">
                    {cover ? <img src={cover} alt={title} loading="lazy" draggable={false} /> : <span className="mono">{initials(title)}</span>}
                    <div className="shade" aria-hidden="true" />
                    <div className="capt">
                      <div className="row"><h3>{title}</h3><span className="year">{g.year}</span></div>
                      <ul className="tags">{(g.cardTags ?? g.tags).slice(0, 3).map((x) => <li key={x}>{x}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="ctrls">
        <button className="arrow" aria-label={t.prev} onClick={() => step(-1)}>←</button>
        <button className="arrow" aria-label={t.next} onClick={() => step(1)}>→</button>
      </div>
    </div>
  )
}
