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

const DateWheels = () => {
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
            <span className="text-black font-medium">Date Wheels</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Date Wheels
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Three Known Sets Across All References
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are three known sets of date wheels across all 7750, 7176,
              and 7177s, each with distinct characteristics and found on
              specific reference models.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Type 1 - Straight Down Leg Hooked 7 */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Type 1 - Straight Down Leg Hooked 7
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <div className="space-y-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> All 7750s
                      </p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        This date wheel features a distinctive straight vertical
                        leg on the number 7 with a hook at the top, making it
                        easily identifiable on 7750 references.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/Date Wheels/7750-7-Type1.jpg",
                        alt: "Type 1 - Straight Down Leg Hooked 7",
                        title: "Type 1 - Straight Down Leg Hooked 7",
                        subtitle: "Found on All 7750s",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="/images/Date Wheels/7750-7-Type1.jpg"
                      alt="Type 1 - Straight Down Leg Hooked 7"
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
                    Type 1 - Straight Down Leg Hooked 7
                  </span>
                </div>
              </div>
            </div>

            {/* Type 2 - Curve Hooked 7 */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/Date Wheels/7177-7-Type2.jpg",
                        alt: "Type 2 - Curve Hooked 7",
                        title: "Type 2 - Curve Hooked 7",
                        subtitle: "Found on 7176 and 7177 References",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="/images/Date Wheels/7177-7-Type2.jpg"
                      alt="Type 2 - Curve Hooked 7"
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
                    Type 2 - Curve Hooked 7
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Type 2 - Curve Hooked 7
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <div className="space-y-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> Across 7176 References, 7177
                      </p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        This variation features a curved leg on the number 7
                        with a hook, distinguishing it from the straight-leg
                        Type 1 version. This design evolution coincided with the
                        transition to the 7176 and 7177 reference series.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Type 3 - Curve Non-hooked 7 */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Type 3 - Curve Non-hooked 7
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <div className="space-y-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> Across 7176 References, 7177
                      </p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        The final evolution features a curved leg on the number
                        7 without the hook, creating a smoother, more modern
                        appearance. This type is also found across the 7176 and
                        7177 series.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/Date Wheels/7177-7-Type3.jpg",
                        alt: "Type 3 - Curve Non-hooked 7",
                        title: "Type 3 - Curve Non-hooked 7",
                        subtitle: "Found on 7176 and 7177 References",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="/images/Date Wheels/7177-7-Type3.jpg"
                      alt="Type 3 - Curve Non-hooked 7"
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
                    Type 3 - Curve Non-hooked 7
                  </span>
                </div>
              </div>
            </div>

            {/* Day/Date Wheels Languages */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="bg-blue-50 p-8 sm:p-12 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                    Day/Date Wheels Languages
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  Across the entire Orfina Porsche Design Chronograph 1
                  production, various languages are found on the Day/Date
                  wheels. The days of the week for the respective languages are:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      language: "English",
                      days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                    },
                    {
                      language: "German",
                      days: ["MON", "DIE", "MIT", "DON", "FRE", "SAM", "SON"],
                    },
                    {
                      language: "Spanish",
                      days: ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"],
                    },
                    {
                      language: "Italian",
                      days: ["LUN", "MAR", "MER", "GIO", "VEN", "SAB", "DOM"],
                    },
                    {
                      language: "French",
                      days: ["(Possibly available)"],
                    },
                    {
                      language: "Dutch",
                      days: ["(Possibly available)"],
                    },
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg border border-blue-200"
                    >
                      <h3 className="text-lg font-semibold text-black mb-3">
                        {lang.language}
                      </h3>
                      <div className="space-y-1">
                        {lang.days.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className="text-sm text-gray-700 font-mono"
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reference-specific Notes */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="bg-yellow-50 p-8 sm:p-12 rounded-lg border-l-4 border-yellow-400">
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
                  Special Notes
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      7177 Olive Green PVD
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This variant should always bear an Italian Day Disk
                      (Easily identifiable by the word GIO - which stands for
                      Thursday in Italian).
                    </p>
                    <div
                      className="relative group cursor-pointer inline-block"
                      onClick={() =>
                        setFullScreenImage({
                          src: "/images/Date Wheels/7177-Gio.jpg",
                          alt: "7177 Italian Day Disk",
                          title: "7177 Italian Day Disk",
                          subtitle: "GIO = Thursday in Italian",
                        })
                      }
                    >
                      <ImageWithLoader
                        src="/images/Date Wheels/7177-Gio.jpg"
                        alt="7177 Italian Day Disk"
                        className="w-32 h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-32 h-32 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      7177 NATO Dial
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The 7177 NATO Dial is believed to be the only variant of
                      the 7177 reference to feature a white Day/Date wheel - a
                      characteristic observed on select examples of this model.
                    </p>
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
            to="/"
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
            Back to Home
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

export default DateWheels;
