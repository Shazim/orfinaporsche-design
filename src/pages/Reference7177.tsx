import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Settings,
  Layers,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7177 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % militaryVariants.length);
  };

  const prevSection = () => {
    setCurrentSection(
      (prev) => (prev - 1 + militaryVariants.length) % militaryVariants.length
    );
  };

  const currentVariant = militaryVariants[currentSection];

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

        {/* Interactive Military Variants Slider */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Military Variants
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Explore the distinguished military variants of the Reference
                7177
              </p>
            </div>

            {/* Variant Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-gray-100 rounded-full p-2">
                {militaryVariants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setCurrentSection(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentSection === index
                        ? "bg-gray-900 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Slider */}
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Section */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                      <img
                        src={currentVariant.image}
                        alt={`${currentVariant.title} ${currentVariant.subtitle}`}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                      <p className="text-white font-light text-sm">
                        {currentVariant.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8">
                  <div className="transform transition-all duration-500 delay-100">
                    <h3 className="text-4xl font-light text-gray-900 mb-2">
                      {currentVariant.title}
                    </h3>
                    <p className="text-xl text-gray-600 font-light mb-6">
                      {currentVariant.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {currentVariant.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {currentVariant.features.map((feature, index) => (
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

              {/* Navigation Arrows */}
              <button
                onClick={prevSection}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSection}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Sub-Pages Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Explore Details
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/references/7177/case-finishes" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-case-finishes.jpg"
                      alt="Case & Finishes"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
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
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                      Caseback
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/references/7177/rehaut" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-standard-rehaut.jpg"
                      alt="Rehaut Variations"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                      Rehaut Variations
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/references/7177/dial" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7177-baseline.jpg"
                      alt="Dial Variations"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
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
        <section className="py-16 bg-gray-900 text-white">
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
    </div>
  );
};

export default Reference7177;
