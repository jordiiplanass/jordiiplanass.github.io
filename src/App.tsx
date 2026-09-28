import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { useI18n } from './i18n/useI18n';
import { DetailPage } from './pages/DetailPage';
import { Home } from './pages/home/Home';
import { Listing } from './pages/Listing';
import { NotFound } from './pages/NotFound';

// `/en?` makes the prefix optional, so one tree serves both languages.
const routes = [
  {
    path: '/en?',
    children: [
      { index: true, element: <Home /> },
      { path: 'games', element: <Listing kind="games" /> },
      { path: 'games/:slug', element: <DetailPage kind="games" /> },
      { path: 'projects', element: <Listing kind="projects" /> },
      { path: 'projects/:slug', element: <DetailPage kind="projects" /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default function App() {
  const page = useRoutes(routes);
  const { pathname, hash } = useLocation();
  const { lang } = useI18n();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // A router doesn't scroll on its own: jump to the anchor, or back to the top on a new page.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Nav />
      <main>{page}</main>
      <Footer />
    </>
  );
}
