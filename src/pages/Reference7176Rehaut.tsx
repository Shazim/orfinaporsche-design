import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";

const Reference7176Rehaut = () => {
  const [yellowTriangleImageIndex, setYellowTriangleImageIndex] = useState(0);
  const [tachymetreImageIndex, setTachymetreImageIndex] = useState(0);

  const yellowTriangleImages = [
    {
      src: "/images/7176-photos/7176 Military.png",
      alt: "Yellow Triangle Rehaut",
      caption: "Yellow Triangle Rehaut",
    },
  ];

  const tachymetreImages = [
    {
      src: "/images/7176-photos/7176Scrop.jpg",
      alt: "TACHYMETRE Rehaut",
      caption: "TACHYMETRE Rehaut",
    },
    {
      src: "/images/7176-photos/TACHYMETRE Rehaut - Close-Up.jpg",
      alt: "TACHYMETRE Rehaut Close-Up",
      caption: "TACHYMETRE Rehaut Close-Up",
    },
  ];

  const nextYellowTriangleImage = () => {
    setYellowTriangleImageIndex(
      (prev) => (prev + 1) % yellowTriangleImages.length
    );
  };

  const prevYellowTriangleImage = () => {
    setYellowTriangleImageIndex(
      (prev) =>
        (prev - 1 + yellowTriangleImages.length) % yellowTriangleImages.length
    );
  };

  const nextTachymetreImage = () => {
    setTachymetreImageIndex((prev) => (prev + 1) % tachymetreImages.length);
  };

  const prevTachymetreImage = () => {
    setTachymetreImageIndex(
      (prev) => (prev - 1 + tachymetreImages.length) % tachymetreImages.length
    );
  };

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
            <span className="text-black font-medium">Rehaut Variations</span>
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
              Rehaut Variations
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are two variations of Rehaut found across the 7176 range.
            </p>
          </div>

          {/* Rehaut Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* Yellow Triangle Rehaut */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Yellow Triangle Rehaut
                    </h2>
                  </div>

                  <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      The Yellow Triangle rehaut features a Yellow Triangle
                      Rehaut with the word "TACHYMETER" printed between 12 and 2
                      O'clock
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Found On:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176</strong>
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176 Military</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src={yellowTriangleImages[yellowTriangleImageIndex].src}
                        alt={yellowTriangleImages[yellowTriangleImageIndex].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {yellowTriangleImages.length > 1 && (
                      <>
                        <button
                          onClick={prevYellowTriangleImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
                        >
                          <ChevronLeft className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                          onClick={nextYellowTriangleImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {yellowTriangleImages.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                        {yellowTriangleImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setYellowTriangleImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === yellowTriangleImageIndex
                                ? "bg-yellow-500"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    {yellowTriangleImages[yellowTriangleImageIndex].caption}
                  </span>
                </div>
              </div>
            </div>

            {/* TACHYMETRE Rehaut */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src={tachymetreImages[tachymetreImageIndex].src}
                        alt={tachymetreImages[tachymetreImageIndex].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {tachymetreImages.length > 1 && (
                      <>
                        <button
                          onClick={prevTachymetreImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
                        >
                          <ChevronLeft className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                          onClick={nextTachymetreImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {tachymetreImages.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                        {tachymetreImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setTachymetreImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === tachymetreImageIndex
                                ? "bg-black"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    {tachymetreImages[tachymetreImageIndex].caption}
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      TACHYMETRE Rehaut
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      The TACHYMETRE rehaut removes the triangle at twelve
                      o'clock, possesses an overall thicker font, and the word
                      "TACHYMETRE" is printed between 12 and 2 O'clock.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Found On:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176 D</strong>
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176 S</strong>
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
                Rehaut Evolution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Early Production
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    Yellow Triangle Rehaut found on original 7176 and 7176
                    Military models, featuring distinctive yellow triangle
                    marker and standard typography.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Later Production
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    TACHYMETRE Rehaut on 7176 D and 7176 S models, with cleaner
                    design, enhanced typography, and removal of the triangle
                    marker.
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

export default Reference7176Rehaut;
