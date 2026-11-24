import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Listing from './pages/Listing.jsx'
import Detail from './pages/Detail.jsx'
import NotFound from './pages/NotFound.jsx'

// Same routes twice: Spanish at the root, English under /en.
const localized = (p) => [
  <Route key={p + 'h'} path={p || '/'} element={<Home />} />,
  <Route key={p + 'g'} path={p + '/games'} element={<Listing kind="game" />} />,
  <Route key={p + 'p'} path={p + '/projects'} element={<Listing kind="project" />} />,
  <Route key={p + 'gd'} path={p + '/games/:slug'} element={<Detail kind="game" />} />,
  <Route key={p + 'pd'} path={p + '/projects/:slug'} element={<Detail kind="project" />} />,
]

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {localized('')}
        {localized('/en')}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
