import { useRef } from 'react';
import { Link, NavLink } from 'react-router';
import { useI18n } from '../i18n/useI18n';
import { Icon } from './Icon';
import s from './Nav.module.css';

export function Nav() {
  const { lang, t, to, alt } = useI18n();
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <header className={s.nav}>
      <div className={`wrap ${s.inner}`}>
        <Link to={to('/')} className={s.brand}>
          Jordi&nbsp;Planas
        </Link>
        <div className={s.right}>
          {/* Native <details>: a responsive menu with no state. The language toggle stays outside it. */}
          <details ref={menu} className={s.menu}>
            <summary className={s.burger} aria-label={t('nav.menu')}>
              <Icon name="menu" className={s.open} strokeWidth={2} />
              <Icon name="close" className={s.close} strokeWidth={2} />
            </summary>
            <nav className={s.links} onClick={() => menu.current && (menu.current.open = false)}>
              <NavLink to={to('/games')}>{t('nav.games')}</NavLink>
              <NavLink to={to('/projects')}>{t('nav.projects')}</NavLink>
              <Link to={`${to('/')}#experience`}>{t('nav.experience')}</Link>
              <a href="/cv.pdf" download="Jordi_Planas_CV.pdf" className={s.cv}>
                CV ↓
              </a>
            </nav>
          </details>
          <Link to={alt} className={s.lang}>
            {lang === 'es' ? 'EN' : 'ES'}
          </Link>
        </div>
      </div>
    </header>
  );
}
