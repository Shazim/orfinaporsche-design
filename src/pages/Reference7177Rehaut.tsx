import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7177Rehaut = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              to="/references/7177"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7177
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Rehaut</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7177
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Rehaut Variations
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The Reference 7177 features distinct rehaut variations that
              differentiate military and civilian variants, with unique
              production characteristics.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Rehaut Types */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Rehaut Design Philosophy
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Military vs. Civilian specifications determine rehaut type
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Key Distinctions:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Military variants:</strong> All 7177 or
                          "military" variants feature a 12-hour rehaut ring
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Civilian variants:</strong> Non-military
                          civilian variants have a tachymetric rehaut ring
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Production evolution:</strong> Two known
                          variations of the 12-hour rehaut ring exist
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <img
                        src="/lovable-uploads/7177-crooked-seven-rehaut.jpg"
                        alt="Crooked Seven Rehaut"
                        className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      Crooked Seven Rehaut
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <img
                        src="/lovable-uploads/7177-standard-rehaut.jpg"
                        alt="Standard Rehaut"
                        className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      Standard Rehaut
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Variations */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                    12-Hour Rehaut Variations
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-4">
                    <div className="text-lg font-medium text-black">
                      Crooked Seven Rehaut
                    </div>
                    <div className="text-gray-700 leading-relaxed">
                      Features a slightly larger font with a distinctive
                      "crooked seven" character. Found on the first 7177's ever
                      produced, making it a rare early production variant.
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-lg font-medium text-black">
                      Standard Rehaut
                    </div>
                    <div className="text-gray-700 leading-relaxed">
                      Features a slightly smaller, more refined font. Found on
                      all other 7177 variants after the initial production run,
                      representing the standard production specification.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prototype Note */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-yellow-50 p-8 sm:p-12 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    P
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                    Prototype Variations
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  There are a variety of prototype rehauts that have been seen
                  on examples over the years, but these were not configured on
                  any "production" watches and thus are not discussed in detail
                  here. These prototypes represent experimental designs that
                  never made it to full production.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 text-center">
                Production Timeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Early Production
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    First 7177 models featured the "Crooked Seven" rehaut with
                    larger font and distinctive character styling, making these
                    early examples highly collectible.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Standard Production
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    All subsequent 7177 variants used the refined standard
                    rehaut with smaller, more consistent typography across the
                    production run.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/references/7177"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Reference 7177
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7177Rehaut;
