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

const Reference7177DialBUND = () => {
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
            <span className="text-black font-medium">BUND</span>
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
              BUND Dial
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                The BUND variant is short for "Bundeswehr", the German Federal
                Defense Force to whom they were issued. UND examples are seen in
                a variety of finishes and were always issued on a BUND-style
                strap.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* BUND Overview */}

            {/* NSN Variations */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Caseback Markings{" "}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded border">
                        <div className="font-mono text-sm  text-black">
                          On these examples, the caseback does have "BUND" and
                          an appropriate NSN engraving.
                        </div>
                        <div className="font-mono text-sm  text-black">
                          <strong> Known NSNs:</strong> Two known NSNs are found
                          on the BUND variant: the initial NSN is
                          6645-12-182-1763, and the second is 6645-12-194-8642.{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Double-Struck Examples
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Some BUND examples are "double-struck," meaning the
                      initial NSN is crossed out, and the second NSN is added.
                      This was presumably done at some maintenance event during
                      the watch’s lifetime. BUND variants also do not have the
                      "7177" ref# engraving on the caseback.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177%20BUND%20Singe-Struck%20Caseback.jpg",
                        alt: "BUND Single-Struck Caseback",
                        title: "BUND Single-Struck Caseback",
                        subtitle: "Initial NSN 6645-12-182-1763",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177%20BUND%20Singe-Struck%20Caseback.jpg"
                      alt="BUND Single-Struck Caseback"
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-64 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    Single-Struck Caseback
                  </p>

                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Double-Strike-Bundcrop.jpg",
                        alt: "BUND Double-Struck Caseback",
                        title: "BUND Double-Struck Caseback",
                        subtitle: "Original NSN Crossed Out, New NSN Added",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/Double-Strike-Bundcrop.jpg"
                      alt="BUND Double-Struck Caseback"
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-64 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    Double-Struck Caseback
                  </p>
                </div>
              </div>
            </div>

            {/* Service Dials */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Dial Variations{" "}
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  BUND examples have been found to be produced with both the
                  Baseline Mk. 1 Dial and Baseline Mk. 2 Dials. The Baseline Mk.
                  2 Dials Dials lacked “Porsche Design” text, which was replaced
                  with “CHRONOGRAPH” text and these examples bear double-struck
                  casebacks. n addition, some BUND examples also sent in for
                  service, had their dials replaced with Mk 2. Service Dials.
                  These used early Luminova and lacked “Porsche Design” text,
                  again replaced by “CHRONOGRAPH” text, but also lacked the “3H”
                  marking because the dials did not use tritium. Luminova dial
                  examples will also bear double-struck casebacks.
                </p>
              </div>

              {/* Service Dial Types */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-BUNDcrop.jpg",
                        alt: "BUND with Baseline Dial",
                        title: "BUND with Baseline Dial",
                        subtitle: "Original Configuration",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-BUNDcrop.jpg"
                      alt="BUND with Baseline Dial"
                      className="w-full h-56 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-56 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-black mb-2">
                      Baseline Dial
                    </h4>
                    <p className="text-sm text-gray-600">
                      Original factory configuration
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-MK2-ServiceDialcrop.jpg",
                        alt: "Mk. 1 Service Dial",
                        title: "Mk. 1 Service Dial",
                        subtitle: "Porsche Design Replaced with CHRONOGRAPH",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-MK2-ServiceDialcrop.jpg"
                      alt="Mk. 1 Service Dial"
                      className="w-full h-56 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-56 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-black mb-2">
                      Mk. 1 Service Dial
                    </h4>
                    <p className="text-sm text-gray-600">
                      "PORSCHE DESIGN" replaced with "CHRONOGRAPH"
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-ByOrfinacrop.jpg",
                        alt: "Mk. 2 Service Dial",
                        title: "Mk. 2 Service Dial",
                        subtitle: "Luminova, No 3H Marking",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-ByOrfinacrop.jpg"
                      alt="Mk. 2 Service Dial"
                      className="w-full h-56 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full h-56 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-black mb-2">
                      Mk. 2 Service Dial
                    </h4>
                    <p className="text-sm text-gray-600">
                      Early Luminova, lacks "3H" marking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BUND Box */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Accessories{" "}
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The BUND examples were also issued in a box that bore the
                  initial NSN 6645-12-182-1763.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setFullScreenImage({
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Bund-Box-2crop.jpg",
                      alt: "BUND Box 1",
                      title: "BUND Box",
                      subtitle: "NSN 6645-12-182-1763",
                    })
                  }
                >
                  <ImageWithLoader
                    src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Bund-Box-2crop.jpg"
                    alt="BUND Box 1"
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    skeletonClassName="w-full h-64 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      Click to zoom
                    </div>
                  </div>
                </div>

                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setFullScreenImage({
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Bund-Box-3crop.jpg",
                      alt: "BUND Box 2",
                      title: "BUND Box Interior",
                      subtitle: "Military Issue Packaging",
                    })
                  }
                >
                  <ImageWithLoader
                    src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7177%20Photos/7177-Bund-Box-3crop.jpg"
                    alt="BUND Box 2"
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

export default Reference7177DialBUND;
