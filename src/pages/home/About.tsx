import { Block } from '../../components/Block';
import { Icon } from '../../components/Icon';
import { SectionHead } from '../../components/SectionHead';
import { focus, stack, yearsOfExperience } from '../../content/home';
import { games, projects } from '../../content';
import { tr } from '../../i18n/types';
import { useI18n } from '../../i18n/useI18n';
import s from './About.module.css';

const stats = [
  { n: games.length, label: tr('Juegos', 'Games') },
  { n: projects.length, label: tr('Proyectos', 'Projects') },
  { n: yearsOfExperience, label: tr('Años', 'Years') },
];

export function About() {
  const { l, t } = useI18n();

  return (
    <Block id="about">
      <div className="wrap">
        <SectionHead title="about.title" />
        <div className={s.grid}>
          <div className={s.lead}>
            <h3 className={s.headline}>{t('about.headline')}</h3>
            <div className={s.body}>
              <p>{t('about.p1')}</p>
              <ul className={s.stats}>
                {stats.map(({ n, label }) => (
                  <li key={n + l(label)}>
                    <span className={s.statN}>{n}</span>
                    <span className={s.statL}>{l(label)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img className={s.illu} src="/illustrations/hamster.svg" alt="" />
          </div>

          <div>
            <p className={s.label}>{t('about.focus')}</p>
            <ul className={s.focus}>
              {focus.map((item) => (
                <li key={item.icon} className={s.fcard}>
                  <Icon name={item.icon} className={s.icon} />
                  <div>
                    <span className={s.fcardTitle}>{l(item.title)}</span>
                    <span className={s.fcardText}>{l(item.text)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className={s.label}>{t('about.tools')}</p>
            <ul className={s.tools}>
              {stack.map((tool) => (
                <li key={tool.name} className={s.tool}>
                  <img src={tool.icon} alt={tool.name} width="26" height="26" loading="lazy" />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Block>
  );
}
