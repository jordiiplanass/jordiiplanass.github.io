import { useLang, useTitle, ui } from '../i18n.js'
import { ofKind } from '../lib/projects.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Carousel from '../components/Carousel.jsx'
import ProjectList from '../components/ProjectList.jsx'

// /games (kind="game") and /projects (kind="project"), both languages.
export default function Listing({ kind }) {
  const lang = useLang()
  const t = ui(lang)[kind === 'game' ? 'games' : 'projects']
  const items = ofKind(kind)
  useTitle(t.doc)

  return (
    <section className="page">
      <div className="container">
        <SectionTitle title={t.title} as="h1" />
        <p className="intro" data-reveal style={{ '--i': 1 }}>{t.intro}</p>
        {kind === 'project' && <ProjectList items={items} lang={lang} />}
      </div>
      {kind === 'game' && <div data-reveal style={{ '--i': 2 }}><Carousel items={items} lang={lang} /></div>}
    </section>
  )
}
