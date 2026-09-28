import { useParams } from 'react-router';
import { Detail } from '../components/detail/Detail';
import { games, projects } from '../content';
import { NotFound } from './NotFound';

export function DetailPage({ kind }: { kind: 'games' | 'projects' }) {
  const { slug } = useParams();
  const entries = kind === 'games' ? games : projects;
  const i = entries.findIndex((entry) => entry.slug === slug);

  return i < 0 ? <NotFound /> : <Detail entry={entries[i]} kind={kind} next={entries[i + 1]} />;
}
