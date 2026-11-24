import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { home, stack, icons, social, email } from '../data/home.js'
import { ofKind } from '../lib/projects.js'
import { getCover } from '../lib/media.js'
import { useLang, useTitle, localePath, ui } from '../i18n.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Carousel from '../components/Carousel.jsx'
import Deck from '../components/Deck.jsx'
import Arrow from '../components/Arrow.jsx'
import AppRail from '../components/AppRail.jsx'
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
            {h.lead.map((p) => <p className="hero-lead" key={p}>{bold(p)}</p>)}
            <div className="acts">
              <Link to={to('/#contact')} className="btn btn-lg">{h.contactCta} <span className="btn-arrow" aria-hidden="true"><Arrow /></span></Link>
            </div>
          </div>
          <div className="hero-deck">
            <div className="tabs" data-tab={tab} role="group" aria-label={h.tabs.join(' / ')}>
              {h.tabs.map((label, i) => (
                <button key={label} type="button" aria-pressed={tab === i} onClick={() => setTab(i)}>{label}</button>
              ))}
            </div>
            <Deck key={tab} items={deck} lang={lang} />
          </div>
        </div>
        {/* ponytail: CSS-only marquee. The list is repeated 4x and the track slides -50%, so the loop
            point is always off-screen even on wide viewports; copies 2-4 are hidden from screen readers. */}
        <div className="marquee" role="region" aria-label={h.stackLabel}>
          <ul className="marquee-track">
            {[0, 1, 2, 3].flatMap((k) => stack.map(([name, file]) => (
              <li key={k + file} aria-hidden={k > 0 || undefined}>
                <img src={`/icons/${file}.svg`} alt="" width="28" height="28" />{name}
              </li>
            )))}
          </ul>
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
                  <div className="tl-top"><h3>{e.role}</h3><p className="role">{e.title}</p></div>
                  <ul className="achievements">{e.points.map((p) => <li key={p}>{bold(p)}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="games" className="block" data-snap>
        <div className="container"><SectionTitle title={t.games.title} /></div>
        <div data-reveal style={{ '--i': 1 }}><Carousel items={ofKind('game')} lang={lang} /></div>
      </section>

      <section id="projects" className="block" data-snap>
        <div className="container"><SectionTitle title={t.projects.title} /></div>
        <AppRail items={ofKind('project')} lang={lang} />
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
            <button className="btn" type="submit">{c.send}</button>
            <p className="contact-note">{c.note} <a href={`mailto:${email}`}>{email}</a></p>
          </form>
        </div>
      </section>
    </>
  )
}
