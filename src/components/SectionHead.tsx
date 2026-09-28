import { Link } from 'react-router';
import { useI18n } from '../i18n/useI18n';
import type { UiKey } from '../i18n/ui';
import { Rich } from './Rich';
import s from './SectionHead.module.css';

interface Props {
  title: UiKey;
  /** Path of the "see all" link, without language prefix. */
  more?: string;
}

export function SectionHead({ title, more }: Props) {
  const { t, to } = useI18n();
  return (
    <div className={s.head}>
      <Rich as="h2" className="sec-title" html={t(title)} />
      {more && (
        <Link to={to(more)} className={s.more}>
          {t('all')}
        </Link>
      )}
    </div>
  );
}
