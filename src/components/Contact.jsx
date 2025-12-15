export default function Contact() {
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="flex flex-col min-h-screen bg-black/70">
        <div className="container flex flex-col flex-1 px-6 py-16 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            {/* LEFT CONTENT */}
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-3xl font-semibold lg:text-4xl">
                Get in Touch With Us
              </h1>

              <p className="max-w-xl mt-6 text-gray-200">
                We would love to hear from you. Whether you want to volunteer,
                partner with us, support our programs, or simply ask a question,
                our team is ready to connect with you.
              </p>

              <button className="px-8 py-3 mt-8 text-sm font-medium tracking-wide text-white transition-colors duration-300 bg-blue-950 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                Contact Us Today
              </button>

              {/* SOCIALS */}
              <div className="mt-10">
                <h3 className="text-gray-300">Follow us</h3>

                <div className="flex mt-4 space-x-4">
                  {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="text-sm text-gray-300 hover:text-blue-950 cursor-pointer"
                      >
                        {platform}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="mt-10 lg:w-1/2 lg:mx-6 lg:mt-0">
              <div className="w-full px-8 py-10 mx-auto bg-white shadow-2xl rounded-xl lg:max-w-xl border border-gray-200">
                <h2 className="text-xl font-semibold text-blue-950">
                  Contact Form
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Send us a message and we will get back to you as soon as
                  possible.
                </p>

                <form className="mt-6 space-y-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-950 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-950 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="How can we help you?"
                      className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-950 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 bg-blue-950 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
