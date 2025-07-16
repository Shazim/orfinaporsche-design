import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7177Caseback = () => {
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
            <span className="text-black font-medium">Caseback</span>
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
              Caseback Engravings
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The caseback engravings on the 7177 differ entirely from that of
              the 7176 variants, featuring unique military specifications and
              design elements.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Design Differences */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Design Evolution
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Complete departure from 7176 caseback design language
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Key Changes:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Center logo:</strong> Smaller Porsche Design
                          logo compared to 7176
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Orfina addition:</strong> Added "Orfina" to
                          the center text
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Military designation:</strong> "Military
                          Chronograph 7177 MOD. DEP. INT." stamped on back
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <img
                      src="/lovable-uploads/7177-caseback.jpg"
                      alt="7177 Caseback Engraving"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7177 Caseback Engraving
                  </span>
                </div>
              </div>
            </div>

            {/* Outer Engraving Comparison */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <img
                      src="/lovable-uploads/7176s-caseback.jpg"
                      alt="7176S Caseback Engraving"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7176S Caseback Engraving
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Outer Engraving
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Significant differences in perimeter text layout and
                      content
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-black mb-2">
                        7176S Outer Engraving:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        "SWISS MADE_ 7176 S CHRONOGRAPH_ AUTOMATIC_WATER
                        RESISTANT_ TESTED 10 ATM_ SHOCKPROTECTED_STAINLESS
                        STEEL"
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-black mb-2">
                        7177 Outer Engraving:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        "SWISS MADE_WATER RESISTANT_TESTED
                        10ATM_AUTOMATIC_SHOCKPROTECTED_STAINLESS STEEL"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serial Numbers */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                    Serial Numbers
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    All 7177 variants include a stamped serial number, which are
                    found in groupings for particular dial configurations.
                  </p>

                  <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg border-l-4 border-yellow-400">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                      Important Note on Late Production
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      In 1999 after Umberto Maglioli died, Orfina was sold to
                      new owners. To clear much of their backstock, they sold
                      parts to various parties who subsequently "produced" new
                      watches from put-together surplus parts left on shelves.
                      The addition of these late 1990s surplus watches has
                      raised many questions about the correlation of serial
                      numbers to the unit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Variants */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="bg-blue-50 p-8 sm:p-12 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                    Special Variants
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Specifically for the Venezuelan, UAE, and Bund-issued
                  variants, there are unique caseback engravings, which will be
                  discussed in their respective sections.
                </p>
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

export default Reference7177Caseback;
