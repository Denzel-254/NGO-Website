import ProgramCard from "../common/ProgramCard";

export default function Programs() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        {/* Section Heading */}
        <h1 className="text-2xl font-semibold text-blue-950 lg:text-3xl">
          Our Programs
        </h1>

        <p className="max-w-2xl mt-4 text-gray-600">
          We run community-driven programs focused on long-term impact and
          sustainable development.
        </p>

        {/* Programs Grid */}
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <ProgramCard
            category="education"
            tag="Education"
            title="Education Support"
            description="Providing access to quality education, learning materials, and mentorship for children and youth."
          />

          <ProgramCard
            category="health"
            tag="Health"
            title="Healthcare Outreach"
            description="Improving community health through medical camps, awareness programs, and basic care."
          />

          <ProgramCard
            category="community"
            tag="Community"
            title="Community Empowerment"
            description="Supporting livelihoods, skills training, and social inclusion for vulnerable groups."
          />

          <ProgramCard
            category="environment"
            tag="Environment"
            title="Environmental Conservation"
            description="Promoting environmental protection through tree planting and sustainability initiatives."
          />
        </div>
      </div>
    </section>
  );
}
