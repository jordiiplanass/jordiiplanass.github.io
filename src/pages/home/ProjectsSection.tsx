import { Block } from '../../components/Block';
import { ProjectList } from '../../components/ProjectList';
import { SectionHead } from '../../components/SectionHead';
import { projects } from '../../content';
import { useI18n } from '../../i18n/useI18n';

export function ProjectsSection() {
  const { to } = useI18n();

  return (
    <Block id="projects">
      <div className="wrap">
        <SectionHead title="projects.title" more="/projects" />
        <ProjectList items={projects} base={to('/projects')} />
      </div>
    </Block>
  );
}
