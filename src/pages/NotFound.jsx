import { Link } from 'react-router-dom'
import { useLang, useTitle, localePath } from '../i18n.js'

export default function NotFound() {
  const lang = useLang()
  useTitle('404 — Jordi Planas')
  return (
    <section className="nf container">
      <p className="eyebrow">Error 404</p>
      <h1 className="sec-title">Esta página no <em>existe</em></h1>
      <p className="lead">El enlace está roto o la página se movió. <span lang="en">This page doesn't exist.</span></p>
      <div className="acts">
        <Link to={localePath(lang)} className="btn btn-accent">Ir al inicio</Link>
        <Link to={localePath(lang, '/games')} className="btn">Games</Link>
        <Link to={localePath(lang, '/projects')} className="btn">Projects</Link>
      </div>
    </section>
  )
}
