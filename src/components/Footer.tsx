import s from './Footer.module.css';

const links = [
  { label: 'GitHub', href: 'https://github.com/jordiiplanass' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jordiplanasdev/' },
  { label: 'Email', href: 'mailto:jordiiplanass@gmail.com' },
];

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`wrap ${s.inner}`}>
        <span>© {new Date().getFullYear()} Jordi Planas</span>
        <div className={s.social}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
