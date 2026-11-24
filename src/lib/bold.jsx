// '**x**' -> <strong>x</strong>
export const bold = (s) => s.split('**').map((x, i) => (i % 2 ? <strong key={i}>{x}</strong> : x))
