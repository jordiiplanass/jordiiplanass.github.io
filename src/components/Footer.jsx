export default function Footer() {
  return (
    <footer className="ft" data-snap>
      <div className="container ftin">
        <span>© {new Date().getFullYear()} Jordi Planas</span>
        <div className="social">
          <a href="https://github.com/jordiiplanass" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/jordi-planas-martinez-9b390232b/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:jordiiplanass@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
