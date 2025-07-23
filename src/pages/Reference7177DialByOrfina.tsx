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

const Reference7177DialByOrfina = () => {
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
            <span className="text-black font-medium">By Orfina</span>
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
              By Orfina Dial
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                The "by Orfina" stamped military dials are identical to the
                baseline configuration but bear an additional line of text "by
                Orfina" at 4 o'clock.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Service Dial Overview */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Service Dial Configuration
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <h3 className="text-lg font-semibold text-black mb-4">
                      Key Characteristics:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Base Design:</strong> Identical to baseline
                          configuration
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Additional Text:</strong> "by Orfina" at 4
                          o'clock
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Standard Elements:</strong> "MILITARY",
                          "PORSCHE DESIGN", "3H logo"
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
                        src: "/images/7177 Photos/7177-ByOrfinacrop.jpg",
                        alt: "By Orfina Service Dial",
                        title: "By Orfina Service Dial",
                        subtitle: "Last Orfina-Branded Dial",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="/images/7177 Photos/7177-ByOrfinacrop.jpg"
                      alt="By Orfina Service Dial"
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
                    By Orfina Service Dial
                  </span>
                </div>
              </div>
            </div>

            {/* Service Dial Purpose */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Service Replacement Purpose
                </h2>
              </div>

              <div className="bg-gray-50 p-8 sm:p-12 rounded-lg border-l-4 border-black">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    These dials are presumed to be service dials, as evident by
                    the vast availability of loose dials. This suggests they
                    were manufactured as replacement parts for military watches
                    requiring maintenance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Service Context
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Replacement for damaged original dials</li>
                        <li>• Military watch refurbishment program</li>
                        <li>• Orfina's continued service support</li>
                        <li>• Post-production maintenance initiative</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Evidence of Service Use
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Large quantity of loose dial availability</li>
                        <li>• Identical construction to baseline dials</li>
                        <li>• Service-oriented production run</li>
                        <li>• No complete watch examples documented</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Orfina Branding */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-orange-50 p-8 sm:p-12 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    🏁
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                    End of an Era
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The "by Orfina" service dials represent the final chapter in
                    Orfina's production of Porsche Design chronographs, making
                    them historically significant despite their service-oriented
                    purpose.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h3 className="text-lg font-semibold text-black mb-3">
                        Historical Timeline
                      </h3>
                      <div className="space-y-3">
                        <div className="border-l-2 border-orange-300 pl-4">
                          <p className="text-sm font-semibold text-gray-800">
                            Early Production
                          </p>
                          <p className="text-xs text-gray-600">
                            Original 7177 baseline dials
                          </p>
                        </div>
                        <div className="border-l-2 border-orange-300 pl-4">
                          <p className="text-sm font-semibold text-gray-800">
                            Service Period
                          </p>
                          <p className="text-xs text-gray-600">
                            "By Orfina" replacement dials
                          </p>
                        </div>
                        <div className="border-l-2 border-orange-300 pl-4">
                          <p className="text-sm font-semibold text-gray-800">
                            End of Era
                          </p>
                          <p className="text-xs text-gray-600">
                            Last Orfina-branded chronographs
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-orange-200">
                      <h3 className="text-lg font-semibold text-black mb-3">
                        Collector Significance
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        As the final expression of Orfina's involvement in
                        Porsche Design chronographs, these service dials hold
                        special meaning for collectors interested in the
                        complete history of the collaboration.
                      </p>
                      <div className="bg-orange-50 p-3 rounded border">
                        <p className="text-xs text-orange-800 font-medium">
                          Final Orfina branding on any Porsche Design
                          chronograph dial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Dial Comparison */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Baseline vs By Orfina
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The only difference between the baseline and "by Orfina" dials
                  is the additional text marking, making identification
                  straightforward for collectors.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Baseline Dial Elements
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        "MILITARY" at 12 o'clock
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        "PORSCHE DESIGN" text
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        "3H" logo marking
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        Standard subdial layout
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    By Orfina Additions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        All baseline elements
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-semibold">
                        "by Orfina" at 4 o'clock
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">
                        No other modifications
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">
                        Identical construction quality
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Availability and Market */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Market Availability
                </h2>
              </div>

              <div className="bg-gray-50 p-8 sm:p-12 rounded-lg border-l-4 border-black">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The vast availability of loose "by Orfina" dials in the
                    collector market provides strong evidence for their service
                    replacement purpose rather than original watch production.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Market Presence
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Frequently available loose</li>
                        <li>• Various condition grades</li>
                        <li>• Consistent pricing patterns</li>
                        <li>• Multiple dealer sources</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Collector Interest
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Historical significance</li>
                        <li>• Last Orfina branding</li>
                        <li>• Service replacement story</li>
                        <li>• Restoration project use</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-3">
                        Restoration Value
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Period-correct replacement</li>
                        <li>• Maintains historical accuracy</li>
                        <li>• Orfina provenance retained</li>
                        <li>• Authentic service practice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Collector Information */}
            {/* <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-900">
              <div className="bg-yellow-50 p-8 sm:p-12 rounded-lg border-l-4 border-yellow-400">
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
                  Collector Notes
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Authentication
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Authentic "by Orfina" service dials can be identified by
                      the additional "by Orfina" text at 4 o'clock while
                      maintaining all other baseline dial characteristics. The
                      quality and printing should match original Orfina
                      production standards.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Historical Value
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      As the final Orfina-branded Porsche Design chronograph
                      dials, these pieces represent the end of a significant
                      partnership in horology. Their service replacement purpose
                      adds another layer of historical authenticity to military
                      watch restoration projects.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Restoration Use
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      These service dials provide an excellent option for
                      restoring military 7177 watches with damaged original
                      dials, maintaining period-correct Orfina branding while
                      following authentic service practices of the era.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Investment Perspective
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      While currently available in the market, the historical
                      significance as the last Orfina-branded Porsche Design
                      chronograph dials may drive future collector interest,
                      particularly as examples become increasingly used in
                      restoration projects.
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

export default Reference7177DialByOrfina;
