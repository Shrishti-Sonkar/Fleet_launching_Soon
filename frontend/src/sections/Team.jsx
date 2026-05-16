import { Mail, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Harsh Raj',
    role: 'Co-Founder / COO',
    email: 'coo.fleetofficial@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harsh-raj-a877453b5',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Harsh+Raj&backgroundColor=FF6B00&textColor=ffffff',
  },
  {
    name: 'Diptanu Datta',
    role: 'Founder / CEO',
    email: 'ceo.fleetofficial@gmail.com',
    linkedin: 'https://www.linkedin.com/in/diptanu-datta-8ab909276',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Diptanu+Datta&backgroundColor=FF6B00&textColor=ffffff',
  },
  {
    name: 'Kartikey Jaiswal',
    role: 'Technical Lead',
    email: 'jaiswalkartikey559@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kartikey790520',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Kartikey+Jaiswal&backgroundColor=FF6B00&textColor=ffffff',
  },
  {
    name: 'Shrishti Sonkar',
    role: 'Technical Lead',
    email: 'shrishtisonkar01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shrishti-sonkar/',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Shrishti+Sonkar&backgroundColor=FF6B00&textColor=ffffff',
  },
  {
    name: 'Rishabh Singh Rawat',
    role: 'Media Manager',
    email: 'rishabhrwt527@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rishabhsingh-rawat/',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Rishabh+Singh+Rawat&backgroundColor=FF6B00&textColor=ffffff',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold font-label-sm uppercase tracking-widest">
            Our Team
          </span>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            Meet the people behind Fleet Mobilities
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-3xl p-6 text-center border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="mx-auto w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-surface-container-low group-hover:border-primary-container/20 transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h4 className="font-headline-sm text-[18px] font-bold text-on-surface">
                  {member.name}
                </h4>
                <p className="font-label-sm text-primary uppercase tracking-wide">
                  {member.role}
                </p>
              </div>

              {/* Social Links (appear on hover/focus) */}
              <div className="mt-6 flex justify-center gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary hover:bg-primary hover:text-white transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary hover:bg-[#0077b5] hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
