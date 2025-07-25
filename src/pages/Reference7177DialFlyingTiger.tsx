import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
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

const Reference7177DialFlyingTiger = () => {
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
            <span className="text-black font-medium">Flying Tiger</span>
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
              Flying Tiger Dial
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                The Flying Tiger Watches were Issued for the U.S. Air Force’s
                23rd Tactical Fighter Group. The 23rd Fighter Group is the home
                of the Air Force's legendary Flying Tigers and is stationed at
                Moody Air Force Base. The 23rd Fighter Group's primary mission
                is forward air control, close-air support, interdiction, and
                combat search and rescue operations.
              </p>
            </div>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
            <div className="flex justify-center">
              <div className="flex flex-col items-center max-w-2xl">
                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setFullScreenImage({
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Tiger-Group-2crop.jpg",
                      alt: "Flying Tiger Group Photo",
                      title: "Flying Tiger Group Photo",
                      subtitle: "Multiple Flying Tiger Variants",
                    })
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <ImageWithLoader
                    src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Tiger-Group-2crop.jpg"
                    alt="Flying Tiger Group Photo"
                    className="relative w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    skeletonClassName="w-full h-80 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      Click to zoom
                    </div>
                  </div>
                </div>
                <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                  Flying Tiger Group Photo
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Historical Background */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  History{" "}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gray-50 sm:p-8 rounded-lg border-l-4 border-black">
                    The 23rd Fighter Group traces its roots back to the 23rd
                    Pursuit Group, which was formed on December 17, 1941, just
                    10 days after the Japanese attack on Pearl Harbor. The group
                    had three squadrons assigned to carry out their mission: the
                    74th, 75th, and 76th Fighter Squadrons.
                    <div>
                      A particularly interesting note is that the aircraft
                      assigned to the group has the unique "Shark Teeth" nose
                      art. The Flying Tigers are the only Air Force unit
                      authorized to carry this distinctive and historical
                      aircraft marking.
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Flying%20Tiger%20Crest.gif",
                        alt: "Flying Tiger Crest",
                        title: "Flying Tiger Crest",
                        subtitle: "23rd Tactical Fighter Group",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Flying%20Tiger%20Crest.gif"
                      alt="Flying Tiger Crest"
                      className="relative w-full max-w-sm h-80 object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full max-w-sm h-80 rounded-lg"
                    />
                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    Flying Tiger Crest
                  </span>
                </div>
              </div>
            </div>

            {/* Dial Variants */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Two Production Batches
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Flying Tiger watches were produced in two batches:
                </p>
              </div>

              {/* Mk. 1 and Mk. 2 Dials */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-lg text-black mb-4">
                      The Mk. 1 Flying Tiger Dial possessing “U.S. Airforce”
                      printing and the “Flying Tiger logo"{" "}
                    </p>
                  </div>
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Tiger-Silvercrop.jpg",
                        alt: "Flying Tiger Mk. 2 Dial",
                        title: "Flying Tiger Mk. 2 Dial",
                        subtitle: "Second Batch without U.S. Airforce Text",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Tiger-Silvercrop.jpg"
                      alt="Flying Tiger Mk. 2 Dial"
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-64 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-lg text-black mb-4">
                      The Mk. 2 Flying Tiger Dial without “U.S. Airforce”
                      printing but still retaining the “Flying Tiger logo”{" "}
                    </p>
                  </div>
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Tiger-Mk.%202crop.jpg",
                        alt: "Flying Tiger Mk. 1 Dial",
                        title: "Flying Tiger Mk. 1 Dial",
                        subtitle: "First Batch with U.S. Airforce Printing",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Tiger-Mk. 2crop.jpg"
                      alt="Flying Tiger Mk. 1 Dial"
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-64 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Finishes */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Case Specifications
                </h2>
              </div>

              <div className="bg-gray-50 p-8 sm:p-12 rounded-lg border-l-4 border-black">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The casebacks of these watches were identical to that of the
                    baseline 7177, and the majority of these watches were
                    finished in either Sandblasted Steel, Black PVD, or NTS PVD.
                  </p>
                </div>
              </div>
            </div>

            {/* Group Photo */}
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

export default Reference7177DialFlyingTiger;
