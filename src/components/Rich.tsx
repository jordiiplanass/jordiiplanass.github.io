import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Props<E extends ElementType> = { as?: E; html: string } & Omit<
  ComponentPropsWithoutRef<E>,
  'children' | 'dangerouslySetInnerHTML'
>;

/** Renders inline markup (<em>, <strong>) from our own content files. Never feed it user input. */
export function Rich<E extends ElementType = 'span'>({ as, html, ...props }: Props<E>) {
  const Tag: ElementType = as ?? 'span';
  return <Tag {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}
