// Trazo SVG en vez de caracteres ←/→ (heredan color con currentColor). dir: 'right' | 'left'; chevron: solo punta.
export default function Arrow({ dir = 'right', chevron = false }) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}>
      {chevron ? <path d="M9 5l7 7-7 7" /> : <path d="M4 12h16M14 6l6 6-6 6" />}
    </svg>
  )
}
