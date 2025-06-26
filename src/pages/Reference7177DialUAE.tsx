import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialUAE = () => {
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
            <span className="text-porsche-black font-medium">UAE</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - UAE Dial
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="text-porsche-dark-gray text-lg leading-relaxed space-y-6">
              <p>The 7177 UAE variant was ordered by the UAE's Air Force and came in two dial variations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A UAE Mk. 1 Dial stamped with "UAE AIR FORCE" at four o'clock and a tricolor motif at the six o'clock subdial.</li>
                <li>A UAE Mk. 2 Dial stamped with "UAE AIR FORCE" at four o'clock as well, but "CENTRAL AIR BASE" stamped at the six o'clock subdial instead of a motif.</li>
              </ul>
              <p>Both of the UAE dial variants came in a variety of the 7177 finishes.</p>
              <p>There is a very small batch of casebacks in which the serial number's location shifted to the middle of the caseback. This is found on UAE issued examples, in the low ~3000 serial range.</p>
              <p>An important note is that many claim there is a UAE Mk. 3 variant in which 25 had gold-plated cases. We believe this is not the case and that these watches were simply customized by their owner/owners.</p>
            </div>
            {/* Right: Images in upside-down triangle */}
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-row justify-center gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/uae-mk1.jpg" alt="UAE Mk. 1 Dial" className="w-56 h-56 object-cover rounded shadow mb-2" />
                  <span className="block text-base md:text-lg text-gray-600 text-center">UAE Mk. 1 Dial</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/uae-mk2.jpg" alt="UAE Mk. 2 Dial" className="w-56 h-56 object-cover rounded shadow mb-2" />
                  <span className="block text-base md:text-lg text-gray-600 text-center">UAE Mk. 2 Dial</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/uae-midcaseback.jpg" alt="Mid-Caseback Serial" className="w-64 h-48 object-cover rounded shadow mb-2" />
                <span className="block text-base md:text-lg text-gray-600 text-center">Mid-Caseback Serial</span>
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

export default Reference7177DialUAE; 