import { useState } from 'react';
import { useI18n } from '../i18n/useI18n';
import { cx } from '../lib/cx';
import { Panel } from './Panel';
import s from './VideoBlock.module.css';

interface Props {
  /** YouTube video id. Without it a "coming soon" placeholder shows. */
  youtube?: string;
  title: string;
}

export function VideoBlock({ youtube, title }: Props) {
  const { t } = useI18n();
  const [playing, setPlaying] = useState(false);

  if (!youtube) {
    return (
      <Panel className={cx(s.frame, s.placeholder)}>
        <span className={cx(s.play, s.dim)}>▶</span>
        <span>
          {t('video.soon')} — {title}
        </span>
      </Panel>
    );
  }

  // Click-to-load facade: no YouTube scripts until the visitor asks for the video.
  return playing ? (
    <iframe
      className={s.frame}
      src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1`}
      title={title}
      allow="autoplay; encrypted-media; fullscreen"
      allowFullScreen
    />
  ) : (
    <button
      className={cx(s.frame, s.facade)}
      style={{ backgroundImage: `url(https://img.youtube.com/vi/${youtube}/hqdefault.jpg)` }}
      aria-label={`${t('play')} ${title}`}
      onClick={() => setPlaying(true)}
    >
      <span className={s.play}>▶</span>
    </button>
  );
}
