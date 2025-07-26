import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import { useEffect, useState } from "react";

const Reference7177Caseback = () => {
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
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              to="/references/7177"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reference 7177
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Caseback</span>
          </nav>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center mb-8">
                <h1 className="font-light text-5xl md:text-7xl text-gray-900 mb-6 tracking-tight">
                  Reference{" "}
                  <span className="font-normal text-gray-700">7177</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 font-light">
                  Caseback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The caseback engravings on the 7177 differ entirely from those of the 7176 variants.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    For the center of the caseback, the 7177 swapped a large Porsche Design logo for a smaller one, added Orfina to the text, and had "Military Chronograph 7177 MOD. DEP. INT." stamped on the back.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    For the outer engraving, the text differed as well:
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                    <p className="text-sm font-semibold text-gray-900 mb-2">1. 7176S Outer Engraving:</p>
                    <p className="text-sm text-gray-700 font-mono">
                      "7176 S CHRONOGRAPH AUTOMATIC WATERRESISTANT TESTED 10 ATM SHOCKPROTECTED STAINLESS STEEL SWISS MADE"
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                    <p className="text-sm font-semibold text-gray-900 mb-2">2. 7177 Outer Engraving:</p>
                    <p className="text-sm text-gray-700 font-mono">
                      "WATERRESISTANT TESTED 10 ATM AUTOMATIC SHOCKPROTECTED STAINLESS STEEL SWISS MADE"
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    All 7177 variants also include a stamped serial number, which is found in groupings for particular dial configurations. Specifically for the Venezuelan, UAE, and BUND-issued variants, there are unique caseback engravings, which will be discussed in their respective headings.
                  </p>
                </div>
              </div>

              {/* Images Arranged Vertically */}
              <div className="space-y-12">
                {/* First image */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center max-w-lg w-full">
                    <div
                      className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg w-full"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7176s-caseback.jpg",
                          alt: "7176S Caseback",
                          title: "7176S Caseback",
                          subtitle: "Reference 7176S",
                        })
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7176s-caseback.jpg"
                        alt="7176S Caseback"
                        className="w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                      />
                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-gray-600 font-medium mt-4 text-base sm:text-lg">7176S Caseback</p>
                  </div>
                </div>

                {/* Second image */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center max-w-lg w-full">
                    <div
                      className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg w-full"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-SilverCase-3crop.jpg",
                          alt: "7177 Caseback",
                          title: "7177 Caseback",
                          subtitle: "Reference 7177",
                        })
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-SilverCase-3crop.jpg"
                        alt="7177 Caseback"
                        className="w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                      />
                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-gray-600 font-medium mt-4 text-base sm:text-lg">7177 Caseback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Back Navigation */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/references/7177"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Reference 7177
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

export default Reference7177Caseback;
