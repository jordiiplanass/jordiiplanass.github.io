import { Link, useLocation } from 'react-router-dom'
import { useLang, localePath, togglePath, ui } from '../i18n.js'

export default function Nav() {
  const { pathname } = useLocation()
  const lang = useLang()
  const t = ui(lang)
  const to = (p) => localePath(lang, p)
  const active = (p) => (pathname.startsWith(to(p)) ? 'active' : undefined)

  return (
    <header className="nav">
      <div className="container navin">
        <Link to={to('/')} className="brand">Jordi&nbsp;Planas</Link>
        <div className="navright">
          {/* ponytail: native <details> is the whole mobile menu; no outside-click/Escape close. */}
          <details className="menu">
            <summary className="burger" aria-label={t.menu}>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path className="ico-open" d="M4 7h16M4 12h16M4 17h16" />
                <path className="ico-close" d="M6 6 18 18M18 6 6 18" />
              </svg>
            </summary>
            <nav className="links" onClick={(e) => e.target.closest('a') && (e.currentTarget.closest('details').open = false)}>
              <Link to={to('/games')} className={active('/games')}>{t.nav.games}</Link>
              <Link to={to('/projects')} className={active('/projects')}>{t.nav.projects}</Link>
              <Link to={to('/#experience')}>{t.nav.experience}</Link>
              <a href="/cv.pdf" download="Jordi_Planas_CV.pdf" className="cv">{t.cv}</a>
            </nav>
          </details>
          <Link to={togglePath(pathname)} className="lang-toggle">{t.toggle}</Link>
        </div>
      </div>
    </header>
  )
}
