import CityCard from '../components/CityCard'

const cities = [
  {
    id: 'mussoorie',
    image: '/Mussori.png',
    alt: 'Mussoorie',
    watermark: null,
    name: 'Mussoorie',
    description: 'Ride through the scenic curves of the Queen of Hills.',
    badge: null,
  },
  {
    id: 'rishikesh',
    image: '/Rishikesh.png',
    alt: 'Rishikesh',
    watermark: null,
    name: 'Rishikesh',
    description: 'Where adventure meets the calm of the Ganges.',
    badge: null,
  },
  {
    id: 'delhi',
    image: '/Delhi.png',
    alt: 'Delhi',
    watermark: null,
    name: 'Delhi',
    description: 'Move through the city with fast and flexible bike rentals.',
    badge: null,
  },
]

export default function Cities() {
  return (
    <section id="cities" className="py-24 overflow-hidden">
      {/* Section heading */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-center">
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
          Launching across key locations, starting with Uttarakhand
        </h3>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-8 px-margin-mobile md:px-margin-desktop overflow-x-auto pb-12 no-scrollbar xl:justify-center">
        {cities.map((city) => (
          <CityCard key={city.id} {...city} />
        ))}
      </div>
    </section>
  )
}
