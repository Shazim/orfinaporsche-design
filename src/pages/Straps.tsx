import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import ImageSlider from "@/components/ImageSlider";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const Straps = () => {
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
            <span className="text-black font-medium">BUND Straps</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              BUND Straps
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Three Known Versions of Military BUND Straps
            </p>
          </div>

          {/* Overview */}

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Type 1 (OG) Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Type 1 (OG)"
                  variant="numbered"
                  number={1}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        These bund straps were initially delivered with 7177s.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        They were produced in three colors: Black, Cadet Grey,
                        and Green.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        They have a straight middle shape, no NSN, and a curved
                        end.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        These were unique to Porsche Design.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Color Variants */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Color Variants:
                  </h3>

                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                      <p className="font-semibold text-gray-900 mb-2">
                        Green BUND
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                      <p className="font-semibold text-gray-900 mb-2">
                        Black BUND
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                      <p className="font-semibold text-gray-900 mb-2">
                        Cadet Grey BUND
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {/* Group BUND Photo */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                    <div
                      className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Groupcrop.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Groupcrop.jpg"
                        alt="Group BUND Straps"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Group BUND Photo
                    </h4>
                  </div>
                </div>

                {/* Green BUND Photos Slider */}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                <ImageSlider
                  images={[
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Green-Bundcrop.jpg",
                      alt: "Green BUND Strap",
                      title: "Green BUND Strap",
                      subtitle: "Type 1 (OG) Green BUND",
                    },
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Green-Loosecrop.jpg",
                      alt: "Green BUND Strap",
                      title: "Green BUND Strap",
                      subtitle: "Type 1 (OG) Green BUND",
                    },
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Green-BackLoosecrop.jpg",
                      alt: "Green BUND Strap",
                      title: "Green BUND Strap",
                      subtitle: "Type 1 (OG) Green BUND",
                    },
                  ]}
                  onImageClick={(imageData) => handleImageClick(imageData.src)}
                />
              </div>
              <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                <ImageSlider
                  images={[
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Black-BUNDcrop.jpg",
                      alt: "Black BUND Strap",
                      title: "Black BUND Strap",
                      subtitle: "Type 1 (OG) Black BUND",
                    },
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Black-Loosecrop.jpg",
                      alt: "Black BUND Strap",
                      title: "Black BUND Strap",
                      subtitle: "Type 1 (OG) Black BUND",
                    },
                  ]}
                  onImageClick={(imageData) => handleImageClick(imageData.src)}
                />
              </div>
              <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                <ImageSlider
                  images={[
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Nato-Proper-BUNDcrop.jpg",
                      alt: "Grey BUND Strap",
                      title: "Grey BUND Strap",
                      subtitle: "Type 1 (OG) Grey BUND",
                    },
                    {
                      src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Grey-Loosecrop.jpg",
                      alt: "Grey BUND Strap",
                      title: "Grey BUND Strap",
                      subtitle: "Type 1 (OG) Grey BUND",
                    },
                  ]}
                  onImageClick={(imageData) => handleImageClick(imageData.src)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* Type 1 (OG) Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Generic BUNDs"
                  variant="numbered"
                  number={2}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The Type 2 and Type 3 are generic BUND straps and were
                        sold in a base’s PX/BX. The NSN on these straps is the
                        part code for when they were sold in exchange. These
                        BUND straps were only produced in black{" "}
                      </span>
                    </li>

                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The Type 2 has the NSN: 6645-12-145-6415 and a pointed
                        end strap. It features staples securing the ends of its
                        two straps
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                  <ImageSlider
                    images={[
                      {
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-BUNDcrop.jpg",
                        alt: "Type 2",
                        title: "Type 2",
                        subtitle: "Type 2",
                      },
                      {
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Staple-2crop.jpg",
                        alt: "Type 2",
                        title: "Type 2",
                        subtitle: "Type 2",
                      },
                    ]}
                    onImageClick={(imageData) =>
                      handleImageClick(imageData.src)
                    }
                  />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base leading-relaxed">
                      The Type 3 has the NSN: 6645-12-145-6415 and a curved end
                      strap. It features stitching securing the ends of its two
                      straps.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                  <ImageSlider
                    images={[
                      {
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Natocrop.jpg",
                        alt: "Type 3",
                        title: "Type 3",
                        subtitle: "Type 3",
                      },
                      {
                        src: "https://pub-393db0e6c92e43b780b2b552918d6106.r2.dev/images/BUND/7177-Bund-Stitchedcrop.jpg",
                        alt: "Type 3",
                        title: "Type 3",
                        subtitle: "Type 3",
                      },
                    ]}
                    onImageClick={(imageData) =>
                      handleImageClick(imageData.src)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* Type 1 (OG) Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading title="Buckles" variant="numbered" number={3} />
                <p className="text-sm sm:text-base leading-relaxed">
                  There are three types of buckles found across all BUND straps.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Standard polished angular pin buckles
                      </span>
                    </li>

                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Black or grey-coated round pin buckles, often seen on
                        NATO-issued and UAE Porsche Design BUND straps
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Orfina-signed pin buckles featuring the Orfina logo that
                        is typically coated in either Sablé or black finishes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Generic BUNDs Section */}
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
          <div className="max-w-2xl max-h-2xl">
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

export default Straps;
