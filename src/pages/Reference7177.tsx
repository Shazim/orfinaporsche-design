import React, { useState, useEffect } from "react";
import { Clock, Calendar, Settings, Layers, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";

const Reference7177 = () => {
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

  const militaryVariants = [
    {
      id: 1,
      title: "Baseline Military",
      subtitle: "The Foundation",
      description:
        "The standard military variant featuring the iconic three dial elements: 'MILITARY', 'PORSCHE DESIGN', and the 'circle-3H logo'.",
      features: [
        "Standard Military Dial",
        "Baseline Configuration",
        "Public Availability",
      ],
      image: "/lovable-uploads/7177-baseline.jpg",
    },
    {
      id: 2,
      title: "By Orfina",
      subtitle: "The Manufacturer's Mark",
      description:
        "Distinctive variant with manufacturer identification, showcasing the partnership between Porsche Design and Orfina.",
      features: [
        "Orfina Branding",
        "Manufacturer Identification",
        "Limited Production",
      ],
      image: "/lovable-uploads/7177-baseline.jpg",
    },
    {
      id: 3,
      title: "BUND",
      subtitle: "German Federal Forces",
      description:
        "Issued to German Federal Forces, featuring specialized markings and enhanced durability specifications.",
      features: [
        "German Military Issue",
        "Enhanced Durability",
        "Specialized Markings",
      ],
      image: "/lovable-uploads/bund-with-baseline-dial.jpg",
    },
    {
      id: 4,
      title: "NATO",
      subtitle: "Alliance Standard",
      description:
        "NATO-issued variant with alliance-specific markings and standardized military specifications.",
      features: [
        "NATO Specifications",
        "Alliance Markings",
        "Standardized Issue",
      ],
      image: "/lovable-uploads/7177-baseline.jpg",
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
            <span className="text-gray-900 font-medium">Reference 7177</span>
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
                <h1 className="font-light text-5xl md:text-7xl text-gray-900 mb-6 tracking-tight">
                  Reference{" "}
                  <span className="font-normal text-gray-700">7177</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                  The 7177 Military Chronograph, introduced in 1977, represents
                  the pinnacle of military timepieces. Available both
                  commercially and through direct military organizations,
                  featuring ten distinct variants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differences Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Military Distinctions
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Five key differences distinguish the 7177 military variants from
                civilian 7176 models
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Layers className="w-6 h-6 text-gray-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Available Finishes
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Specialized military finishes including unique coatings not
                  available in civilian models.
                </p>
              </div>

              <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-gray-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Caseback Engravings
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Military-specific engravings and markings unique to each
                  variant and organization.
                </p>
              </div>

              <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-gray-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Chronograph Hands
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Enhanced central chronograph-minutes hand and specialized hour
                  chronograph hands.
                </p>
              </div>

              <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-gray-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Rehaut Design
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Military-specific rehaut configurations optimized for tactical
                  timing requirements.
                </p>
              </div>

              <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-gray-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Military Dial
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Distinctive dial featuring "MILITARY", "PORSCHE DESIGN", and
                  "circle-3H logo" elements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Military Variants Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Military Variants
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the distinguished military variants of the Reference
                7177, each with unique characteristics and military
                specifications.
              </p>
            </div>

            {/* All Variants Displayed */}
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {militaryVariants.map((variant, index) => (
                <div
                  key={variant.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                >
                  <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                        {variant.title}
                      </h2>
                      <p className="text-lg text-gray-600 font-light">
                        {variant.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12">
                    {/* Image Section */}
                    <div className="relative group lg:w-auto lg:flex-shrink-0">
                      <div
                        className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                        onClick={() =>
                          setFullScreenImage({
                            src: variant.image,
                            alt: `${variant.title} ${variant.subtitle}`,
                            title: variant.title,
                            subtitle: variant.subtitle,
                          })
                        }
                      >
                        <div className="w-full max-w-md mx-auto lg:mx-0">
                          <ImageWithLoader
                            src={variant.image}
                            alt={`${variant.title} ${variant.subtitle}`}
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
                          {variant.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {variant.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 lg:flex-1">
                      <div className="transform transition-all duration-500 delay-100">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                          {variant.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {variant.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Military Specifications */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center mb-3">
                            <Calendar className="w-5 h-5 text-gray-600 mr-3" />
                            <h4 className="font-medium text-gray-900">
                              Production Period
                            </h4>
                          </div>
                          <p className="text-gray-700">1977-1983</p>
                        </div>

                        <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center mb-3">
                            <Shield className="w-5 h-5 text-gray-600 mr-3" />
                            <h4 className="font-medium text-gray-900">
                              Military Issue
                            </h4>
                          </div>
                          <p className="text-gray-700">Direct & Commercial</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-Pages Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Explore Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/references/7750/case-finishes" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-case-finishes.jpg"
                      alt="Case & Finishes"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                      Case & Finishes
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/references/7177/caseback" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-caseback.jpg"
                      alt="Caseback"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                      Caseback
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/references/7177/caseback" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-standard-rehaut.jpg"
                      alt="Rehaut Variations"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                      Rehaut Variations
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/references/7177/caseback" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-baseline.jpg"
                      alt="Dial Variations"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 ">
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                      Dial Variations
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">
                Military Heritage Timeline
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                Trace the development and deployment of the Reference 7177
                military variants
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              <div className="space-y-16">
                <div className="relative flex items-center justify-start">
                  <div className="w-5/12 pr-8 text-right">
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        1977 - Introduction
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        The 7177 Military Chronograph is introduced,
                        establishing the foundation for military timepieces.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>

                <div className="relative flex items-center justify-end">
                  <div className="w-5/12 pl-8 text-left">
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        1978-1980 - Military Adoption
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Various military organizations adopt the 7177, leading
                        to specialized variants and markings.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>

                <div className="relative flex items-center justify-start">
                  <div className="w-5/12 pr-8 text-right">
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        1981-1983 - Peak Production
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Peak production period with multiple variants serving
                        different military organizations worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>

                <div className="relative flex items-center justify-end">
                  <div className="w-5/12 pl-8 text-left">
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        1983 - Partnership End
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Porsche Design ends partnership with Orfina, marking the
                        end of the 7177 production era.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 bg-gray-900">
                <h3 className="text-2xl font-light text-white">
                  Reference 7177 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Reference Number
                      </span>
                      <span className="text-gray-900">7177</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Production Years
                      </span>
                      <span className="text-gray-900">1977-1983</span>
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
                        Hours, Minutes, Seconds, Chronograph
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Serial Range
                      </span>
                      <span className="text-gray-900">3000–6000 (approx.)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Explore the Military Legacy
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Discover the complete history and specifications of the Reference
              7177 military variants and their distinguished service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Variants
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
                Military History
              </button>
            </div>
          </div>
        </section>
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

export default Reference7177;
