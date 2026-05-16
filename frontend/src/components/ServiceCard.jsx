/**
 * ServiceCard – one card in the "Our Service Range" grid
 *
 * Props:
 *  icon        ReactNode  – Lucide icon element
 *  title       string
 *  description string
 *  badge       string     – badge label text
 *  badgeClass  string     – extra Tailwind classes for badge style
 *  dark        boolean    – use inverse-surface dark card
 */
export default function ServiceCard({ icon, title, description, badge, badgeClass = '', dark = false }) {
  return (
    <div
      className={`group p-8 rounded-2xl hover:-translate-y-4 transition-all duration-300 shadow-sm hover:shadow-2xl ${
        dark ? 'bg-inverse-surface' : 'bg-surface-container-lowest'
      }`}
    >
      {/* Icon */}
      <div className={`text-[48px] mb-6 ${dark ? 'text-inverse-primary' : 'text-primary'}`}>
        {icon}
      </div>

      {/* Title */}
      <h5 className={`font-headline-md text-headline-md mb-2 ${dark ? 'text-inverse-on-surface' : ''}`}>
        {title}
      </h5>

      {/* Description */}
      <p className={`font-body-md mb-6 ${dark ? 'text-tertiary-container' : 'text-secondary'}`}>
        {description}
      </p>

      {/* Badge */}
      <span className={`font-bold font-label-sm ${badgeClass}`}>
        {badge}
      </span>
    </div>
  )
}
