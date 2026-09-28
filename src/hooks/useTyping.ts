import { useEffect, useState } from 'react';
import { reducedMotion } from '../lib/motion';

interface Options {
  /** Random per-character pause, in ms. */
  min: number;
  max: number;
  /** Wait before the first character. */
  delay?: number;
  /** Hold until true, to chain one text after another. */
  enabled?: boolean;
}

/** Types `text` one character at a time; shows it whole under reduced motion. */
export function useTyping(text: string, { min, max, delay = 0, enabled = true }: Options) {
  const [n, setN] = useState(() => (reducedMotion() ? text.length : 0));

  useEffect(() => {
    if (!enabled || n >= text.length) return;
    const id = setTimeout(() => setN(n + 1), n === 0 ? delay : min + Math.random() * (max - min));
    return () => clearTimeout(id);
  }, [n, enabled, text, min, max, delay]);

  return { text: text.slice(0, n), done: n >= text.length };
}
