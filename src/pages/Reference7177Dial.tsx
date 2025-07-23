import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const dialVariations = [
  {
    name: "Four-Logo",
    path: "/references/7177/dial/four-logo",
    img: "/images/7177 Photos/7177-4Logocrop.jpg",
  },
  {
    name: "Baseline",
    path: "/references/7177/dial/baseline",
    img: "/images/7177 Photos/7177-Silvercrop.jpg",
  },
  {
    name: "Nato",
    path: "/references/7177/dial/nato",
    img: "/images/7177 Photos/7177-Nato-Proper-BUNDcrop.jpg",
  },

  {
    name: "Venezuelan MOD",
    path: "/references/7177/dial/venezuelan-mod",
    img: "/images/7177 Photos/7177-VMODcrop.jpg",
  },
  {
    name: "BUND",
    path: "/references/7177/dial/bund",
    img: "/images/7177 Photos/7177-BUNDcrop.jpg",
  },
  {
    name: "Flying Tiger",
    path: "/references/7177/dial/flying-tiger",
    img: "/images/7177 Photos/7177-Tiger-Silvercrop.jpg",
  },
  {
    name: "Royal Navy",
    path: "/references/7177/dial/royal-navy",
    img: "/images/7177 Photos/7177-RoyalNavy-NTScrop.jpg",
  },
  {
    name: "By Orfina",
    path: "/references/7177/dial/by-orfina",
    img: "/images/7177 Photos/7177-ByOrfinacrop.jpg",
  },
  {
    name: "UAE",
    path: "/references/7177/dial/uae",
    img: "/images/7177 Photos/7177-UAE-Mk.2crop.jpg",
  },
  {
    name: "Swiss Shield",
    path: "/references/7177/dial/swiss-shield",
    img: "/images/7177 Photos/7177 Swiss Shieldcrop.jpg",
  },
];

const placeholderImg = "/lovable-uploads/opd-watch.png";

const Reference7177Dial = () => {
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
              to="/references/7177"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7177
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Dial Variations</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7177
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Dial Variations
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The Reference 7177 features an extensive range of dial variations,
              each designed for specific military and governmental organizations
              worldwide.
            </p>
          </div>

          {/* Dial Variations Grid */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="flex items-center space-x-4 mb-12 sm:mb-16">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                10
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                Dial Variations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {dialVariations.map((variation, idx) => (
                <Link
                  key={variation.path}
                  to={variation.path}
                  className="group block animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${500 + idx * 100}ms` }}
                >
                  <div className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={variation.img}
                        alt={`${variation.name} Dial`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors mt-2">
                        {variation.name}
                      </h3>
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-black transition-colors duration-300"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Information Section */}
          {/* <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 text-center">
                Military Heritage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Organizational Variants
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    Each dial variation was specifically designed for different
                    military and governmental organizations, featuring unique
                    logos, markings, and specifications tailored to their
                    requirements.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Global Distribution
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    The 7177 series was distributed worldwide to various
                    military forces, with each dial variation representing a
                    specific contract or organizational requirement.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/references/7177"
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
            Back to Reference 7177
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7177Dial;
