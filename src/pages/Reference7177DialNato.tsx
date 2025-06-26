import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialNato = () => {
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
            <span className="text-porsche-black font-medium">Nato</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Nato Dial
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>The 7177 NATO variant was supposedly issued to individuals at the NATO headquarters in Brussels and bears a Baseline dial, but with the additional printing of "NATO" at 4 O'Clock.</p>
              <p>The NATO variant was always coated in Cadet Grey PVD and came on a gray BUND-style leather strap.</p>
            </div>
            {/* Right: Images side by side */}
            <div className="flex flex-row gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-caseback.jpg" 
                  alt="Nato Bund Strap" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Nato Bund Strap</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                  alt="Nato Dial" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Nato Dial</span>
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

export default Reference7177DialNato; 