import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

const Reference7176CaseFinishes = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  // Handle escape key for full screen modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setFullScreenImage(null);
      }
    };

    if (fullScreenImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [fullScreenImage]);

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
              All 7176 variants feature a "Round Top" / "Round Face" case
              outfitted to fit the, at the time, new Lemania 5100 movement. The
              new case has a rounded face, and is thicker than the 7750 cases in
              order to house the taller new movement.
            </p>
          </div>

          {/* Case Design Section */}
          {/* <div className="mb-20 sm:mb-24 lg:mb-32">
            <div className="bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 text-center">
                Case Design
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Round Top Design
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The "Round Top" or "Round Face" design was specifically
                      engineered to accommodate the new Lemania 5100 movement,
                      featuring a rounded face that distinguishes it from
                      earlier models.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Enhanced Thickness
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The case is notably thicker than the 7750 cases, designed
                      to house the taller Lemania 5100 movement while
                      maintaining the watch's elegant proportions.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Extended Lugs
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The case features longer extension of the hidden lugs
                      compared to the Transitional case, providing improved
                      strap integration and wearing comfort.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Technical Specifications
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Diameter:</span>
                        <span>__ mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lug-to-Lug:</span>
                        <span>__ mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Height:</span>
                        <span>__ mm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Finishes Section */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-6">
                Available Finishes
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                The Reference 7176 series offers four distinct finishes across
                its variants, with two exclusive military options.
              </p>
            </div>

            {/* Black PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Black PVD
                    </h3>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Available on all 7176 variants: 7176, 7176 Military, 7176
                      D, 7176 S
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-black">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Durability:</strong> Physical Vapor Deposition
                          coating provides excellent wear resistance
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Appearance:</strong> Deep black finish with
                          subtle matte texture
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Availability:</strong> Standard finish across
                          all model variants
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/7176-photos/7176s-PVD.jpg",
                        alt: "7176 S Black PVD",
                        title: "Black PVD Finish",
                        subtitle: "Reference 7176",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src="/images/7176-photos/7176s-PVD.jpg"
                        alt="7176 S Black PVD"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7176 S Black PVD
                  </span>
                </div>
              </div>
            </div>

            {/* Silver/Sable */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/7176-photos/7176Scrop.jpg",
                        alt: "7176 S Silver/Sable",
                        title: "Silver/Sable Finish",
                        subtitle: "Reference 7176",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src="/images/7176-photos/7176Scrop.jpg"
                        alt="7176 S Silver/Sable"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7176 S Silver/Sable
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Silver/Sable
                    </h3>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-gray-400">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      Available on all 7176 variants: 7176, 7176 Military, 7176
                      D, 7176 S
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-black">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Material:</strong> Stainless steel with satin
                          brushed finish
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Appearance:</strong> Classic silver tone with
                          subtle sable undertones
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Availability:</strong> Standard finish across
                          all model variants
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Nato Grey PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Nato Grey PVD
                    </h3>
                  </div>

                  <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>Exclusive to 7176 Military</strong>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-black">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Exclusivity:</strong> Only available on the
                          7176 Military variant
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Appearance:</strong> Military-inspired grey
                          PVD coating
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Purpose:</strong> Designed for military
                          applications with reduced reflectivity
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/7176-photos/7176 Military.png",
                        alt: "7176 Military Nato Grey PVD",
                        title: "Nato Grey PVD Finish",
                        subtitle: "Reference 7176 Military",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src="/images/7176-photos/7176 Military.png"
                        alt="7176 Military Nato Grey PVD"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7176 Military Nato Grey PVD
                  </span>
                </div>
              </div>
            </div>

            {/* Green PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/7176-photos/Alan-7176-Militarycrop.jpg",
                        alt: "7176 Military Green PVD",
                        title: "Green PVD Finish",
                        subtitle: "Reference 7176 Military",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src="/images/7176-photos/Alan-7176-Militarycrop.jpg"
                        alt="7176 Military Green PVD"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7176 Military Green PVD
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Green PVD
                    </h3>
                  </div>

                  <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>Exclusive to 7176 Military</strong>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-black">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Exclusivity:</strong> Only available on the
                          7176 Military variant
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Appearance:</strong> Military-inspired green
                          PVD coating
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Purpose:</strong> Designed for military
                          applications with tactical coloring
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

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-light mb-1">
                {fullScreenImage.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {fullScreenImage.subtitle}
              </p>
            </div>

            {/* Instructions */}
            <div className="mt-8 text-white text-sm opacity-75 text-center">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reference7176CaseFinishes;
