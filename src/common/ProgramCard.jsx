import { FiUsers, FiHeart, FiBookOpen, FiGlobe } from "react-icons/fi";

const iconMap = {
  education: FiBookOpen,
  health: FiHeart,
  community: FiUsers,
  environment: FiGlobe,
};

export default function ProgramCard({ category, tag, title, description }) {
  const Icon = iconMap[category];

  return (
    <div className="w-full px-4 py-5 bg-white rounded-md shadow-md border border-gray-200">
      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800">Our Programs</span>
        <span className="px-3 py-1 text-xs uppercase bg-green-100 text-green-600 rounded-full">
          {tag}
        </span>
      </div>

      {/* Icon */}
      <div className="mt-4">
        <span className="inline-flex p-3 text-green-600 bg-green-100 rounded-xl">
          <Icon className="w-6 h-6" />
        </span>
      </div>

      {/* Content */}
      <div>
        <h2 className="mt-4 text-lg font-semibold text-blue-950">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <button className="text-sm font-medium text-blue-950 hover:underline">
          Learn more →
        </button>
      </div>
    </div>
  );
}
