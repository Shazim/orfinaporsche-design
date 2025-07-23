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

const Bracelets = () => {
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
            <span className="text-black font-medium">Bracelets</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Bracelets
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Multiple Production Runs and Variations
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are multiple known production runs of bracelets for all
              Orfina Porsche Design watches. The bracelets were produced by
              Novavit S.A. (known as N.S.A.) as printed on the folding portion
              of the clasp.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Mk. 1 Bracelets */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Mk. 1 Bracelets
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The first run of bracelets was Powder Coat Black and
                  Silver/Sablé bracelets produced for the Valjoux 7750 Porsche
                  Design watches. These were found on the Orfina 7750 Orfina
                  Dial – a.k.a Gen 1. They came in 2 types and these bracelets
                  first featured Orfina signed spring-loaded clasps.
                </p>
              </div>

              {/* Spring-loaded expansion clasp */}
              <div className="space-y-8">
                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
                    Spring-loaded Expansion Clasp
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <strong>Years of Production:</strong> Some portion of the
                      Orfina-dial run, but not all of it. Having this bracelet
                      MAY signify an early example.
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          There are a few variations of these, including units
                          sporting 1 "bump" in the folding part, and units
                          sporting 2 "bumps"
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          There are also 2 known clasp covers varying in length
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bracelet Image Galleries */}
                  <div className="mt-8 space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-4">
                        Mk 1 Orfina Spring One Bump short/long (Powder Coat)
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          {
                            src: "/images/Bracelets/Bracelet-MK1-Orfina-Backcrop.jpg",
                            title: "MK1 Orfina Back",
                          },
                          {
                            src: "/images/Bracelets/Bracelet-MK1-Orfina-Extended-1crop.jpg",
                            title: "MK1 Orfina Extended 1",
                          },
                          {
                            src: "/images/Bracelets/Bracelet-MK1-Orfina-Extended-2crop.jpg",
                            title: "MK1 Orfina Extended 2",
                          },
                          {
                            src: "/images/Bracelets/Bracelet-MK1-Orfina-Frontcrop.jpg",
                            title: "MK1 Orfina Front",
                          },
                        ].map((image, index) => (
                          <div
                            key={index}
                            className="relative group cursor-pointer"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                alt: image.title,
                                title: image.title,
                                subtitle: "Mk. 1 Spring One Bump",
                              })
                            }
                          >
                            <ImageWithLoader
                              src={image.src}
                              alt={image.title}
                              className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                              skeletonClassName="w-full h-32 rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-black mb-4">
                        Mk 1 Orfina Spring Two Bump short/long (Powder Coat)
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Placeholder for two bump variants - using similar images for now */}
                        {[
                          {
                            src: "/images/Bracelets/Mk 1 Orfina Pincrop.jpg",
                            title: "MK1 Two Bump Pin",
                          },
                        ].map((image, index) => (
                          <div
                            key={index}
                            className="relative group cursor-pointer"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                alt: image.title,
                                title: image.title,
                                subtitle: "Mk. 1 Spring Two Bump",
                              })
                            }
                          >
                            <ImageWithLoader
                              src={image.src}
                              alt={image.title}
                              className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                              skeletonClassName="w-full h-32 rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pin-adjusted clasp */}
                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
                    Pin-adjusted Clasp
                  </h3>
                  <p className="text-gray-700 mb-6">
                    <strong>Years of Production:</strong> Later in the
                    Orfina-dial run.
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-4">
                      Mk 1 Orfina Pin (Powder Coat)
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        {
                          src: "/images/Bracelets/Bracelet-MK1-PVD-Pin-Backcrop.jpg",
                          title: "MK1 PVD Pin Back",
                        },
                        {
                          src: "/images/Bracelets/Bracelet-MK1-PVD-Pin-Extended-1crop.jpg",
                          title: "MK1 PVD Pin Extended 1",
                        },
                        {
                          src: "/images/Bracelets/Bracelet-MK1-PVD-Pin-Extended-2crop.jpg",
                          title: "MK1 PVD Pin Extended 2",
                        },
                        {
                          src: "/images/Bracelets/Bracelet-MK1-PVD-Pin-Frontcrop.jpg",
                          title: "MK1 PVD Pin Front",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer"
                          onClick={() =>
                            setFullScreenImage({
                              src: image.src,
                              alt: image.title,
                              title: image.title,
                              subtitle: "Mk. 1 Pin-adjusted",
                            })
                          }
                        >
                          <ImageWithLoader
                            src={image.src}
                            alt={image.title}
                            className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                            skeletonClassName="w-full h-32 rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mk. 2 Bracelets */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Mk. 2 Bracelets
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  These bracelets were produced in a variety of finishes and
                  with a pin-adjusted PD signed clasp. They were used on the
                  transitional 7750, aka Mk. 2 case and 7176 and 7177 models.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Years of Production:</strong> 1976-Onward
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Finishes Available:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Silver/Sablé",
                      "Black PVD",
                      "Cadet Grey PVD",
                      "Olive Green PVD",
                      "NTS PVD",
                    ].map((finish, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg border border-gray-200"
                      >
                        <span className="font-medium text-gray-800">
                          {finish}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h4 className="font-semibold text-black mb-2">
                    Links Configuration:
                  </h4>
                  <p className="text-gray-700">
                    In Total 28 Links are found with 14 Links in Front of the
                    Clasp Cover and 14 Links in Rear of the Clasp Cover.
                  </p>
                </div>

                {/* <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-black mb-2">
                    Identification Note:
                  </h4>
                  <p className="text-gray-700">
                    To identify Mk. 2 over Mk. 3 Black PVD Bracelets, one major
                    distinction is that on Mk. 2 Black PVD Bracelets, the PVD is
                    finished between the links. Whereas on Mk. 3 Black PVD
                    bracelets, the links are not fully finished.
                  </p>
                </div> */}

                {/* Mk. 2 Black PVD Photos */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    Mk. 2 Black PVD Photos
                  </h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {[
                      {
                        src: "/images/Bracelets/Bracelet-MK2-Backcrop.jpg",
                        title: "MK2 Back",
                      },
                      {
                        src: "/images/Bracelets/Bracelet-MK2-Front-(2nd Example)crop.jpg",
                        title: "MK2 Front",
                      },
                      {
                        src: "/images/Bracelets/Bracelet-MK2-PVD-Backcrop.jpg",
                        title: "MK2 PVD Back",
                      },
                      {
                        src: "/images/Bracelets/Bracelet-MK2-PVD-Front-(2nd Example)crop.jpg",
                        title: "MK2 PVD Front",
                      },
                    ].map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: image.src,
                            alt: image.title,
                            title: image.title,
                            subtitle: "Mk. 2 Black PVD",
                          })
                        }
                      >
                        <ImageWithLoader
                          src={image.src}
                          alt={image.title}
                          className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-32 rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                  {/* <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> We have identified two variations
                      in stamping across Mk. 2 Black PVD Bracelets, with the
                      second being less pronounced.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Mk. 3 Bracelets */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                  Mk. 3 Bracelets
                </h2>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  These bracelets were produced in both black PVD and
                  Silver/Sablé, and featured a pin-adjusted PD signed clasp. We
                  are unsure of their delivery date, but they are either service
                  replacements or were delivered on later-produced 7176 and 7177
                  models.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h4 className="font-semibold text-black mb-2">
                    Links Configuration:
                  </h4>
                  <p className="text-gray-700 mb-4">
                    In Total 28 Links are found with 14 Links in Front of the
                    Clasp Cover and 14 Links in Rear of the Clasp Cover.
                  </p>
                  <p className="text-gray-700">
                    The Mk. 3 run we believe exists for Black PVD and
                    Silver/Sablé bracelets only, as we have not yet identified a
                    second run of Cadet Grey, Olive Green, or NTS PVD bracelets.
                  </p>
                </div>

                {/* Mk. 3 Photos */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    Mk. 3 Photos
                  </h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        src: "/images/Bracelets/Bracelet-MK3-PVD-Backcrop.jpg",
                        title: "MK3 PVD Back",
                      },
                      {
                        src: "/images/Bracelets/Bracelet-MK3-PVD-Extended-1crop.jpg",
                        title: "MK3 PVD Extended 1",
                      },
                      {
                        src: "/images/Bracelets/Bracelet-MK3-PVD-Extended-2crop.jpg",
                        title: "MK3 PVD Extended 2",
                      },
                      {
                        src: "/images/Bracelets/Bracelet-MK3-PVD-Frontcrop.jpg",
                        title: "MK3 PVD Front",
                      },
                    ].map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: image.src,
                            alt: image.title,
                            title: image.title,
                            subtitle: "Mk. 3 Bracelet",
                          })
                        }
                      >
                        <ImageWithLoader
                          src={image.src}
                          alt={image.title}
                          className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-32 rounded-lg"
                        />
                      </div>
                    ))}
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

export default Bracelets;
