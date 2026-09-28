import type { CSSProperties } from 'react';
import { useI18n } from '../../i18n/useI18n';
import type { Section } from '../../content/types';
import { cx } from '../../lib/cx';
import { Panel } from '../Panel';
import s from './Cards.module.css';

type Props = Omit<Extract<Section, { type: 'cards' }>, 'type' | 'title'>;

export function Cards({ items, cols, label, numbered }: Props) {
  const { l } = useI18n();

  return (
    <div className={cx(s.cards, label && s.label, numbered && s.numbered)} style={{ '--cols': cols } as CSSProperties}>
      {items.map((card, i) => (
        <Panel key={l(card.title)} className={s.card}>
          {numbered && <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>}
          <h4>{l(card.title)}</h4>
          <p>{l(card.text)}</p>
        </Panel>
      ))}
    </div>
  );
}
