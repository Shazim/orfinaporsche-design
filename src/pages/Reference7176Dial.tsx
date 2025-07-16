import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7176Dial = () => {
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
            <span className="text-black font-medium">Dial Variations</span>
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
              Dial Variations
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are two main dials produced across the 7176 generation, each
              representing different applications and specifications.
            </p>
            <div className="mt-8 bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The 7176 dial is an update of the 7750 PD dial to match subdial
                placement of the Lemania 5100. Notable changes include a
                12-o'clock 24-hour dial, no lume or marker at 12-o'clock because
                of the position of the subdial, and different ring printing of
                the small seconds subdial at 9-o'clock.
              </p>
            </div>
          </div>

          {/* Dial Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* Civilian Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Civilian Dial
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Found on: 7176, 7176 D, 7176 S
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Key Features:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Branding:</strong> PD logo printed above
                          Day/Date windows and PORSCHE DESIGN printed below
                          Day/Date windows
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>New handset:</strong> New hour and pointed
                          minute hands
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Chronograph hands:</strong> Red central chrono
                          sweep hand and "Lollipop" chrono totalizer hand
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-black mb-2">
                      Special Note - 7176 D:
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700">
                      The 7176 D exclusively features German Day/Date Wheels, as
                      it was only sold in German Markets.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <img
                        src="/public/images/7176-photos/7176Scrop.jpg"
                        alt="7176 with Civilian Dial"
                        className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 with Civilian Dial
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <img
                        src="/public/images/7176-photos/7176D Front (wes)crop.jpg"
                        alt="7176 D with Civilian Dial"
                        className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 D with Civilian Dial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Military Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <img
                        src="/public/images/7176-photos/7176 Military.png"
                        alt="7176 Military with Military Dial"
                        className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 Military with Military Dial
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <img
                        src="/public/images/7176-photos/7176D-Bluecrop.jpg"
                        alt="7176 D with Military Dial"
                        className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 D with Military Dial
                    </span>
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Military Dial
                    </h2>
                  </div>

                  <div className="bg-green-50 p-6 sm:p-8 rounded-lg border-l-4 border-green-400">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Found on: 7176 Military, 7176 D
                    </p>
                    <p className="text-sm text-gray-600">
                      First appearance of the Military dial specification
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Key Features:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>3H logo:</strong> Red tritium marking printed
                          at 1:30 on the dial to meet military specifications
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Military handset:</strong> Hour and minute
                          hands same as civilian, with red central chrono sweep
                          hand
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Special hands:</strong> Red painted "Airplane"
                          on black chrono totalizer hand and red hand for
                          6-o'clock subdial
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 text-center">
                Dial Evolution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Civilian Application
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    Standard PD branding with updated subdial layout for the
                    Lemania 5100 movement, featuring new handset design and red
                    chronograph accents.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Military Specification
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    First military dial with tritium marking requirements,
                    featuring specialized military handset with distinctive red
                    airplane chronograph hand.
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

export default Reference7176Dial;
