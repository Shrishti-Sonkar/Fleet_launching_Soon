import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-cream">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Image + floating stat card ── */}
        <div className="order-2 md:order-1">
          <div className="relative">
            <img
              alt="Fleet warehouse interior — mountain-born vehicle hub"
              className="rounded-3xl shadow-2xl w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJuaFi-pidE1HBtnDISy7Mk8QsH6f5gnKUf-jgovCPBAyMpcDRtqSLCrlqH97j1miHc6_7NuroHcNxaXg_0RJUGgBTEleh3kVxMWU5hL90L-MjKl21r1PHl2yMJyPOtKEtotQyBkbfDIr019Hd62TV1HNWySeNx4Yi396-yN8M3skFUpPlVC_gsVwc9fo-2wTTRn9eJZyGZs6NxzH8eO_AM_2ss7qu6iLtXmlGdlhyruOwpTo6w2ZSX0T7mBjK82DO9vNyfztkwk6g"
              loading="lazy"
            />

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl space-y-4 hidden lg:block">
              <div className="flex items-center gap-4">
                <span className="font-headline-xl text-primary-container text-[40px] font-extrabold leading-none">
                  50K+
                </span>
                <span className="font-body-md font-bold uppercase tracking-widest text-secondary">
                  Anticipated Trips
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div className="space-y-8 order-1 md:order-2">
          <span className="text-primary font-bold font-label-sm uppercase tracking-widest">
            Why Fleet Mobilities
          </span>

          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            Why Choose Fleet Mobilities?
          </h3>

          <p className="font-body-lg text-secondary">
            Simple, reliable bike rentals designed for everyday travel.
          </p>

          <p className="font-body-md text-secondary">
            Fleet Mobilities is built to make bike rentals easy and accessible for everyone. Whether you need a ride for daily use, college, or a short trip, we help you find and rent bikes without unnecessary hassle. Just choose your ride and get going.
          </p>

          {/* Highlights */}
          <div className="space-y-4 pt-2">
            {[
              'Easy Booking Process',
              'Well-maintained and reliable bikes',
              'Support when you need it',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                <p className="font-headline-md text-[18px] text-on-surface">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
