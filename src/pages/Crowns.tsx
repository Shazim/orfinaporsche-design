import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import ImageSlider from "@/components/ImageSlider";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const Crowns = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
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
            <span className="text-black font-medium">Crowns</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Crowns
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              There are a variety of crowns found across the Orfina Porsche
              Design references
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* 7750 Crown Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="7750 Crown"
                  variant="numbered"
                  number={1}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    General Notes:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The 7750 is 5.4mm in diameter.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Exists in two versions, with different counts of teeth.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crown is marked with the Orfina Flame logo or PD
                        logo.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crowns on 7750 units are not screw-downs, their
                        ability to maintain water resistance comes from an
                        integrated gasket built into the crown creating a seal.
                        These gaskets deteriorate over time, requiring
                        replacement. They have been out of production for many
                        years, and suitable replacements that would retain water
                        resistance are not available. For this reason, these
                        watches should not be considered water-resistant today
                        and should be cared for accordingly. Also, original-size
                        crowns for these units with the Orfina logo are not
                        available, only with PD logos.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        As mentioned previously, Orfina 7750 [FLAT-FACE -
                        Service] - a.k.a Mk. 3 a.k.a Revised by Orfina Swiss
                        S.A. is offered by Orfina Swiss SA as a replacement to
                        original damaged or otherwise unusable cases as a modern
                        replacement. It uses a larger orfina signed crown and
                        restores the water-resistant rating of the watch.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-12">
                {/* Placeholder images for crown variants */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                    <div
                      className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/Crown/7750-OrfinaCrown.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/Crown/7750-OrfinaCrown.jpg"
                        alt="Group BUND Straps"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Orfina Crown (Found on Gen. 1 7750s)
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                    <ImageSlider
                      images={[
                        {
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/Crown/7750%20Crown.jpg",
                          alt: "PD Crown (Found on Gen. 2 & 3 7750s)",
                          title: "PD Crown (Found on Gen. 2 & 3 7750s)",
                          subtitle: "PD Crown (Found on Gen. 2 & 3 7750s)",
                        },
                        {
                          src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/Crown/7750-Mk.3-Case-2crop.jpg",
                          alt: "Orfina 7750 [FLAT-FACE - Service]",
                          title: "Orfina 7750 [FLAT-FACE - Service]",
                          subtitle: "Orfina 7750 [FLAT-FACE - Service]",
                        },
                      ]}
                      onImageClick={(imageData) =>
                        handleImageClick(imageData.src)
                      }
                      className="shadow-lg rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 cursor-zoom-in"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* 7176 Non Screw-Down Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="7176 Non Screw-Down"
                  variant="numbered"
                  number={2}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    General Notes:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Found on: 7176
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        ___ mm diameter x ___ mm height crown.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crown is marked with the PD Logo.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Finished to match the case.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                  <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-gray-500 text-center">
                      Picture
                      <br />
                      To Be Updated
                    </span>
                  </div>
                  <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                    7176 Non Screw-Down Crown
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* 7176 & 7177 Screw-Down Crown Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="7176 & 7177 Screw-Down Crown"
                  variant="numbered"
                  number={3}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    General Notes:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Found on: 7176, 7176 Military, 7176 D, 7176 S, 7177
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        ___ mm diameter x ___ mm height crown.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Water-resistant screw down crown.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crown is marked with the PD Logo or Orfina Logo and
                        is finished to match the case.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Note: Orfina flame logo screw down crowns are SERVICE
                        CROWNS from Orfina Schifferle. They were swapped in the
                        course of a service and were produced by Orfina because
                        they ran out of PD crowns and were not allowed to
                        re-produce PD-crowns because the contract with PD had
                        expired. Therefore Orfina flame logo crowns can be found
                        on Orfina-serviced Lemania 5100 watches, civil and
                        military!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                  <div
                    className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                    onClick={() =>
                      handleImageClick(
                        "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/Crown/7177-SilverCase-2crop.jpg"
                      )
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/Crown/7177-SilverCase-2crop.jpg"
                      alt="Group BUND Straps"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                    7176 & 7177 Screw-Down Crown
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseFullScreen}
        >
          <div className="max-w-full max-h-full">
            <img
              src={fullScreenImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            onClick={handleCloseFullScreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Crowns;
