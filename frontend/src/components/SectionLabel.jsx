import { cn } from '../../utils/cn'

/**
 * SectionLabel – small pill label above section headings
 */
export default function SectionLabel({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark',
        className
      )}
    >
      {children}
    </span>
  )
}
