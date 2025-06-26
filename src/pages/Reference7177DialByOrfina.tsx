import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialByOrfina = () => {
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
            <span className="text-porsche-black font-medium">By Orfina</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - By Orfina Dial
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="text-porsche-dark-gray text-lg leading-relaxed space-y-6">
              <p>The "by Orfina" stamped military dials, are identical to that of the baseline configuration but bear an additional line of text "by Orfina" at 4 o'clock.</p>
              <p>These dials are the last iteration of any Orfina Porsche Design dial, with Orfina branding.</p>
              <p>These dials are presumed to be service dials, as evident by the vast availability of loose dials.</p>
            </div>
            {/* Right: Image */}
            <div className="flex flex-col items-center w-full">
              <img src="/lovable-uploads/by-orfina-service-dial.jpg" alt="By Orfina Service Dial" className="w-64 h-64 object-cover rounded shadow mb-2" />
              <span className="block text-base md:text-lg text-gray-600 text-center">By Orfina Service Dial</span>
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

export default Reference7177DialByOrfina; 