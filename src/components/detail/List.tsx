import { Rich } from '../Rich';
import s from './List.module.css';

export function List({ items }: { items: string[] }) {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <Rich key={item} as="li" html={item} />
      ))}
    </ul>
  );
}
