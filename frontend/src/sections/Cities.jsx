import CityCard from '../components/CityCard'

const cities = [
  {
    id: 'dehradun',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1i5edymHGn5-IsFpnQqyp5tLVEyupDud9J7vWg-VwriiRdDmWjF2na9GoUppRTYyxI9BLbYXeJQQNgdB8bHfyjeUZi4nWUohS91_3JsnoSPeEpyD9w9EmIjZomm_RwosKPtz2qiCiHr0FsC5eJ7dUaeuPB_x8N0lCyCHweQeHih8_FM2TrgY3BKEQ4SiiPiQ7zJ1_WEnAAHyYcYEG5QfaSZJ5yJ7pH7FJVXq0nsB-NZRdEnKb6jxb7yzW8wQ_ZBkLkFugOIt_8MC9',
    alt: 'Dehradun',
    watermark: 'DOON',
    name: 'Dehradun',
    description: 'The valley of abundance and our main hub.',
    badge: 'HEADQUARTERS',
  },
  {
    id: 'mussoorie',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoG2WxP2pXeMeDbl7LK1a4A6X6ge3Hq2ljYdMAZdI9Oba558q2WZYuy4V80dXfopFcdGtIj7pU_B_yL1KUraV4fD5-_Hyafx9gjOzqKFumPIy_AzWdSr0PI_x4wryn_JAC4oZIZ-MbSfoTDxUxwB8UgE0MN6RSRlIL1CVGcQYbRUUmLUB8jgpgSbztzOCi5v1dESmbz-vACR23OvzsGqtfRGpmdHML7e933UEHbtEs7q0L2KdgPBhA4QKhVjpY6P3bf6v_0S52v2sP',
    alt: 'Mussoorie',
    watermark: 'QUEEN',
    name: 'Mussoorie',
    description: 'Experience the misty turns of the Queen of Hills.',
    badge: null,
  },
  {
    id: 'rishikesh',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNaAWXruQ0f-6yPusIueh5SQ3c0T3QSObBzXexdresJli8ZReNEGgqXCQA0rC5LocmnLByMIrpqXWJ68QiH_jWTWM0Lo-dNEddlIsBh8TnZ81A6DHQVqpQDn3qU6_0kVoFyLEnZDsgDD7WkmbOs-wA_eFZY9kSWGYOytx3-tp-EULiWKBNDnLx9_A_p017w-_1mi4roiUbIBpsHDI99rC8NfXBet4318DiP-cTtKpA-tWSiDnG0eZqGUpcZ1HJcoFkqztweSLmppME',
    alt: 'Rishikesh',
    watermark: 'YOGA',
    name: 'Rishikesh',
    description: 'Adventure gateway by the holy Ganges.',
    badge: null,
  },
]

export default function Cities() {
  return (
    <section id="cities" className="py-24 overflow-hidden">
      {/* Section heading */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
          Starting in the Heart of the Hills
        </h3>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-8 px-margin-mobile md:px-margin-desktop overflow-x-auto pb-12 no-scrollbar">
        {cities.map((city) => (
          <CityCard key={city.id} {...city} />
        ))}
      </div>
    </section>
  )
}
