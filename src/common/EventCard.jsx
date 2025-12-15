export default function EventCard({
  image,
  category,
  title,
  description,
  date,
  location,
}) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
      {/* Image */}
      <img className="object-cover w-full h-56" src={image} alt={title} />

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-medium text-green-600 uppercase">
          {category}
        </span>

        <h2 className="block mt-2 text-lg font-semibold text-blue-950">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">{description}</p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
          <span>{date}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
