import { useRef } from 'react';
import { Link } from 'react-router';
import type { Entry } from '../content/types';
import { useI18n } from '../i18n/useI18n';
import { coverFor, initials } from '../lib/media';
import s from './Carousel.module.css';

interface Props {
  items: Entry[];
  /** Route prefix of the detail pages, language included. */
  base: string;
}

export function Carousel({ items, base }: Props) {
  const { l, t } = useI18n();
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = track.current!;
    const slide = el.firstElementChild as HTMLElement;
    el.scrollBy({ left: dir * (slide.offsetWidth + parseFloat(getComputedStyle(el).columnGap)) });
  };

  return (
    <div>
      <div className={s.track} ref={track}>
        {items.map((item) => {
          const title = l(item.title);
          const cover = coverFor(item.slug);
          return (
            <Link key={item.slug} to={`${base}/${item.slug}`} className={s.slide}>
              <div className={s.thumb}>
                {cover ? <img src={cover} alt={title} loading="lazy" /> : <span className={s.mono}>{initials(title)}</span>}
                <div className={s.caption}>
                  <div className={s.row}>
                    <h3>{title}</h3>
                    <span className={s.year}>{item.year}</span>
                  </div>
                  <ul className={s.tags}>
                    {item.tags.slice(0, 3).map((tag) => (
                      <li key={l(tag)}>{l(tag)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={s.controls}>
        <button className={s.arrow} onClick={() => scroll(-1)} aria-label={t('prev')}>
          ←
        </button>
        <button className={s.arrow} onClick={() => scroll(1)} aria-label={t('next')}>
          →
        </button>
      </div>
    </div>
  );
}
