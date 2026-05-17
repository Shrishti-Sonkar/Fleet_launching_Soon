import { Zap, Instagram, Facebook, Mail, MapPin } from 'lucide-react'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fleet.mobilities',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61589921305562',
    icon: Facebook,
  },
]

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Safety', href: '#' },
  { label: 'Partners', href: '#connect' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <img src="/LOGO.png" alt="Fleet Mobilities" className="h-8 w-auto object-contain" />
            <span className="font-bold text-[17px] tracking-tight text-on-surface">
              Fleet <span className="text-primary-container">Mobilities</span>
            </span>
          </div>
          <p className="font-body-md text-tertiary">
            Premium vehicle rentals for India.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 bg-surface-container rounded-full flex items-center justify-center text-tertiary hover:bg-primary-container hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a
              href="mailto:fleet.mobilities@gmail.com"
              aria-label="Email Fleet Mobilities"
              className="w-9 h-9 bg-surface-container rounded-full flex items-center justify-center text-tertiary hover:bg-primary-container hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h6 className="font-label-sm uppercase tracking-widest text-on-surface">Company</h6>
          <ul className="space-y-2">
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-body-md text-tertiary hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h6 className="font-label-sm uppercase tracking-widest text-on-surface">Social</h6>
          <ul className="space-y-2">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-md text-tertiary hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:fleet.mobilities@gmail.com"
                className="font-body-md text-tertiary hover:text-primary hover:translate-x-1 transition-all inline-block"
              >
                Email Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h6 className="font-label-sm uppercase tracking-widest text-on-surface">Contact</h6>
          <div className="space-y-3">
            <a
              href="mailto:fleet.mobilities@gmail.com"
              className="flex items-center gap-2 font-body-md text-tertiary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
              fleet.mobilities@gmail.com
            </a>
            <div className="flex items-start gap-2 font-body-md text-tertiary">
              <MapPin className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" />
              <span>Dehradun, Uttarakhand 248001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 text-center border-t border-outline-variant/10 pt-8 px-margin-mobile">
        <p className="font-label-sm text-tertiary">
          © {new Date().getFullYear()} Fleet Mobilities
        </p>
      </div>
    </footer>
  )
}
