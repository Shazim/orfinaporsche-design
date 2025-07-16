import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7176CaseFinishes = () => {
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
              to="/references/7176"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7176
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Case & Finishes</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7176
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Case & Finishes
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              All 7176 variants feature a "Round Top" / "Round Face" design
              outfitted to fit the new Lemania 5100 movement.
            </p>
          </div>

          {/* Case Design */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400 mb-20 sm:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                    Round Top Design
                  </h2>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                    Measurements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
                    <div className="text-center">
                      <div className="font-bold text-black">40.6mm</div>
                      <div className="text-gray-600">Diameter</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">44.2mm</div>
                      <div className="text-gray-600">Lug-To-Lug</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">15.3mm</div>
                      <div className="text-gray-600">Height</div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The case has a rounded face and is thicker than the 7750
                    cases in order to house the taller new movement. It features
                    a longer extension of the hidden lugs than the Transitional
                    case.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <img
                    src="/public/images/7176-photos/7176Scrop.jpg"
                    alt="7176 Round Top Case"
                    className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                  7176 Round Top Case
                </span>
              </div>
            </div>
          </div>

          {/* Finishes */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="flex items-center space-x-4 mb-12 sm:mb-16">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                Available Finishes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Black PVD */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    Black PVD
                  </h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Premium PVD coating providing durability and distinctive
                    appearance.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Available on:</strong> 7176, 7176 Military, 7176 D,
                    7176 S
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <img
                      src="/public/images/7176-photos/7176s-PVD.jpg"
                      alt="7176 S Black PVD"
                      className="relative w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 text-center">
                    7176 S Black PVD
                  </span>
                </div>
              </div>

              {/* Silver/Sable */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    Silver/Sable
                  </h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Sandblasted stainless steel with distinctive matte finish.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Available on:</strong> 7176, 7176 Military, 7176 D,
                    7176 S
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <img
                      src="/public/images/7176-photos/7176Scrop.jpg"
                      alt="7176 S Silver/Sable"
                      className="relative w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 text-center">
                    7176 S Silver/Sable
                  </span>
                </div>
              </div>

              {/* Green PVD */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    Green PVD
                  </h3>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Exclusive military-spec finish with distinctive olive green
                    coating.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Exclusive to:</strong> 7176 Military only
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <img
                      src="/public/images/7176-photos/7176 Military.png"
                      alt="7176 Military Green"
                      className="relative w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 text-center">
                    7176 Military Green
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 text-center">
                Finish Availability Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Standard Finishes
                  </div>
                  <div className="text-gray-600">
                    Black PVD and Silver/Sable available across all variants
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Military Exclusive
                  </div>
                  <div className="text-gray-600">
                    Green PVD finish exclusive to 7176 Military
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Case Evolution
                  </div>
                  <div className="text-gray-600">
                    Designed for the new Lemania 5100 movement
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
            to="/references/7176"
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
            Back to Reference 7176
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7176CaseFinishes;
