import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7177CaseFinishes = () => {
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
            <span className="text-black font-medium">Case & Finishes</span>
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
              Case & Finishes
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The 7177's case is identical to that of the 7176's case, but
              differed in the available finishes with five distinct variations.
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
                    Identical Case Design
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
                    Shares the same "Round Top" design as the 7176, but
                    distinguished by its expanded range of finish options
                    including exclusive military specifications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <img
                    src="/lovable-uploads/7177-case-finishes.jpg"
                    alt="Reference 7177 Case Finishes"
                    className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                  All 7177 Finishes
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
                Five Produced Finishes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Sandblasted Steel */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    Sandblasted Steel
                  </h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Non-PVD Sablé or Sandblasted Steel finish, identical to the
                    7176 finish.
                  </p>
                </div>
              </div>

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
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Premium black PVD coating, identical to the 7176 finish.
                  </p>
                </div>
              </div>

              {/* Cadet Grey PVD */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    Cadet Grey PVD
                  </h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong>Exclusive to 7177:</strong> Unique grey PVD coating
                    only available on this reference.
                  </p>
                </div>
              </div>

              {/* Olive Green PVD */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    Olive Green PVD
                  </h3>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Military-spec olive green PVD coating, identical to the 7176
                    Military finish.
                  </p>
                </div>
              </div>

              {/* NTS PVD */}
              <div className="space-y-6 md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    NTS PVD
                  </h3>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong>Exclusive to 7177:</strong> Special NTS (Night
                    Training School) PVD coating only available on this
                    reference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 text-center">
                Finish Comparison
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Shared with 7176
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Sandblasted Steel</li>
                    <li>• Black PVD</li>
                    <li>• Olive Green PVD (Military)</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Exclusive to 7177
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Cadet Grey PVD</li>
                    <li>• NTS PVD</li>
                  </ul>
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

export default Reference7177CaseFinishes;
