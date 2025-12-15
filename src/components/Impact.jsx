import ImpactStat from "../common/ImpactStat";

export default function Impact() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-14 mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-semibold text-blue-950 lg:text-3xl">
            Our Impact
          </h1>
          <p className="mt-4 text-gray-600">
            Through community-driven programs, we create measurable and lasting
            change in the lives of people we serve.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          <ImpactStat value="5,000+" label="Lives Reached" />
          <ImpactStat value="30+" label="Community Projects" />
          <ImpactStat value="150+" label="Active Volunteers" />
          <ImpactStat value="10+" label="Partner Organizations" />
        </div>

        {/* Divider */}
        <div className="w-24 h-1 mx-auto mt-12 bg-blue-950 rounded-full"></div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-600 italic">
            “The support from this organization transformed our community.
            Children are now learning, families are healthier, and hope has been
            restored.”
          </p>

          <p className="mt-4 text-sm font-medium text-gray-800">
            — Community Representative
          </p>
        </div>
      </div>
    </section>
  );
}
