import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import { useState } from "react";

const Reference7750CaseFinishes = () => {
  const [mk1CurrentImage, setMk1CurrentImage] = useState(0);
  const [mk2CurrentImage, setMk2CurrentImage] = useState(0);
  const [mk3CurrentImage, setMk3CurrentImage] = useState(0);

  const mk1Images = [
    {
      src: "/images/7750-photos/7750 Powder Coat Blackcrop.jpg",
      alt: "7750 Mk. 1 Powder Coat Black",
      title: "Powder Coat Black",
    },
    {
      src: "/images/7750-photos/7750-Flat-PD.jpg",
      alt: "7750 Mk. 1 Silver/Sable",
      title: "Silver/Sable",
    },
  ];

  const mk2Images = [
    {
      src: "/images/7750-photos/7750-PD-Thin.jpg",
      alt: "7750 Mk. 2 Black PVD",
      title: "Black PVD",
    },
    {
      src: "/images/7750-photos/7750-Thin-Silver.jpg",
      alt: "7750 Mk. 2 Silver/Sable",
      title: "Silver/Sable",
    },
  ];

  const mk3Images = [
    {
      src: "/images/7750-photos/7750-Mk.3-Casecrop.jpg",
      alt: "7750 Mk. 3 Black PVD",
      title: "Black PVD",
    },
    {
      src: "/images/7750-photos/7750-Mk.3-Case-2crop.jpg",
      alt: "7750 Mk. 3 Silver/Sable",
      title: "Silver/Sable",
    },
  ];

  const ImageSlider = ({ images, currentImage, setCurrentImage, title }) => (
    <div className="flex flex-col items-center justify-center">
      {/* Main Image Display */}
      <div className="relative group mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
        <ImageWithLoader
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="relative w-full max-w-md h-80 sm:h-96 lg:h-[450px] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          skeletonClassName="relative w-full max-w-md h-80 sm:h-96 lg:h-[450px] rounded-lg"
        />

        {/* Image Title Overlay */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {images[currentImage].title}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === 0 ? images.length - 1 : currentImage - 1
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5"
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
            </button>

            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === images.length - 1 ? 0 : currentImage + 1
                )
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex space-x-2 mb-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentImage
                  ? "ring-2 ring-black opacity-100"
                  : "opacity-60 hover:opacity-80"
              }`}
            >
              <ImageWithLoader
                src={image.src}
                alt={image.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"
                skeletonClassName="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">
            {currentImage + 1} of {images.length}
          </span>
        </div>
      )}

      {/* Title and Description */}
      <div className="text-center">
        <span className="text-base sm:text-lg text-gray-600 font-medium block mb-1">
          {title}
        </span>
        <span className="text-sm text-gray-500">
          {images[currentImage].title}
        </span>
      </div>
    </div>
  );

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
              to="/references/7750"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7750
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Case & Finishes</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7750
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Case & Finishes
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 mb-8">
              There are three main case variations for the 7750, each
              representing different periods of evolution and technological
              advancement. The three marks of the 7750 case were produced in a
              mix of Powder Coat Black, Black PVD, and Silver/Sable finishes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Mk. 1</h3>
                <p className="text-sm text-gray-600">Orfina 7750 Flat Top</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Mk. 2</h3>
                <p className="text-sm text-gray-600">
                  Orfina 7750 Transitional Thin Top
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Mk. 3</h3>
                <p className="text-sm text-gray-600">
                  Orfina 7750 Flat-Face Service
                </p>
              </div>
            </div>
          </div>

          {/* Case Variations */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {/* Mk. 1 Section */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Orfina 7750 Flat Top – Mk. 1
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                      Measurements
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
                      <div className="text-center">
                        <div className="font-bold text-black">40.3mm</div>
                        <div className="text-gray-600">Diameter</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-black">42.5mm</div>
                        <div className="text-gray-600">Lug-To-Lug</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-black">14.2mm</div>
                        <div className="text-gray-600">Height</div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      The "Flat Top" / "Flat Face" is the case that started it
                      all. The timeless design of the Porsche Design Chronograph
                      starts its story here. Dr. Ferdinand Alexander "Butzi"
                      Porsche's initial design, which as legend has it took
                      inspiration from the gauges of the original 911 that he
                      had designed in 1963.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Dr. Porsche's credo was "Design must be functional and
                      functionality has to be translated visually into
                      aesthetics, without gags that have to be explained first."
                      This is often stated as "form follows function". With this
                      visual translation from a 911's gauges to a watch face
                      with a simple bezel surrounding it we see the rest of the
                      case design continue to follow this design principle.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      The height of the "flat" face (which mimics the simple
                      bezels of VDO gauges of the day) rises from the base of
                      the case just enough to fit the hand set and rehaut. The
                      overall body of the case then extends out to provide a
                      proper presence on the wrist and include integrated hidden
                      lugs. Because of the use of hidden lugs it could be
                      machined from a single block, adding rigidity and a very
                      masculine and sporty sensibility.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      The case geometry and dimensions are clean and minimalist,
                      lacking unnecessary flourishes or embellishments. This is
                      the birthplace of 50+ years of Porsche Design DNA.
                    </p>
                  </div>
                </div>

                <ImageSlider
                  images={mk1Images}
                  currentImage={mk1CurrentImage}
                  setCurrentImage={setMk1CurrentImage}
                  title="Orfina 7750 Flat Top – Mk. 1"
                />
              </div>

              {/* Mk. 1 Finishes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Powder Coat Black
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      The original units produced between 1973 – 1975 are often
                      mistakenly believed to be the first black PVD chronograph.
                      They were in fact powder coated with black paint. This
                      coating is thicker and more easily "flaked" than PVD.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Production Years:</strong> 1973-1975
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Silver/Sable
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      Sandblasted Silver similar to that seen on the 7176 and
                      7177. <em>NOTE:</em> We don't have an example of these.
                      It's possible that Silver/Sable only became available with
                      the PD dials. Thus, we are unsure to the exact timeline of
                      the 7750 Mk. 1 Silver/Sable, but one can assume they were
                      made in a similar timeline to that of the 7750 Mk. 1
                      Powder Coat Black cases.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Production Years:</strong> 1973-1975 (Not
                      Confirmed)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mk. 2 Section */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Orfina 7750 Transitional Thin Top – Mk. 2
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                <div className="space-y-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      In the mid-1970s, as a reaction to the Quartz Crisis,
                      Valjoux halted production and availability of the 7750 to
                      most manufacturers, including Orfina. Porsche Design &
                      Orfina faced a dilemma about which movement to transition
                      to in order to continue producing their watches.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Dr. Porsche wanted to retain an automatic chronograph
                      movement in his watch. This led them to switch to the
                      Lemania 5100. They designed a new case in order to fit the
                      dimensions of the new movement as it would not fit in the
                      existing 7750 cases. The new case would be used with the
                      7176 and 7177 models.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Some cases were produced (whether the same case vendor was
                      used or not is unknown) with the new design, but thinned
                      to fit a Valjoux 7750, which Orfina still had some
                      inventory of. Given the design similarities it is believed
                      that these cases would date to later in 1975 - 1976.
                    </p>
                  </div>
                </div>

                <ImageSlider
                  images={mk2Images}
                  currentImage={mk2CurrentImage}
                  setCurrentImage={setMk2CurrentImage}
                  title="Orfina 7750 Transitional Thin Top – Mk. 2"
                />
              </div>

              {/* Mk. 2 Finishes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Black PVD
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      These represent the first PVD cases.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Production Years:</strong> 1975-1976
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Silver/Sable
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      Matte finished stainless steel.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Production Years:</strong> 1975-1976
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mk. 3 Section */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Orfina 7750 Flat-Face Service – Mk. 3
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg border-l-4 border-yellow-400">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                      Revised by Orfina Swiss S.A
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Offered by Orfina Swiss SA as a replacement to original
                      damaged or otherwise unusable cases as a modern
                      replacement.
                    </p>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Similar in design and aesthetic to the MK. 1 "Flat Top" /
                      "Flat Face", it has a flat face. These cases feature a
                      larger crown as the replacement crown produced for Orfina
                      Swiss SA is larger than the originals and restores the
                      water-resistance of the watch.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      This case also features larger pushers and mortices milled
                      to fit the larger crown and pushers.
                    </p>
                  </div>
                </div>

                <ImageSlider
                  images={mk3Images}
                  currentImage={mk3CurrentImage}
                  setCurrentImage={setMk3CurrentImage}
                  title="Orfina 7750 Flat-Face Service – Mk. 3"
                />
              </div>

              {/* Mk. 3 Finishes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Black PVD
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      Modern PVD coating applied to service replacement cases.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Production Years:</strong> 2000+
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Silver/Sable
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      Matte finished stainless steel.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Production Years:</strong> 2000+
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
            to="/references/7750"
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
            Back to Reference 7750
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7750CaseFinishes;
