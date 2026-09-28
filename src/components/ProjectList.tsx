import { Link } from 'react-router';
import type { Entry } from '../content/types';
import { useI18n } from '../i18n/useI18n';
import { coverFor, initials } from '../lib/media';
import s from './ProjectList.module.css';

interface Props {
  items: Entry[];
  /** Route prefix of the detail pages, language included. */
  base: string;
}

/** Editorial rows: art panel + body, sides alternate. */
export function ProjectList({ items, base }: Props) {
  const { l, t } = useI18n();

  return (
    <ol className={s.list}>
      {items.map((item, i) => {
        const title = l(item.title);
        const cover = coverFor(item.slug);
        return (
          <li key={item.slug}>
            <Link to={`${base}/${item.slug}`} className={s.row}>
              <div className={s.art} aria-hidden="true">
                <span className={s.index}>{String(i + 1).padStart(2, '0')}</span>
                {cover ? <img src={cover} alt="" loading="lazy" /> : <span className={s.mono}>{initials(title)}</span>}
              </div>
              <div className={s.body}>
                <div className={s.top}>
                  <h3>{title}</h3>
                  <span className={s.year}>{item.year}</span>
                </div>
                <p className={s.summary}>{l(item.summary)}</p>
                <ul className={s.tags}>
                  {item.tags.map((tag) => (
                    <li key={l(tag)}>{l(tag)}</li>
                  ))}
                </ul>
                <span className={s.go}>
                  {t('viewProject')}
                  <i>→</i>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
