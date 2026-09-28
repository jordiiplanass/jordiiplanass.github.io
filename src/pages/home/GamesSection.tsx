import { Block } from '../../components/Block';
import { Carousel } from '../../components/Carousel';
import { SectionHead } from '../../components/SectionHead';
import { games } from '../../content';
import { useI18n } from '../../i18n/useI18n';

export function GamesSection() {
  const { to } = useI18n();

  return (
    <Block id="games">
      <div className="wrap">
        <SectionHead title="games.title" more="/games" />
      </div>
      <Carousel items={games} base={to('/games')} />
    </Block>
  );
}
