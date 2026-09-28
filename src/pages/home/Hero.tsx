import { Fragment } from 'react';
import { Btn } from '../../components/Btn';
import { useTyping } from '../../hooks/useTyping';
import { useI18n } from '../../i18n/useI18n';
import { cx } from '../../lib/cx';
import { reducedMotion } from '../../lib/motion';
import s from './Hero.module.css';

/** Types like an editor: the name first, then the phrase; the buttons fade in when done. */
export function Hero() {
  const { t, to } = useI18n();
  const leadText = t('hero.lead');
  const name = useTyping('Jordi\nPlanas', { min: 70, max: 120, delay: 260 });
  const lead = useTyping(leadText, { min: 14, max: 28, delay: 140, enabled: name.done });

  return (
    <section className={s.hero}>
      <div className={cx('wrap', s.grid)}>
        <div>
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1 className={s.name} aria-label="Jordi Planas">
            {name.text.split('\n').map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
            {!name.done && <span className={s.caret} aria-hidden="true" />}
          </h1>
        </div>
        <div className={s.right}>
          {/* The ghost holds the full phrase's height so nothing below moves while typing. */}
          <p className={s.lead} aria-label={leadText}>
            <span className={s.ghost} aria-hidden="true">
              {leadText}
            </span>
            <span className={s.live}>
              {lead.text}
              {name.done && !reducedMotion() && <span className={cx(s.caret, s.leadCaret)} aria-hidden="true" />}
            </span>
          </p>
          <div className={cx(s.cta, lead.done && s.show)}>
            <Btn to={to('/games')} accent>
              {t('hero.cta.games')}
            </Btn>
            <Btn href="/cv.pdf" download="Jordi_Planas_CV.pdf">
              {t('hero.cta.cv')}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
