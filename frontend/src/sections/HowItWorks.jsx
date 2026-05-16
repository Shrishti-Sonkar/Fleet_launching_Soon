import { Bike, CreditCard, Navigation } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Choose Your Ride',
    description: 'Browse and select from our wide range of bikes, cars and scooters available near you.',
    icon: Bike,
  },
  {
    number: '2',
    title: 'Rent Instantly',
    description: 'Complete quick verification and book your ride in seconds with seamless checkout.',
    icon: CreditCard,
  },
  {
    number: '3',
    title: 'Ride Freely',
    description: 'Unlock your vehicle and enjoy a smooth, hassle-free journey anytime.',
    icon: Navigation,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">

        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold font-label-sm uppercase tracking-widest block">
            How It Works
          </span>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-[48px] font-extrabold tracking-tight text-on-surface">
            Start Your Ride in 3 Easy Steps
          </h3>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto">
            From booking to riding everything is seamless with Fleet Mobilities.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[16.66%] right-[16.66%] h-[2px] bg-outline-variant/30 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-primary-container opacity-50 animate-pulse" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center text-center space-y-6"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center font-headline-md text-headline-md shadow-lg border border-outline-variant/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary-container/30">

                {/* Circle Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-container text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </div>

                <step.icon className="w-10 h-10 text-primary-container group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-3">
                <h4 className="font-headline-md text-2xl font-bold text-on-surface transition-colors group-hover:text-primary-container">
                  {step.title}
                </h4>
                <p className="font-body-md text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <a
            href="#connect"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-container text-white rounded-full font-label-lg font-bold tracking-wide uppercase shadow-lg shadow-primary-container/25 hover:shadow-xl hover:-translate-y-1 hover:bg-primary transition-all duration-300"
          >
            Connect with us!
          </a>
        </div>
      </div>
    </section>
  )
}
