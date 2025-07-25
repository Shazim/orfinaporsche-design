import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Full Screen Modal Component
const FullScreenModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <div className="relative max-w-full max-h-full flex flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Image info */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
          {image.subtitle && <p className="text-gray-300">{image.subtitle}</p>}
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

const Reference7177DialVenezuelanMOD = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              to="/references/7177"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7177
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              to="/references/7177/dial"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Dial Variations
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">VZMOD</span>
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
              VZMOD Dial
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Key Notes */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <SectionHeading 
                title="Key Notes" 
                variant="elegant-dark" 
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          The Venezuelan-issued watches were produced for the Venezuelan Ministry of Defense (VZMOD).
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          These watches feature Baseline Mk. 1,Baseline Mk. 2, and Four-Logo Dials (further discussed in the Reference 7177 - Four-Logo, and Reference 7177 - BUND Dial pages). These have also been found with Service Dials.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          Examples of the Venezuela variant are known to come in multiple of the 7177 finishes and were delivered with a unique printed box.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          Typically, examples of these watches are generally in poor condition as they were worn extensively throughout their service careers.
                        </span>
                      </li>

                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col items-center max-w-md">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-VMODcrop.jpg",
                          alt: "Venezuelan MOD Dial",
                          title: "Venezuelan MOD Dial",
                          subtitle: "Ministry of Defense Issue",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-VMODcrop.jpg"
                        alt="Venezuelan MOD Dial"
                        className="relative w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      Venezuelan MOD Dial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Caseback Batches */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <SectionHeading 
                title="Caseback" 
                variant="elegant-dark" 
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Venezuelan variant watches are known to come in two
                  batches, one stamped "EJERCITO DE VENEZUELA" and the other
                  stamped “REPUBLICA DE VENEZUELA MINISTERIO DE LA DEFENSA” on
                  the caseback. For both batches, an issue number is also
                  engraved on the caseback.
                </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-VMOD-Casebackcrop.jpg",
                        alt: "EJERCITO DE VENEZUELA Caseback",
                        title: "EJERCITO DE VENEZUELA Caseback",
                        subtitle: "First Batch - Army Issue",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-VMOD-Casebackcrop.jpg"
                      alt="EJERCITO DE VENEZUELA Caseback"
                      className="relative w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    EJERCITO DE VENEZUELA Caseback
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/MINISTERIO%20VMOD%20Caseback.jpg",
                        alt: "MINISTERIO DE VENEZUELA Caseback",
                        title: "MINISTERIO DE VENEZUELA Caseback",
                        subtitle: "Second Batch - Ministry Issue",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/MINISTERIO%20VMOD%20Caseback.jpg"
                      alt="MINISTERIO DE VENEZUELA Caseback"
                      className="relative w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    MINISTERIO DE VENEZUELA Caseback
                  </span>
                </div>
              </div>
            </div>
            </div>

            {/* Accessories */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <SectionHeading 
                title="Accessories" 
                variant="elegant-dark" 
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Examples of the Venezuela variant are known to come in multiple of the 7177 finishes and were delivered with a unique printed box.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col items-center max-w-md">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/VMOD%20Boxcrop.jpg",
                          alt: "Venezuelan Variant Box",
                          title: "Venezuelan Variant Box",
                          subtitle: "Unique Printed Packaging",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/VMOD%20Boxcrop.jpg"
                        alt="Venezuelan Variant Box"
                        className="relative w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      Venezuelan Variant Box
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Context */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Historical Context
                </h2>
              </div>

              <div className="bg-gray-50 p-8 sm:p-12 rounded-lg border-l-4 border-black">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The Venezuelan Ministry of Defense's procurement of Swiss
                    chronographs reflects the country's military modernization
                    efforts and the importance placed on precision timing
                    equipment for military operations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Military Structure
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The distinction between "EJERCITO DE VENEZUELA" (Army)
                        and "MINISTERIO DE VENEZUELA" (Ministry) engravings
                        suggests different levels of military hierarchy and
                        distribution channels within the Venezuelan defense
                        establishment.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Issue Numbers
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The presence of individual issue numbers on all
                        Venezuelan variants indicates careful military inventory
                        control and suggests these watches were formally
                        integrated into the Venezuelan military equipment
                        system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Condition Notes */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="bg-red-50 p-8 sm:p-12 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    ⚠
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                    Condition Expectations
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Collectors should be aware that Venezuelan variants
                    typically show significant wear due to extensive military
                    service in demanding environments.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-semibold text-black mb-3">
                        Typical Wear
                      </h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Case scratches and dents</li>
                        <li>• Dial aging and patina</li>
                        <li>• Crystal wear and scratches</li>
                        <li>• Crown and pusher wear</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-semibold text-black mb-3">
                        Service Environment
                      </h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Tropical climate exposure</li>
                        <li>• High humidity conditions</li>
                        <li>• Extended field operations</li>
                        <li>• Regular military use</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-semibold text-black mb-3">
                        Collector Value
                      </h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Historical significance</li>
                        <li>• Authentic military provenance</li>
                        <li>• Rarity due to service wear</li>
                        <li>• Complete sets highly valued</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/references/7177/dial"
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
            Back to Dial Variations
          </Link>
        </div>
      </div>

      {/* Full Screen Modal */}
      <FullScreenModal
        image={fullScreenImage}
        onClose={() => setFullScreenImage(null)}
      />
    </div>
  );
};

export default Reference7177DialVenezuelanMOD;
