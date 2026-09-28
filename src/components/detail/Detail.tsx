import { Link } from 'react-router';
import type { Entry } from '../../content/types';
import { useI18n } from '../../i18n/useI18n';
import { cx } from '../../lib/cx';
import { Btn } from '../Btn';
import { TagList } from '../TagList';
import { Section } from './Section';
import s from './Detail.module.css';

interface Props {
  entry: Entry;
  kind: 'games' | 'projects';
  /** The following entry of the same kind, if any. */
  next?: Entry;
}

export function Detail({ entry, kind, next }: Props) {
  const { l, t, to } = useI18n();
  const section = t(kind === 'games' ? 'nav.games' : 'nav.projects');
  const words = l(entry.title).replace(/[()]/g, '').split(' ');
  const accent = words.pop()!;
  const eyebrow = [entry.eyebrow && l(entry.eyebrow), entry.year].filter(Boolean).join(' · ');

  return (
    <article className={cx(s.detail, s[kind])}>
      <title>{`${l(entry.title)} — Jordi Planas`}</title>
      <div className="wrap">
        <Link to={to(`/${kind}`)} className={s.back}>
          ← {section}
        </Link>

        <header className={s.hero}>
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {words.join(' ')} <span>{accent}</span>
          </h1>
          <TagList tags={entry.tags.map(l)} className={s.tags} />
          {entry.lead && <p className={s.lead}>{l(entry.lead)}</p>}
        </header>

        <div className={s.sections}>
          {entry.sections.map((block, i) => (
            <Section key={i} section={block} slug={entry.slug} />
          ))}
        </div>

        <div className={s.next}>
          {next ? (
            <Btn to={to(`/${kind}/${next.slug}`)}>
              {t('detail.next')} {l(next.title)} →
            </Btn>
          ) : (
            <Btn to={to(`/${kind}`)}>
              {t('detail.back')} {section}
            </Btn>
          )}
        </div>
      </div>
    </article>
  );
}
