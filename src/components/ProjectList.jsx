import { Link } from 'react-router-dom'
import { getCover } from '../lib/media.js'
import { localePath, ui } from '../i18n.js'

export const initials = (title) => title.replace(/[^A-Za-zÀ-ÿ ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')

// items: projects (kind 'project'); capped = home variant with a short art panel.
export default function ProjectList({ items, lang, capped }) {
  return (
    <ol className={'proj-list' + (capped ? ' capped' : '')}>
      {items.map((p, i) => {
        const cover = getCover(p.slug)
        const { title, summary } = p[lang]
        return (
          <li className="proj" key={p.slug} data-reveal style={{ '--i': i }}>
            <Link className="proj-in" to={localePath(lang, `/projects/${p.slug}`)}>
              <div className="proj-art" aria-hidden="true">
                <span className="proj-idx">{String(i + 1).padStart(2, '0')}</span>
                {cover ? <img src={cover} alt="" loading="lazy" /> : <span className="proj-mono">{initials(title)}</span>}
              </div>
              <div className="proj-body">
                <div className="proj-top"><h3>{title}</h3><span className="proj-year">{p.year}</span></div>
                {summary && <p className="proj-sum">{summary}</p>}
                <ul className="tags">{(p.cardTags ?? p.tags).map((t) => <li key={t}>{t}</li>)}</ul>
                <span className="proj-go">{ui(lang).view}<i aria-hidden="true">→</i></span>
              </div>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
