import type { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router';
import { cx } from '../lib/cx';
import s from './Btn.module.css';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Internal route. Use `href` for files and external links. */
  to?: string;
  accent?: boolean;
}

export function Btn({ to, accent, className, ...props }: Props) {
  const classes = cx(s.btn, accent && s.accent, className);
  return to ? <Link to={to} className={classes} {...props} /> : <a className={classes} {...props} />;
}
