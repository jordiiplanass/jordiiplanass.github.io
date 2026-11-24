import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getCover } from '../lib/media.js'
import { toolIcons, home } from '../data/home.js'
import { localePath, ui } from '../i18n.js'
import Arrow from './Arrow.jsx'
import { initials } from './ProjectList.jsx'

// items: projects (kind 'project'). Horizontal scroll-snap rail of landscape cards (not infinite: there are few).
// Each card lists its tools as large chips, with the logo when public/icons has one (see toolIcons in home.js).
export default function AppRail({ items, lang }) {
  const t = ui(lang)
  const track = useRef(null)
  const step = (d) => track.current.scrollBy({ left: d * track.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <div className="rail">
      <ul className="rail-track" ref={track} tabIndex={0} aria-label={t.projects.title.join('')}>
        {items.map((p) => {
          const cover = getCover(p.slug)
          const { title, summary } = p[lang]
          return (
            <li className="rail-card" key={p.slug}>
              <Link to={localePath(lang, `/projects/${p.slug}`)} draggable={false}>
                <div className="rail-art" aria-hidden="true">
                  {cover ? <img src={cover} alt="" loading="lazy" draggable={false} /> : <span className="proj-mono">{initials(title)}</span>}
                </div>
                <div className="rail-body">
                  <div className="proj-top"><h3>{title}</h3><span className="proj-year">{p.year}</span></div>
                  {summary && <p className="proj-sum">{summary}</p>}
                  <p className="rail-label">{home[lang].stackLabel}</p>
                  <ul className="tools">
                    {(p.cardTags ?? p.tags).map((tag) => (
                      <li key={tag}>{toolIcons[tag] && <img src={`/icons/${toolIcons[tag]}.svg`} alt="" width="22" height="22" />}{tag}</li>
                    ))}
                  </ul>
                  <span className="proj-go">{t.view}<i aria-hidden="true"><Arrow /></i></span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="cf-ctl">
        <button type="button" onClick={() => step(-1)} aria-label={t.prev}><Arrow dir="left" chevron /></button>
        <button type="button" onClick={() => step(1)} aria-label={t.next}><Arrow chevron /></button>
      </div>
    </div>
  )
}
