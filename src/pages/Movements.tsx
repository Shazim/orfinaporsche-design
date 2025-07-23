import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Movements = () => {
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
            <span className="text-black font-medium">Movements</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Movements
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Chronograph Calibers
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                All Orfina Porsche Design chronographs are powered by the robust
                and reliable Valjoux 7750 automatic chronograph movement,
                renowned for its precision and durability in professional
                timekeeping applications.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Valjoux 7750 Details */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Valjoux 7750
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Technical Specifications:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Caliber:</strong> Valjoux 7750
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Type:</strong> Automatic chronograph
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Jewels:</strong> 17 jewels
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Frequency:</strong> 28,800 vibrations per hour
                        (4Hz)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Functions:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Hours, minutes, seconds
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Day and date display
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        30-minute chronograph counter
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        12-hour chronograph counter
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Military Reliability */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="bg-blue-50 p-8 sm:p-12 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                    Military Reliability
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The Valjoux 7750 was specifically chosen for Orfina Porsche
                    Design military chronographs due to its exceptional
                    reliability and robust construction, making it ideal for
                    demanding military and professional applications.
                  </p>

                  <div className="bg-white p-6 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Key Advantages
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Proven reliability in extreme conditions
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Self-winding automatic mechanism
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Precise chronograph functionality
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Serviceable and maintainable design
                        </span>
                      </li>
                    </ul>
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
            to="/"
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
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movements;
