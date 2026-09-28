import { Btn } from '../components/Btn';
import { Rich } from '../components/Rich';
import { useI18n } from '../i18n/useI18n';
import s from './NotFound.module.css';

export function NotFound() {
  const { t, to } = useI18n();

  return (
    <section className={`wrap ${s.page}`}>
      <title>404 — Jordi Planas</title>
      <p className="eyebrow">{t('404.eyebrow')}</p>
      <Rich as="h1" className="sec-title" html={t('404.title')} />
      <p className={s.body}>{t('404.body')}</p>
      <div className={s.actions}>
        <Btn to={to('/')} accent>
          {t('404.home')}
        </Btn>
        <Btn to={to('/games')}>{t('nav.games')}</Btn>
        <Btn to={to('/projects')}>{t('nav.projects')}</Btn>
      </div>
    </section>
  );
}
