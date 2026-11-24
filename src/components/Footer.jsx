import { social } from '../data/home.js'

export default function Footer() {
  return (
    <footer className="ft" data-snap>
      <div className="container ftin">
        <span>© {new Date().getFullYear()} Jordi Planas</span>
        <div className="social">
          {social.map(([label, href]) => (
            <a key={label} href={href} {...(href.startsWith('http') && { target: '_blank', rel: 'noopener' })}>{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
