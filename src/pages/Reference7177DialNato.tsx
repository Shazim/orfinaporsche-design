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

const Reference7177DialNato = () => {
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
            <span className="text-black font-medium">NATO</span>
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
              NATO Dial
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                The 7177 NATO variant was reportedly issued to individuals at
                NATO headquarters in Brussels and features a Baseline dial, with
                the addition of “NATO” at 4 O’Clock. The NATO variant was always
                coated in Cadet Grey PVD and came on a matching grey BUND-style
                leather strap. A noteworthy detail is that the 7177 NATO Dial is
                believed to be the only variant of the 7177 reference to feature
                a factory white day and date wheel - a characteristic observed
                on select examples of this model.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* NATO Specifications */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      NATO Specifications
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <h3 className="text-lg font-semibold text-black mb-4">
                      Key Features:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Dial:</strong> Baseline configuration with
                          "NATO" at 4 O'Clock
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Finish:</strong> Always coated in Cadet Grey
                          PVD
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Strap:</strong> Matching grey BUND-style
                          leather strap
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Issue Location:</strong> NATO headquarters in
                          Brussels
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
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Nato-Magazinecrop.jpg",
                        alt: "NATO Dial",
                        title: "NATO Dial",
                        subtitle: "Baseline with NATO at 4 O'Clock",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Nato-Magazinecrop.jpg"
                      alt="NATO Dial"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
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
                    7177 Nato Dial{" "}
                  </span>
                </div>
              </div>
            </div>

            {/* BUND Strap Configuration */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Nato-Magazinecrop.jpg",
                        alt: "NATO BUND Strap",
                        title: "NATO BUND Strap",
                        subtitle: "Matching Grey BUND-style Leather",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Nato-Magazinecrop.jpg"
                      alt="NATO BUND Strap"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
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
                    7177 Nato Magazine Feature{" "}
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Complete Configuration
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      The NATO variant was always coated in Cadet Grey PVD and
                      came on a matching grey BUND-style leather strap, creating
                      a cohesive military appearance.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-2">
                        Standardized Package:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cadet Grey PVD case finish</li>
                        <li>• NATO dial marking at 4 O'Clock</li>
                        <li>• Matching grey BUND leather strap</li>
                        <li>• Standard 7177 caseback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unique Day/Date Wheel */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-blue-50 p-8 sm:p-12 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    ⚠
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                    Unique Feature
                  </h2>
                </div>

                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    White Day/Date Wheel
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A noteworthy detail is that the 7177 NATO Dial is believed
                    to be the only variant of the 7177 reference to feature a
                    factory white day and date wheel - a characteristic observed
                    on select examples of this model. This unique feature makes
                    NATO variants easily distinguishable from other 7177 models.
                  </p>
                </div>
              </div>
            </div> */}

            {/* NATO Headquarters Context */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  NATO Headquarters Context
                </h2>
              </div>

              <div className="bg-gray-50 p-8 sm:p-12 rounded-lg border-l-4 border-black">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    These watches were reportedly issued to individuals at NATO
                    headquarters in Brussels, representing the multinational
                    defense alliance's adoption of precision Swiss chronographs
                    for military personnel.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        NATO Alliance
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The North Atlantic Treaty Organization, established in
                        1949, represents a collective defense agreement among
                        member nations. The issuance of these specialized
                        chronographs demonstrates the organization's attention
                        to precision timing equipment.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Brussels Headquarters
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        NATO's headquarters in Brussels serves as the political
                        and administrative center of the alliance. Personnel
                        stationed there would have required reliable timing
                        instruments for coordinating multinational military
                        operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collector Information */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="bg-yellow-50 p-8 sm:p-12 rounded-lg border-l-4 border-yellow-400">
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
                  Collector Notes
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Identification
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      NATO variants can be identified by the "NATO" marking at 4
                      O'Clock, the consistent Cadet Grey PVD finish, and the
                      unique white day/date wheel configuration that
                      distinguishes them from all other 7177 variants.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Rarity
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      As watches issued to a specific NATO headquarters
                      location, these chronographs represent a limited
                      production run with significant historical context, making
                      them highly sought after by collectors of military
                      timepieces.
                    </p>
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

export default Reference7177DialNato;
