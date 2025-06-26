import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialBaseline = () => {
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
            <span className="text-porsche-black font-medium">Baseline</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Baseline Dial
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>All 7177 or military variants have "MILITARY", "PORSCHE DESIGN", and the "circle-3H logo" printed on the dial. This dial is considered the Baseline variation.</p>
              <p>There are ten main 7177 or military variants. These variants feature the three elements noted on the Baseline dial, plus dial printing, and/or caseback engraving unique to each.</p>
              <p>The Baseline dial is found in all five of the 7177 finishes.</p>
            </div>
            {/* Right: Image */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 mb-2">
                <img 
                  src="/lovable-uploads/7177-baseline.jpg" 
                  alt="Baseline Dial" 
                  className="w-64 h-64 object-cover rounded shadow mx-auto transition-opacity duration-300 absolute inset-0 z-10 hover:opacity-0"
                />
                <img 
                  src="/lovable-uploads/7177-caseback.jpg" 
                  alt="Baseline Dial Hover" 
                  className="w-64 h-64 object-cover rounded shadow mx-auto transition-opacity duration-300 absolute inset-0 z-0"
                />
              </div>
              <span className="block text-base md:text-lg text-gray-600 text-center">Baseline Dial</span>
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

export default Reference7177DialBaseline; 