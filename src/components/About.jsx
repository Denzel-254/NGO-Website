import { FiUsers, FiHeart, FiTarget, FiStar } from "react-icons/fi";

export default function About() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        {/* Section Heading */}
        <h1 className="text-2xl font-semibold text-blue-950 capitalize lg:text-3xl">
          About <br /> Our Organization
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-950 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-950 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-950 rounded-full"></span>
        </div>

        {/* Content */}
        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          {/* Left: Features */}
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            {/* Mission */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-600 bg-green-100 rounded-xl">
                <FiTarget className="w-6 h-6" />
              </span>

              <h2 className="text-xl font-semibold text-blue-950 capitalize">
                Our Mission
              </h2>

              <p className="text-gray-500">
                To empower communities through education, healthcare, and
                sustainable development initiatives that create lasting impact.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-600 bg-green-100 rounded-xl">
                <FiStar className="w-6 h-6" />
              </span>

              <h2 className="text-xl font-semibold text-blue-950 capitalize">
                Our Vision
              </h2>

              <p className="text-gray-500">
                A world where every individual has access to opportunities,
                dignity, and a sustainable future.
              </p>
            </div>

            {/* Who We Serve */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-600 bg-green-100 rounded-xl">
                <FiUsers className="w-6 h-6" />
              </span>

              <h2 className="text-xl font-semibold text-blue-950 capitalize">
                Who We Serve
              </h2>

              <p className="text-gray-500">
                Vulnerable communities, youth, women, and families in need of
                social and economic support.
              </p>
            </div>

            {/* Our Values */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-600 bg-green-100 rounded-xl">
                <FiHeart className="w-6 h-6" />
              </span>

              <h2 className="text-xl font-semibold text-blue-950 capitalize">
                Our Values
              </h2>

              <p className="text-gray-500">
                Integrity, compassion, transparency, and collaboration guide
                everything we do.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-md h-112 object-cover xl:w-136 xl:h-136 rounded-full"
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80"
              alt="NGO team working with the community"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
