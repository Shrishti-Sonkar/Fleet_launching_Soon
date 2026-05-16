import { CheckCircle, X } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-cream">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Image + floating stat card ── */}
        <div className="order-2 md:order-1">
          <div className="relative">
            <img
              alt="Premium motorcycle for rent"
              className="rounded-3xl shadow-2xl w-full object-cover"
              src="/hunter.jpg"
              loading="lazy"
            />

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl space-y-4 hidden lg:block">
              <div className="flex items-center gap-4">
                <span className="font-headline-xl text-primary-container text-[32px] md:text-[40px] font-extrabold leading-none">
                  Trusted
                </span>
                <span className="font-body-md font-bold uppercase tracking-widest text-secondary leading-tight">
                  & Reliable<br/>Rides
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
            Traditional Rentals vs Fleet Mobilities
          </h3>

          <p className="font-body-lg text-secondary">
            A simpler, smarter way to rent and ride.
          </p>

          {/* Highlights / Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {/* Traditional Rentals */}
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface/60 text-sm md:text-base uppercase tracking-wider border-b border-outline/30 pb-2">Traditional</h4>
              <div className="space-y-3">
                {[
                  'Manual & slow booking',
                  'Uncertain condition',
                  'No live availability',
                  'Hidden pricing',
                ].map((item, i) => (
                  <div key={`trad-${i}`} className="flex items-start gap-2">
                    <X className="text-secondary w-5 h-5 flex-shrink-0 opacity-50 mt-0.5" />
                    <p className="font-headline-md text-[15px] md:text-[16px] text-secondary/80 leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fleet Mobilities */}
            <div className="space-y-4">
              <h4 className="font-bold text-primary text-sm md:text-base uppercase tracking-wider border-b border-primary/30 pb-2">Fleet Mobilities</h4>
              <div className="space-y-3">
                {[
                  'Simple & fast booking',
                  'Verified & maintained',
                  'Real-time availability',
                  'Transparent pricing',
                ].map((item, i) => (
                  <div key={`fleet-${i}`} className="flex items-start gap-2">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="font-headline-md text-[15px] md:text-[16px] text-on-surface leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
