import type { Section as SectionData } from '../../content/types';
import type { T } from '../../i18n/types';
import { useI18n } from '../../i18n/useI18n';
import { Gallery } from '../Gallery';
import { VideoBlock } from '../VideoBlock';
import { Cards } from './Cards';
import { List } from './List';
import s from './Section.module.css';

/** One block of a detail page, chosen by its `type`. */
export function Section({ section, slug }: { section: SectionData; slug: string }) {
  const { l } = useI18n();
  const heading = (title?: T) => title && <h2 className={s.title}>{l(title)}</h2>;

  switch (section.type) {
    case 'text':
      return (
        <>
          {heading(section.title)}
          <p className={s.body}>{l(section.text)}</p>
        </>
      );
    case 'list':
      return (
        <>
          {heading(section.title)}
          <List items={section.items.map(l)} />
        </>
      );
    case 'cards':
      return (
        <>
          {heading(section.title)}
          <Cards {...section} />
        </>
      );
    case 'note':
      return <p className={s.note}>{l(section.text)}</p>;
    case 'video':
      return <VideoBlock youtube={section.youtube} title={l(section.title)} />;
    case 'gallery':
      return (
        <>
          {heading(section.title)}
          <Gallery slug={slug} alt={l(section.alt)} cols={section.cols} featuredFirst={section.featuredFirst} />
        </>
      );
  }
}
