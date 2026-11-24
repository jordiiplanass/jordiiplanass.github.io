import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data'
import { useLang, useTitle, localePath } from '../i18n.js'
import { getGallery } from '../lib/media.js'
import { bold } from '../lib/bold.jsx'
import NotFound from './NotFound.jsx'

function Video({ b }) {
  const [on, setOn] = useState(false)
  if (b.placeholder) return <div className="panel vid vid-ph"><span aria-hidden="true">▶</span><p>{b.placeholder}</p></div>
  return (
    <div className="vid">
      {on ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${b.youtube}?autoplay=1`} title={b.title}
          allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <button type="button" aria-label={b.ariaLabel} onClick={() => setOn(true)}>
          <img src={`https://img.youtube.com/vi/${b.youtube}/hqdefault.jpg`} alt="" loading="lazy" />
          <span aria-hidden="true">▶</span>
        </button>
      )}
    </div>
  )
}

function Gallery({ b, slug }) {
  const imgs = getGallery(slug)
  return (
    <>
      {b.heading && <h2>{b.heading}</h2>}
      <div className={'gallery ' + b.variant}>
        {b.alts.map((alt, i) => imgs[i] && <img key={i} src={imgs[i]} alt={alt} loading="lazy" data-reveal style={{ '--i': i % 3 }} />)}
      </div>
    </>
  )
}

function Panel({ p }) {
  const kind = p.num ? 'feature' : p.label ? 'spec' : 'ability'
  return (
    <div className={`panel card-${kind}`}>
      {p.num && <span className="num">{p.num}</span>}
      {(p.label || p.title) && <h3>{p.label ?? p.title}</h3>}
      <p>{p.text}</p>
    </div>
  )
}

const Tags = ({ items }) => <ul className="d-tags">{items.map((x) => <li className="tag" key={x}>{x}</li>)}</ul>
const List = ({ items }) => <ul className="list">{items.map((x) => <li key={x}>{bold(x)}</li>)}</ul>

function Block({ b, slug }) {
  switch (b.type) {
    case 'intro':
      return (
        <div className="d-intro">
          <p>{b.text}</p>
          {b.aside && <aside className="panel"><h3>{b.aside.label}</h3><p>{b.aside.text}</p></aside>}
        </div>
      )
    case 'heading': return <h2>{b.text}</h2>
    case 'text': return <p className={b.variant === 'lead' ? 'd-lead' : 'd-text'}>{b.text}</p>
    case 'list': return <List items={b.items} />
    case 'tags': return <Tags items={b.items} />
    case 'panels': return <div className={'panels c' + b.cols}>{b.items.map((p, i) => <Panel key={i} p={p} />)}</div>
    case 'note': return <p className={b.variant === 'centered' ? 'note center' : 'note'}>{b.text}</p>
    case 'video': return <Video b={b} />
    case 'gallery': return <Gallery b={b} slug={slug} />
    case 'columns':
      return (
        <div className="d-cols">
          {b.items.map((c) => (
            <div key={c.title}>
              <h2>{c.title}</h2>
              {c.text && <p className="d-text">{c.text}</p>}
              {c.list && <List items={c.list} />}
              {c.tags && <Tags items={c.tags} />}
            </div>
          ))}
        </div>
      )
    case 'stats':
      return <dl>{b.items.map((s) => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}</dl>
    default: return null
  }
}

export default function Detail({ kind }) {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug && x.kind === kind)
  return p ? <Page p={p} kind={kind} slug={slug} /> : <NotFound />
}

function Page({ p, kind, slug }) {
  const lang = useLang()
  useTitle(`${p[lang].title} — Jordi Planas`)
  const { title, header: h, blocks, backLabel, nextLabel, endLabel } = p[lang]
  const next = p.next && projects.find((x) => x.slug === p.next)
  const text = h.h1 ?? title
  const h1 = (
    <h1 className={h.accent ? undefined : 'coral'}>
      {h.titleLines
        ? h.titleLines.map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>)
        : h.accent ? text.split(h.accent).flatMap((s, i) => (i ? [<em key={i}>{h.accent}</em>, s] : [s])) : text}
    </h1>
  )

  // sidebar: stats go in the left panel; blocks up to the first gallery go right; the rest below.
  const side = p.layout === 'sidebar'
  const stats = blocks.find((b) => b.type === 'stats')
  const rest = side ? blocks.filter((b) => b !== stats) : blocks
  const g = rest.findIndex((b) => b.type === 'gallery')
  const split = side && g >= 0 ? g : rest.length
  const render = (list) => list.map((b, i) => <Block key={i} b={b} slug={slug} />)

  const head = (
    <>
      {h.eyebrow && <p className="eyebrow">{h.eyebrow}</p>}
      {h1}
      {h.subtitle && <p className="d-sub">{h.subtitle}</p>}
      {(h.showYear || h.showTags) && (
        <div className="d-meta">
          {h.showYear && <span className="d-year">{p.year}</span>}
          {h.showTags && <Tags items={p[lang].tags ?? p.tags} />}
        </div>
      )}
      {h.lead && <p className="d-text">{h.lead}</p>}
    </>
  )

  return (
    <article className={`container detail ${p.layout}`}>
      <Link className="back" to={localePath(lang, kind === 'game' ? '/games' : '/projects')}>{backLabel}</Link>
      {side ? (
        <>
          <div className="d-side">
            <div className="panel d-aside">{head}{stats && <Block b={stats} />}</div>
            <div>{render(rest.slice(0, split))}</div>
          </div>
          {render(rest.slice(split))}
        </>
      ) : (
        <>
          <header>{head}</header>
          {render(blocks)}
        </>
      )}
      {next && nextLabel && <Link className="btn btn-accent d-end" to={localePath(lang, `/games/${next.slug}`)}>{nextLabel}</Link>}
      {!next && endLabel && <Link className="btn btn-accent d-end" to={localePath(lang, '/games')}>{endLabel}</Link>}
    </article>
  )
}
