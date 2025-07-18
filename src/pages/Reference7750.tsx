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
import ImageWithLoader from "../components/ImageWithLoader";

const Reference7750 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link
              to="/"
              className="text-porsche-dark-gray hover:text-porsche-black"
            >
              Home
            </Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-dark-gray">References</span>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Ref. 7750</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Heading Top Left with Room for Picture */}
      <section className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-5xl md:text-6xl font-light text-porsche-black mb-4 uppercase tracking-wider text-left">
            Reference <span className="text-porsche-black">7750</span>
          </h1>
          <p className="font-inter text-gray-700 leading-relaxed mb-8 text-left">
            There are three "hero" generations of the Reference 7750. We will
            outline a brief overview below, before going into deeper variations
            across all generations.
          </p>

          {/* Generation 1 Row */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-16">
            <div className="flex-1">
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">
                Generation 1
              </h2>
              <ul className="list-disc ml-8 text-gray-700 mb-4">
                <li>
                  <strong>Production Years:</strong> 1973-1974
                </li>
                <li>
                  <strong>Case:</strong> Mk. 1
                </li>
                <li>
                  <strong>Finishes:</strong> Powder Coat Black, Silver/Sable
                </li>
                <li>
                  <strong>Caseback:</strong> Mk. 1
                </li>
                <li>
                  <strong>Rehaut:</strong> 1Mile, 1KM, Advertisement
                </li>
                <li>
                  <strong>Dial:</strong> Orfina Dial
                </li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center md:w-80 mt-6 md:mt-0"
              style={{ position: "relative", left: "-384px" }}
            >
              <img
                src="/lovable-uploads/7177-caseback.jpg"
                alt="7750 Generation 1 Orfina"
                className="w-32 h-32 object-contain bg-porsche-gray rounded shadow mb-2"
              />
              <div className="italic text-gray-600 text-center">
                7750 Generation 1 "Orfina"
              </div>
            </div>
          </div>

          {/* Generation 2 Row */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-16">
            <div className="flex-1">
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">
                Generation 2
              </h2>
              <ul className="list-disc ml-8 text-gray-700 mb-4">
                <li>
                  <strong>Production Years:</strong> 1974-1974
                </li>
                <li>
                  <strong>Case:</strong> Mk. 1
                </li>
                <li>
                  <strong>Finishes:</strong> Powder Coat Black, Silver/Sable
                </li>
                <li>
                  <strong>Caseback:</strong> Mk. 2
                </li>
                <li>
                  <strong>Rehaut:</strong> 1Mile, 1KM, Advertisement
                </li>
                <li>
                  <strong>Dial:</strong> PD Dial
                </li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center md:w-80 mt-6 md:mt-0"
              style={{ position: "relative", left: "-384px" }}
            >
              <img
                src="/lovable-uploads/7177-standard-rehaut.jpg"
                alt="7750 Generation 2 Flat PD Dial"
                className="w-32 h-32 object-contain bg-porsche-gray rounded shadow mb-2"
              />
              <div className="italic text-gray-600 text-center">
                7750 Generation 2 "Flat PD Dial"
              </div>
            </div>
          </div>

          {/* Generation 3 Row */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-4">
            <div className="flex-1">
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">
                Generation 3
              </h2>
              <ul className="list-disc ml-8 text-gray-700 mb-4">
                <li>
                  <strong>Production Years:</strong> 1975-1976
                </li>
                <li>
                  <strong>Case:</strong> Mk. 2
                </li>
                <li>
                  <strong>Finishes:</strong> Black PVD, Silver/Sable
                </li>
                <li>
                  <strong>Caseback:</strong> Mk. 2, Mk. 3
                </li>
                <li>
                  <strong>Rehaut:</strong> 1Mile, 1KM, Advertisement
                </li>
                <li>
                  <strong>Dial:</strong> PD Dial
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/references/7750/case-finishes"
                className="group h-full"
              >
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0">
                    <ImageWithLoader
                      src="/images/7750-photos/7750-Mk.3-Casecrop.jpg"
                      alt="Case & Finishes"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Mk.2-Caseback-1.jpg"
                      alt="Caseback"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Rehaut-1KM.jpg"
                      alt="Rehaut Variations"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0">
                    <img
                      src="/images/7750-photos/7750-Orfina.jpg"
                      alt="Dial Variations"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        </div>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="py-8 bg-porsche-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-light text-porsche-black mb-8 text-center uppercase tracking-wider">
            Explore Details
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Link to="/references/7750/case-finishes" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-between text-center transition-all group-hover:shadow-lg group-hover:-translate-y-1 duration-200">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/7177-case-finishes.jpg"
                    alt="Case & Finishes"
                    className="w-full h-full max-h-40 object-contain"
                  />
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors mt-4 mb-0 flex items-end justify-center min-h-[2.5rem]">
                  Case & Finishes
                </h3>
              </div>
            </Link>

            <Link to="/references/7750/caseback" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-between text-center transition-all group-hover:shadow-lg group-hover:-translate-y-1 duration-200">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/7177-caseback.jpg"
                    alt="Caseback"
                    className="w-full h-full max-h-40 object-contain"
                  />
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors mt-4 mb-0 flex items-end justify-center min-h-[2.5rem]">
                  Caseback
                </h3>
              </div>
            </Link>

            <Link to="/references/7750/rehaut" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-between text-center transition-all group-hover:shadow-lg group-hover:-translate-y-1 duration-200">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/7177-standard-rehaut.jpg"
                    alt="Rehaut Variations"
                    className="w-full h-full max-h-40 object-contain"
                  />
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors mt-4 mb-0 flex items-end justify-center min-h-[2.5rem]">
                  Rehaut Variations
                </h3>
              </div>
            </Link>

            <Link to="/references/7750/dial" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-between text-center transition-all group-hover:shadow-lg group-hover:-translate-y-1 duration-200">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/7177-baseline.jpg"
                    alt="Dial Variations"
                    className="w-full h-full max-h-40 object-contain"
                  />
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors mt-4 mb-0 flex items-end justify-center min-h-[2.5rem]">
                  Dial Variations
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Now at Bottom */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-8 text-center">
            Technical Specifications
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-8 py-4 bg-charcoal">
              <h3 className="font-playfair text-2xl font-bold text-white">
                Reference 7750 Specifications
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Reference Number
                    </span>
                    <span className="font-inter text-charcoal">7750</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Production Years
                    </span>
                    <span className="font-inter text-charcoal">1978-1995</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Case Material
                    </span>
                    <span className="font-inter text-charcoal">
                      Stainless Steel
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Water Resistance
                    </span>
                    <span className="font-inter text-charcoal">100m</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Movement
                    </span>
                    <span className="font-inter text-charcoal">
                      Valjoux 7750
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Jewels
                    </span>
                    <span className="font-inter text-charcoal">25</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Functions
                    </span>
                    <span className="font-inter text-charcoal">
                      Hours, Minutes, Seconds, Chronograph, Date
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">
                      Serial Range
                    </span>
                    <span className="font-inter text-charcoal">
                      6000–9000 (approx.)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to References */}
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors"
          >
            ← Back to References
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7750;
