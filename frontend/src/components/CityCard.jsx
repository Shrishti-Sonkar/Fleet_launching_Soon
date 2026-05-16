/**
 * CityCard – horizontal scroll card for the Cities section
 *
 * Props:
 *  image        string  – image URL
 *  alt          string  – alt text
 *  watermark    string  – large ghost text overlay (e.g. "DOON")
 *  name         string  – city name
 *  description  string
 *  badge        string  – optional top-right badge text
 */
export default function CityCard({ image, alt, watermark, name, description, badge }) {
  return (
    <div className="flex-shrink-0 w-[400px] h-[500px] relative rounded-3xl overflow-hidden group">
      <img
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        src={image}
        loading="lazy"
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Bottom text */}
      <div className="absolute bottom-0 p-8">
        <h6 className="font-headline-xl text-[80px] opacity-10 text-white absolute -top-10 left-0 leading-none">
          {watermark}
        </h6>
        <h5 className="font-headline-lg text-white mb-2">{name}</h5>
        <p className="text-white/70 font-body-md">{description}</p>
      </div>

      {/* Optional badge */}
      {badge && (
        <div className="absolute top-8 right-8">
          <span className="bg-primary-container text-white px-4 py-2 rounded-full font-label-sm">
            {badge}
          </span>
        </div>
      )}
    </div>
  )
}
