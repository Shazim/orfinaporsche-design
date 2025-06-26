import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialFourLogo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <Link to="/references/7177" className="text-porsche-dark-gray hover:text-porsche-black">Ref. 7177</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <Link to="/references/7177/dial" className="text-porsche-dark-gray hover:text-porsche-black">Dial Variations</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Four-Logo</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Four-Logo Dial
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>The first 500 of the 7177's feature a four-logo dial with an additional "Porsche Design logo" not present on the Baseline variation and the "PORSCHE DESIGN" text replaced with "CHRONOGRAPH".</p>
              <p>The Four-Logo variant is also the only 7177 where the crooked seven rehaut is found.</p>
              <p>Each watch is serialized, and all are between 1 and ~500.</p>
              <p>These watches are only found in a Sandblasted Steel or Black PVD finish.</p>
              <p>It is important to note that the majority of the four-logo examples seen have had Italian day wheels. However, we seek further examples to clarify this for certain.</p>
            </div>
            {/* Right: Images stacked vertically */}
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                  alt="Four-Logo Dial" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Four-Logo Dial</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-caseback.jpg" 
                  alt="Four-Logo Caseback" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Four-Logo Caseback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/references/7177/dial" 
            className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors"
          >
            ← Back to Dial Variations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7177DialFourLogo; 