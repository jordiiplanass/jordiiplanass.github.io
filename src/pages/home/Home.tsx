import { useI18n } from '../../i18n/useI18n';
import { About } from './About';
import { Cv } from './Cv';
import { Experience } from './Experience';
import { GamesSection } from './GamesSection';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';

export function Home() {
  const { lang, t } = useI18n();

  return (
    <>
      <title>{t('title.home')}</title>
      {/* Keyed by language so the typing replays after the toggle. */}
      <Hero key={lang} />
      <About />
      <GamesSection />
      <ProjectsSection />
      <Experience />
      <Cv />
    </>
  );
}
