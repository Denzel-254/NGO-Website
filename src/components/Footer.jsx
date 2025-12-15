export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:justify-between">
          {/* BRAND / ABOUT */}
          <div className="w-full lg:w-2/5">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                NGO Name
              </span>
            </a>

            <p className="max-w-sm mt-4 text-gray-500 dark:text-gray-400">
              We are a non-profit organization dedicated to empowering
              communities, supporting education, promoting health, and creating
              sustainable impact.
            </p>

            {/* SOCIALS */}
            <div className="flex mt-6 space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-0 sm:grid-cols-3 lg:grid-cols-4">
            {/* ABOUT */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase dark:text-white">
                About Us
              </h3>
              <a
                href="#"
                className="block mt-3 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Our Mission
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Our Team
              </a>
            </div>

            {/* PROGRAMS */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase dark:text-white">
                Programs
              </h3>
              <a
                href="#"
                className="block mt-3 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Education
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Health & Wellness
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Community Outreach
              </a>
            </div>

            {/* GET INVOLVED */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase dark:text-white">
                Get Involved
              </h3>
              <a
                href="#"
                className="block mt-3 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Volunteer
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Donate
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Partner With Us
              </a>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase dark:text-white">
                Contact
              </h3>
              <span className="block mt-3 text-sm text-gray-600 dark:text-gray-400">
                +254 700 000 000
              </span>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                info@ngoname.org
              </span>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                Nairobi, Kenya
              </span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} NGO Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
