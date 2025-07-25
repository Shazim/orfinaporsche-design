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

const Reference7177DialRoyalNavy = () => {
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
            <span className="text-black font-medium">Royal Navy</span>
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
              Royal Navy Dial
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Two Debated Origins */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Two Debated Origins
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          <strong>Theory 1: Quasi-Issued</strong> - the first is that these are quasi-issued and were not issued to NATO stock, as they lack the traditional caseback broad arrow marking and any typical MOD markings.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          <strong>Theory 2: Issued</strong> - the other theory is that they were, in fact, issued to NATO stock but only a small number for evaluation by the Royal Navy - all of which were marked and issued with a NATO stock code on their caseback.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Royal Navy Bracelet Images */}
                <div className="space-y-8">
                  {/* First two bracelet images side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Bracelet Image */}
                    <div className="flex flex-col items-center">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Royal%20Navy%20Bracelet%20-1.png",
                            alt: "Royal Navy Bracelet View 1",
                            title: "Royal Navy Bracelet",
                            subtitle: "Standard Configuration",
                          })
                        }
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <ImageWithLoader
                          src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Royal%20Navy%20Bracelet%20-1.png"
                          alt="Royal Navy Bracelet View 1"
                          className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-64 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>
                      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                        7177 Royal Navy Bracelet
                      </span>
                    </div>

                    {/* Second Bracelet Image */}
                    <div className="flex flex-col items-center">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Royal%20Navy%20Bracelet%20- 2.png",
                            alt: "Royal Navy Bracelet View 2",
                            title: "Royal Navy Bracelet",
                            subtitle: "Detailed View",
                          })
                        }
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <ImageWithLoader
                          src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Royal%20Navy%20Bracelet%20- 2.png"
                          alt="Royal Navy Bracelet View 2"
                          className="relative w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-64 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>
                      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                        7177 Royal Navy Bracelet
                      </span>
                    </div>
                  </div>

                  {/* Third bracelet image centered below */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Royal Navy Bracelet - 3.png",
                            alt: "Royal Navy Bracelet View 3",
                            title: "Royal Navy Bracelet",
                            subtitle: "Complete Set",
                          })
                        }
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <ImageWithLoader
                          src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Royal Navy Bracelet - 3.png"
                          alt="Royal Navy Bracelet View 3"
                          className="relative w-full max-w-sm h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full max-w-sm h-64 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>
                      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                        7177 Royal Navy Bracelet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Notes */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Key Notes
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          The dial of this variant bears the inscription "Royal Navy" below the PORSCHE DESIGN text at 3 o'clock.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg leading-relaxed">
                          It is believed that most, if not all, were issued on the following style bracelet and have a sandblasted steel finish. However, examples have been seen in an NTS PVD case.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Royal Navy Dial Image */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-RoyalNavy-NTScrop.jpg",
                          alt: "Royal Navy Dial",
                          title: "Royal Navy Dial",
                          subtitle: "Inscription below PORSCHE DESIGN text",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-RoyalNavy-NTScrop.jpg"
                        alt="Royal Navy Dial"
                        className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full max-w-sm h-80 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7177 Royal Navy Dial
                    </span>
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

export default Reference7177DialRoyalNavy;
