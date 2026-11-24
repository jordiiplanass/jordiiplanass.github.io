import { projects } from '../data'

// Display order: year desc; Array.sort is stable so file order breaks ties.
export const ofKind = (kind) => projects.filter((p) => p.kind === kind).sort((a, b) => b.year - a.year)
