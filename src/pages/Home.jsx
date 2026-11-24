import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { home, stack, icons, social } from '../data/home.js'
import { ofKind } from '../lib/projects.js'
import { getCover } from '../lib/media.js'
import { useLang, useTitle, localePath, ui } from '../i18n.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Carousel from '../components/Carousel.jsx'
import Deck from '../components/Deck.jsx'
import ProjectList from '../components/ProjectList.jsx'
import { bold } from '../lib/bold.jsx'

const Icon = ({ paths, width = 1.7 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths.map((d) => <path key={d} d={d} />)}
  </svg>
)

// Hero deck tabs, in the order of home[lang].tabs.
const DECKS = ['game', 'project']

export default function Home() {
  const lang = useLang()
  const h = home[lang]
  const t = ui(lang)
  const to = (p) => localePath(lang, p)
  const [tab, setTab] = useState(0)
  useTitle(h.doc)

  // ponytail: native CSS scroll-snap on <html> (>=860px, see styles.css) instead of Lenis section-jacking.
  useEffect(() => {
    document.documentElement.classList.add('snap')
    return () => document.documentElement.classList.remove('snap')
  }, [])

  const deck = ofKind(DECKS[tab]).map((p) => ({
    slug: p.slug, title: p[lang].title, year: p.year, cover: getCover(p.slug),
    href: to(`/${p.kind === 'game' ? 'games' : 'projects'}/${p.slug}`),
  }))

  return (
    <>
      <section className="hero" data-snap>
        <div className="container hero-grid">
          <div>
            <p className="hero-role">{h.role}</p>
            <h1>Jordi Planas</h1>
            <p className="hero-lead">{h.lead}</p>
            <ul className="hero-stats">
              {h.stats.map(([n, l]) => <li key={l}><span>{n}</span> {l}</li>)}
            </ul>
            <div className="acts">
              <Link to={to('/games')} className="btn btn-accent">{t.seeGames}</Link>
              <a href="/cv.pdf" download="Jordi_Planas_CV.pdf" className="btn">{t.downloadCv}</a>
            </div>
            <ul className="hero-contact">
              {social.map(([label, href]) => (
                <li key={label}><a href={href} {...(href.startsWith('http') && { target: '_blank', rel: 'noopener' })}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="hero-deck">
            <div className="tabs" role="group" aria-label={h.tabs.join(' / ')}>
              {h.tabs.map((label, i) => (
                <button key={label} type="button" aria-pressed={tab === i} onClick={() => setTab(i)}>{label}</button>
              ))}
            </div>
            <Deck key={tab} items={deck} lang={lang} />
          </div>
        </div>
      </section>

      <section id="about" className="block" data-snap>
        <div className="container">
          <SectionTitle title={h.about} />
          <div className="about-grid">
            <div className="about-lead" data-reveal style={{ '--i': 1 }}>
              <h3 className="about-headline">{h.headline}</h3>
              <div className="about-body">
                <p>{h.p1}</p>
                <ul className="stats">
                  {h.stats.map(([n, l]) => <li key={l}><span className="stat-n">{n}</span><span className="stat-l">{l}</span></li>)}
                </ul>
              </div>
              <div className="about-illu"><img src="/illustrations/hamster.svg" alt="" width="635" height="853" /></div>
            </div>
            <div data-reveal style={{ '--i': 2 }}>
              <p className="side-label">{h.focusLabel}</p>
              <ul className="focus-cards">
                {h.focus.map(([ic, title, desc]) => (
                  <li className="fcard" key={ic}>
                    <span className="fcard-ic"><Icon paths={icons[ic]} /></span>
                    <div><span className="fcard-h">{title}</span><span className="fcard-d">{desc}</span></div>
                  </li>
                ))}
              </ul>
              <p className="side-label">{h.stackLabel}</p>
              <ul className="tool-cards">
                {stack.map(([name, file]) => (
                  <li className="tcard" key={file}>
                    <img src={`/icons/${file}.svg`} alt={name} width="26" height="26" loading="lazy" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="block" data-snap>
        <div className="container"><SectionTitle title={t.games.title} more={t.all} to={to('/games')} /></div>
        <div data-reveal style={{ '--i': 1 }}><Carousel items={ofKind('game')} lang={lang} /></div>
      </section>

      <section id="projects" className="block" data-snap>
        <div className="container">
          <SectionTitle title={t.projects.title} more={t.all} to={to('/projects')} />
          <ProjectList items={ofKind('project')} lang={lang} capped />
        </div>
      </section>

      <section id="experience" className="block" data-snap>
        <div className="container">
          <SectionTitle title={h.experience} />
          <ol className="timeline">
            {h.exp.map((e, i) => (
              <li className="tl-item" key={e.title} data-reveal style={{ '--i': i }}>
                <div className="tl-year">{e.year}</div>
                <div className="tl-body panel">
                  <div className="tl-top"><h3>{e.title}</h3><p className="role">{e.role}</p></div>
                  <ul className="achievements">{e.points.map((p) => <li key={p}>{bold(p)}</li>)}</ul>
                  <ul className="tl-tags">{e.tags.map((x) => <li className="tag" key={x}>{x}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="cv" className="block" data-snap>
        <div className="container">
          <SectionTitle title={h.cv} />
          <div className="cv-card panel" data-reveal style={{ '--i': 1 }}>
            <span className="cv-ic"><Icon paths={icons.file} width={1.5} /></span>
            <div className="cv-main"><h3>{h.cvHead}</h3><p>{h.cvBody}</p></div>
            <a href="/cv.pdf" download="Jordi_Planas_CV.pdf" className="btn btn-accent">{t.downloadCv}</a>
          </div>
        </div>
      </section>
    </>
  )
}
