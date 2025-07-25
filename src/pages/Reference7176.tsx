import React, { useState, useEffect } from "react";
import { Clock, Calendar, Settings, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";

const Reference7176 = () => {
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

  const references = [
    {
      id: 1,
      title: "7176",
      years: "1976-On",
      finishes: "Black PVD, Silver/Sablé, and Polished",
      caseback: "7176 Mk. 1 Caseback",
      rehaut: "Yellow Triangle",
      dial: "Civilian Dial",
      image:
        "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/Alan-7176-1crop.jpg",
    },
    {
      id: 2,
      title: "7176 Military",
      years: "1976-On",
      finishes: "Silver/Sablé, Grey PVD, and Green PVD",
      caseback: "7176 Mk. 1 Caseback",
      rehaut: "Yellow Triangle",
      dial: "Military Dial",
      image:
        "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/Alan-7176-Militarycrop.jpg",
    },
    {
      id: 3,
      title: "7176 D",
      years: "1976-On",
      finishes: "Black PVD, Silver/Sablé, and Cadet Grey PVD",
      caseback: "7176 D Caseback",
      rehaut: "Yellow Triangle and Tachymetre",
      dial: "Civilian Dial, Military Dial, and Blue by Orfina Dial",
      image:
        "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176D%20Front%20(wes)crop.jpg",
    },
    {
      id: 4,
      title: "7176 S",
      years: "1976-On",
      finishes: "Black PVD, Silver/Sablé, and NTS PVD",
      caseback: "7176 S Caseback",
      rehaut: "Tachymetre",
      dial: "Civilian Dial and Blue by Orfina Dial",
      image:
        "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176Scrop.jpg",
    },
  ];

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
            <span className="text-gray-600">References</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Reference 7176</span>
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
                <h1 className="font-light text-6xl md:text-8xl text-gray-900 mb-6 tracking-tight">
                  Reference{" "}
                  <span className="font-normal text-gray-700">7176</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  The reference 7176 entered production in circa 1976 and
                  continued onward. The new model (ref: 7176) came in a variety
                  of finishes including Black PVD, Silver/Sablé, Grey PVD and
                  Green PVD. The "upgraded" Lemania 5100 movement also featured
                  a 24-hour totalizer at 12 and a white central minutes hand
                  with a lollipop tip.
                </p> */}
              </div>
            </div>
          </div>
        </section>
        {/* Four Known References */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed text-center mb-10">
              <p>
                The reference 7176 entered production in circa 1976 and continued onward. The
                new model (ref: 7176) came in a variety of finishes including Black PVD,
                Silver/Sablé, Grey PVD and Green PVD.
              </p>
              <p>
                The "upgraded" Lemania 5100 movement also featured a 24-hour totalizer at 12
                and a white central minutes hand with a lollipop tip.
              </p>
            </div>
              
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                There Are Four Known References
              </h2>
              {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the four distinct references of the 7176, each with
                unique characteristics and specifications.
              </p> */}
            </div>

            {/* All References Displayed */}
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {references.map((ref, index) => (
                <div
                  key={ref.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                >
                  <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                        {ref.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12">
                    {/* Image Section */}
                    <div className="relative group lg:w-auto lg:flex-shrink-0">
                      <div
                        className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                        onClick={() =>
                          setFullScreenImage({
                            src: ref.image,
                            alt: ref.title,
                            title: ref.title,
                            subtitle: "Reference 7176",
                          })
                        }
                      >
                        <div className="w-full max-w-md mx-auto lg:mx-0">
                          <ImageWithLoader
                            src={ref.image}
                            alt={ref.title}
                            className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            skeletonClassName="w-full max-w-md h-80 sm:h-96 lg:h-[450px] rounded-lg"
                          />
                        </div>
                        {/* Click indicator */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>

                      {/* Image Title Below */}
                      <div className="mt-4 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                          {ref.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 lg:flex-1">
                      {/* Specifications Table */}
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Calendar className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Production Years
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {ref.years}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Case
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                7176
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Layers className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Finishes
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {ref.finishes}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Caseback
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {ref.caseback}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Rehaut
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {ref.rehaut}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Clock className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Dial
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {ref.dial}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-Pages Navigation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Explore Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div 
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176s-PVD.jpg",
                        alt: "Case & Finishes",
                        title: "Case & Finishes",
                        subtitle: "Reference 7176",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176s-PVD.jpg"
                      alt="Case & Finishes"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link to="/references/7176/case-finishes" className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Case & Finishes
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div 
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176Button-Caseback.jpg",
                        alt: "Caseback",
                        title: "Caseback",
                        subtitle: "Reference 7176",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176Button-Caseback.jpg"
                      alt="Caseback"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link to="/references/7176/caseback" className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Caseback
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div 
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/TACHYMETRE%20Rehaut%20-%20Close-Up.jpg",
                        alt: "Rehaut Variations",
                        title: "Rehaut Variations",
                        subtitle: "Reference 7176",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/TACHYMETRE%20Rehaut%20-%20Close-Up.jpg"
                      alt="Rehaut Variations"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link to="/references/7176/rehaut" className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Rehaut Variations
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div 
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176Button-Dial.jpg",
                        alt: "Dial Variations",
                        title: "Dial Variations",
                        subtitle: "Reference 7176",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/7176%20Photos/7176Button-Dial.jpg"
                      alt="Dial Variations"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link to="/references/7176/dial" className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Dial Variations
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 bg-gray-900">
                <h3 className="text-2xl font-light text-white">
                  Reference 7176 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Reference Number
                      </span>
                      <span className="text-gray-900">7176</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Production Years
                      </span>
                      <span className="text-gray-900">1976-1983</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Case Material
                      </span>
                      <span className="text-gray-900">Stainless Steel</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Water Resistance
                      </span>
                      <span className="text-gray-900">100m</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Movement
                      </span>
                      <span className="text-gray-900">Lemania 5100</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Jewels</span>
                      <span className="text-gray-900">17</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Functions
                      </span>
                      <span className="text-gray-900">
                        Hours, Minutes, Seconds, Chronograph, 24h
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Serial Range
                      </span>
                      <span className="text-gray-900">1000–3000 (approx.)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
      </div>

      {/* Back to References */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to References
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

export default Reference7176;
