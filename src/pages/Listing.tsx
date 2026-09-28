import { Carousel } from '../components/Carousel';
import { ProjectList } from '../components/ProjectList';
import { SectionHead } from '../components/SectionHead';
import { games, projects } from '../content';
import { useI18n } from '../i18n/useI18n';
import s from './Listing.module.css';

/** The /games and /projects index pages. */
export function Listing({ kind }: { kind: 'games' | 'projects' }) {
  const { t, to } = useI18n();
  const base = to(`/${kind}`);

  return (
    <section className={s.page}>
      <title>{t(`title.${kind}`)}</title>
      <div className="wrap">
        <SectionHead title={`${kind}.title`} />
        <p className={s.intro}>{t(`${kind}.intro`)}</p>
        {kind === 'projects' && <ProjectList items={projects} base={base} />}
      </div>
      {kind === 'games' && <Carousel items={games} base={base} />}
    </section>
  );
}
