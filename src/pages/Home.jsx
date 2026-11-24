import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { home, stack, icons, social, email } from '../data/home.js'
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
  const c = h.contact
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
            <div className="acts">
              <Link to={to('/#contact')} className="btn btn-accent">{h.contactCta}</Link>
            </div>
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

      <section id="contact" className="block" data-snap>
        <div className="container contact">
          <SectionTitle title={c.title} />
          <p className="contact-intro" data-reveal>{c.intro}</p>
          <ul className="contact-links" data-reveal style={{ '--i': 1 }}>
            {social.filter(([, , ic]) => ic).map(([label, href, ic]) => (
              <li key={label}><a className="btn" href={href} target="_blank" rel="noopener"><Icon paths={icons[ic]} />{label}</a></li>
            ))}
            <li><a className="btn" href="/cv.pdf" download="Jordi_Planas_CV.pdf"><Icon paths={icons.file} />CV</a></li>
          </ul>
          {/* ponytail: mailto instead of a mail API; no backend or third-party account needed. Swap onSubmit for a
              fetch to a form service (Formspree, Web3Forms, a Worker + Resend…) if visitors without a mail app matter. */}
          <form className="contact-form panel" data-reveal style={{ '--i': 2 }} onSubmit={(e) => {
            e.preventDefault()
            const f = new FormData(e.currentTarget)
            location.href = `mailto:${email}?subject=${encodeURIComponent(`[${f.get('reason')}] Portfolio`)}&body=${encodeURIComponent(f.get('message'))}`
          }}>
            <h3>{c.form}</h3>
            <fieldset>
              <legend>{c.reason}</legend>
              <div className="chips">
                {c.reasons.map((r, i) => (
                  <label key={r}><input type="radio" name="reason" value={r} defaultChecked={i === 0} /><span>{r}</span></label>
                ))}
              </div>
            </fieldset>
            <label className="field">
              <span>{c.message}</span>
              <textarea name="message" rows="5" required placeholder={c.placeholder} />
            </label>
            <button className="btn btn-accent" type="submit">{c.send}</button>
            <p className="contact-note">{c.note} <a href={`mailto:${email}`}>{email}</a></p>
          </form>
        </div>
      </section>
    </>
  )
}
