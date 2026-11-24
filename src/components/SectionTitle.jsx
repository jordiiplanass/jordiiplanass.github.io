import { Link } from 'react-router-dom'

// title = [plain, coral] e.g. ['Mis ', 'juegos']; `more` + `to` add the right-hand link.
export default function SectionTitle({ title, more, to, as: H = 'h2' }) {
  return (
    <div className="sec-head" data-reveal>
      <H className="sec-title">{title[0]}<em>{title[1]}</em></H>
      {more && <Link to={to} className="more">{more}</Link>}
    </div>
  )
}
