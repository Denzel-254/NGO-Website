import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative bg-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-white">
              HopeBridge NGO
            </a>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Menu */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:relative lg:mt-0 lg:flex lg:w-auto lg:items-center lg:translate-x-0 lg:opacity-100`}
          >
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
              <a className="nav-link text-white hover:text-green-600" href="#">
                Home
              </a>
              <a className="nav-link text-white hover:text-green-600" href="#">
                About Us
              </a>
              <a className="nav-link text-white hover:text-green-600" href="#">
                Programs
              </a>
              <a className="nav-link text-white hover:text-green-600" href="#">
                Impact
              </a>
              <a className="nav-link text-white hover:text-green-600" href="#">
                Events
              </a>
            </div>

            <a
              href="#"
              className="block px-5 py-2 mt-4 text-sm text-center text-white bg-green-600 rounded-md lg:mt-0 lg:ml-6 hover:bg-green-700"
            >
              Donate Now
            </a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="container px-6 py-32 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Empowering Communities, Changing Lives
            </h1>

            <p className="mt-6 text-gray-200">
              We are a non-profit organization dedicated to improving lives
              through education, healthcare, and sustainable community
              development.
            </p>

            {/* Newsletter / Volunteer Signup */}
            <div className="w-full max-w-sm mx-auto mt-6 border rounded-md border-green-600 focus-within:ring focus-within:ring-green-300 focus-within:ring-opacity-40">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 bg-white rounded-md focus:outline-none"
                />

                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Join Our Mission
                </button>
              </form>
            </div>
          </div>

          {/* TRUST / PARTNERS SECTION */}
          <div className="max-w-xl mx-auto mt-20">
            <p className="mb-8 text-sm text-gray-200 uppercase">
              Trusted by partners & supporters
            </p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {[
                "UNICEF",
                "WHO",
                "Local Communities",
                "Donors",
                "Volunteers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center text-white font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
