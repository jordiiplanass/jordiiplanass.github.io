import type { ReactNode } from 'react';
import s from './Block.module.css';

/** A home-page section with the standard vertical rhythm. */
export function Block({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className={s.block}>
      {children}
    </section>
  );
}
