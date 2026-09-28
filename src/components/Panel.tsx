import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import s from './Panel.module.css';

export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx(s.panel, className)} {...props} />;
}
