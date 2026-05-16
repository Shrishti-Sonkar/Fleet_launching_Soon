/**
 * Utility helpers
 */

/** Merge class names conditionally */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/** Stagger delay for list animations */
export function staggerDelay(index, base = 100) {
  return `${index * base}ms`
}
