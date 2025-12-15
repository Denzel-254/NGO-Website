import EventCard from "../common/EventCard";

export default function Events() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-14 mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-semibold text-blue-950 lg:text-3xl">
            Upcoming Events
          </h1>
          <p className="mt-4 text-gray-600">
            Join us in our upcoming activities as we work together to create
            positive change in our communities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <EventCard
            image="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80"
            category="Community Outreach"
            title="Community Health Camp"
            description="Free medical checkups and health awareness sessions for local residents."
            date="12 Aug 2025"
            location="Nairobi"
          />

          <EventCard
            image="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80"
            category="Education"
            title="Back to School Drive"
            description="Distribution of learning materials and mentorship for school children."
            date="25 Aug 2025"
            location="Kisumu"
          />

          <EventCard
            image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80"
            category="Environment"
            title="Tree Planting Exercise"
            description="Community-led tree planting to promote environmental conservation."
            date="2 Sep 2025"
            location="Naivasha"
          />

          <EventCard
            image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
            category="Youth"
            title="Youth Empowerment Workshop"
            description="Skills training and leadership development for young people."
            date="10 Sep 2025"
            location="Machakos"
          />

          <EventCard
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            category="Women"
            title="Women Economic Forum"
            description="Supporting women entrepreneurs through training and networking."
            date="18 Sep 2025"
            location="Eldoret"
          />

          <EventCard
            image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
            category="Volunteer"
            title="Volunteer Orientation Day"
            description="Onboarding and orientation for new volunteers joining our mission."
            date="30 Sep 2025"
            location="Online"
          />
        </div>
      </div>
    </section>
  );
}
