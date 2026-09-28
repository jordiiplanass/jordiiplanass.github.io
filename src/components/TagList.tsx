import { cx } from '../lib/cx';
import s from './TagList.module.css';

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <ul className={cx(s.tags, className)}>
      {tags.map((tag) => (
        <li key={tag} className={s.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
