import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Settings,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reference7750 = () => {
  const [currentGeneration, setCurrentGeneration] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const generations = [
    {
      id: 1,
      title: "Generation 1",
      subtitle: "The Original Pioneer",
      years: "1973-1974",
      case: "Mk. 1",
      finishes: "Powder Coat Black, Silver/Sable",
      caseback: "Mk. 1",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "Orfina Dial",
      image: "/images/7750-photos/7750-Orfina.jpg",
      description:
        "The inaugural generation that established the legendary 7750 lineage.",
    },
    {
      id: 2,
      title: "Generation 2",
      subtitle: "The Evolution",
      years: "1974-1974",
      case: "Mk. 1",
      finishes: "Powder Coat Black, Silver/Sable",
      caseback: "Mk. 2",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "PD Dial",
      image: "/images/7750-photos/7750-Flat-PD.jpg",
      description:
        "A refined iteration with enhanced dial configuration and improved mechanics.",
    },
    {
      id: 3,
      title: "Generation 3",
      subtitle: "The Perfection",
      years: "1975-1976",
      case: "Mk. 2",
      finishes: "Black PVD, Silver/Sable",
      caseback: "Mk. 2, Mk. 3",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "PD Dial",
      image: "/images/7750-photos/7750-PD-Thin.jpg",
      description:
        "The pinnacle of 7750 engineering with advanced PVD coating technology.",
    },
  ];

  const nextGeneration = () => {
    setCurrentGeneration((prev) => (prev + 1) % generations.length);
  };

  const prevGeneration = () => {
    setCurrentGeneration(
      (prev) => (prev - 1 + generations.length) % generations.length
    );
  };

  const currentGen = generations[currentGeneration];

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
            <span className="text-gray-900 font-medium">Reference 7750</span>
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
                  <span className="font-normal text-gray-700">7750</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Discover the legendary chronograph that defined an era. Three
                  distinct generations of horological excellence, each
                  representing a milestone in precision timekeeping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Generation Slider */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Generation Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-gray-100 rounded-full p-2">
                {generations.map((gen, index) => (
                  <button
                    key={gen.id}
                    onClick={() => setCurrentGeneration(index)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentGeneration === index
                        ? "bg-gray-900 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {gen.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Slider */}
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Section */}
                <div className="relative group">
                  <div className="relative overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                    <div className="aspect-square flex items-center justify-center">
                      <img
                        src={currentGen.image}
                        alt={`${currentGen.title} ${currentGen.subtitle}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                      <p className="text-white font-light text-sm">
                        {currentGen.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8">
                  <div className="transform transition-all duration-500 delay-100">
                    <h2 className="text-4xl font-light text-gray-900 mb-2">
                      {currentGen.title}
                    </h2>
                    <p className="text-xl text-gray-600 font-light mb-6">
                      {currentGen.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {currentGen.description}
                    </p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-gray-600 mr-3" />
                        <h3 className="font-medium text-gray-900">
                          Production Years
                        </h3>
                      </div>
                      <p className="text-gray-700">{currentGen.years}</p>
                    </div>

                    <div className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-3">
                        <Settings className="w-5 h-5 text-gray-600 mr-3" />
                        <h3 className="font-medium text-gray-900">Case</h3>
                      </div>
                      <p className="text-gray-700">{currentGen.case}</p>
                    </div>

                    <div className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-3">
                        <Layers className="w-5 h-5 text-gray-600 mr-3" />
                        <h3 className="font-medium text-gray-900">Finishes</h3>
                      </div>
                      <p className="text-gray-700">{currentGen.finishes}</p>
                    </div>

                    <div className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-3">
                        <Clock className="w-5 h-5 text-gray-600 mr-3" />
                        <h3 className="font-medium text-gray-900">Dial</h3>
                      </div>
                      <p className="text-gray-700">{currentGen.dial}</p>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        Caseback:
                      </span>
                      <span className="text-gray-900">
                        {currentGen.caseback}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Rehaut:</span>
                      <span className="text-gray-900">{currentGen.rehaut}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevGeneration}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextGeneration}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the intricate details and variations of the Reference
                7750
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/references/7750/case-finishes"
                className="group h-full"
              >
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Mk.3-Casecrop.jpg"
                      alt="Case & Finishes"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Case & Finishes
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      Three case variations with different finishes
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/references/7750/caseback" className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Mk.2-Caseback-1.jpg"
                      alt="Caseback"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Caseback
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      Different caseback designs and markings
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/references/7750/rehaut" className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Rehaut-1KM.jpg"
                      alt="Rehaut Variations"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Rehaut Variations
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      Three known rehaut variations
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/references/7750/dial" className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Orfina.jpg"
                      alt="Dial Variations"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Dial Variations
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      Orfina and PD dial variations
                    </p>
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
              <h2 className="text-4xl font-light mb-6">Legacy Timeline</h2>
              <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                Trace the evolution of the Reference 7750 through its defining
                moments
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              {generations.map((gen, index) => (
                <div
                  key={gen.id}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        {gen.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{gen.years}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {gen.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
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
                  Reference 7750 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Reference Number
                      </span>
                      <span className="text-gray-900">7750</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Production Years
                      </span>
                      <span className="text-gray-900">1973-1976</span>
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
                      <span className="text-gray-900">Valjoux 7750</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Jewels</span>
                      <span className="text-gray-900">25</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Functions
                      </span>
                      <span className="text-gray-900">
                        Hours, Minutes, Seconds, Chronograph, Date
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Serial Range
                      </span>
                      <span className="text-gray-900">6000–9000 (approx.)</span>
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
              Explore the Complete Collection
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Discover detailed specifications, variations, and the complete
              history of each Reference 7750 generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Variations
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
                Technical Specifications
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

export default Reference7750;
