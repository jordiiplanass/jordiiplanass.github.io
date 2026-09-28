import { Block } from '../../components/Block';
import { Panel } from '../../components/Panel';
import { Rich } from '../../components/Rich';
import { SectionHead } from '../../components/SectionHead';
import { TagList } from '../../components/TagList';
import { experience } from '../../content/home';
import { useI18n } from '../../i18n/useI18n';
import s from './Experience.module.css';

export function Experience() {
  const { l } = useI18n();

  return (
    <Block id="experience">
      <div className="wrap">
        <SectionHead title="experience.title" />
        <ol className={s.timeline}>
          {experience.map((job) => (
            <li key={l(job.title)} className={s.item}>
              <div className={s.year}>{l(job.year)}</div>
              <Panel className={s.card}>
                <h3>{l(job.title)}</h3>
                <p className={s.role}>{l(job.role)}</p>
                <ul className={s.points}>
                  {job.points.map((point) => (
                    <Rich key={l(point)} as="li" html={l(point)} />
                  ))}
                </ul>
                <TagList tags={job.tags.map(l)} className={s.tags} />
              </Panel>
            </li>
          ))}
        </ol>
      </div>
    </Block>
  );
}
