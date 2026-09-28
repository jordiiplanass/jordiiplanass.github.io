import type { CSSProperties } from 'react';
import { cx } from '../lib/cx';
import { galleryFor } from '../lib/media';
import s from './Gallery.module.css';

interface Props {
  slug: string;
  /** Alt text; each image gets its number appended. */
  alt: string;
  cols: number;
  /** Let the first image span the whole grid. */
  featuredFirst?: boolean;
}

export function Gallery({ slug, alt, cols, featuredFirst }: Props) {
  const shots = galleryFor(slug);
  if (!shots.length) return null;

  return (
    <div className={cx(s.gallery, featuredFirst && s.featured)} style={{ '--cols': cols } as CSSProperties}>
      {shots.map((src, i) => (
        <img key={src} src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
      ))}
    </div>
  );
}
