import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { home, stack, icons, social, email, formKey } from '../data/home.js'
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
  const [status, setStatus] = useState('')
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
              <a className="btn btn-lg" href="/cv.pdf" download="Jordi_Planas_CV.pdf"><Icon paths={icons.file} />CV</a>
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
          {/* ponytail: Web3Forms (free, no backend) delivers the message straight to the inbox tied to formKey. */}
          <form className="contact-form panel" data-reveal style={{ '--i': 2 }} onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget
            const f = new FormData(form)
            setStatus('sending')
            try {
              const r = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ access_key: formKey, subject: `[${f.get('reason')}] Portfolio`, from_name: 'Portfolio', message: f.get('message') }),
              })
              if (!(await r.json()).success) throw new Error()
              setStatus('ok')
              form.reset()
            } catch { setStatus('err') }
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
            <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? c.sending : c.send}</button>
            {(status === 'ok' || status === 'err') && <p className={`contact-status${status === 'err' ? ' err' : ''}`} role="status">{c[status]}</p>}
            <p className="contact-note">{c.note} <a href={`mailto:${email}`}>{email}</a></p>
          </form>
        </div>
      </section>
    </>
  )
}
