import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLang, ui } from '../i18n.js'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname, hash, key } = useLocation()
  const lang = useLang()

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  // Top on every navigation; smooth to the anchor when there is one (/#experience).
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [key, hash])

  // One observer for every [data-reveal]; direction-aware, re-triggers on re-entry.
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let dir = 'down'
    let last = scrollY
    const onScroll = () => { dir = scrollY < last ? 'up' : 'down'; last = scrollY }
    addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        e.target.dataset.dir = dir
        e.target.classList.toggle('is-in', e.isIntersecting)
      }),
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    document.documentElement.classList.add('reveal-ready')
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      removeEventListener('scroll', onScroll)
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">{ui(lang).skip}</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
