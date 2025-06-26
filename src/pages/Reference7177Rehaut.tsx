import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177Rehaut = () => {
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
            <span className="text-porsche-black font-medium">Rehaut</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Rehaut
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>All 7177 or "military" variants have a 12-hr rehaut ring, while the non-military civilian variants have a tachymetric rehaut ring.</p>
              <p>Moreover, there are two known variations of the 12-hr rehaut ring: a slightly larger font "crooked seven rehaut" found on the first 7177's ever produced, and a slightly smaller rehaut found on all other 7177 variants.</p>
              <p>There are a variety of prototype rehauts that have been seen on examples over the years, but these were not configured on any "production" watches and thus will not be discussed here.</p>
            </div>
            {/* Right: Images in a row */}
            <div className="flex flex-row gap-8 items-start justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                  alt="Crooked Seven Rehaut" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Crooked Seven Rehaut</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-standard-rehaut.jpg" 
                  alt="Standard Rehaut" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Standard Rehaut</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/references/7177" 
            className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors"
          >
            ← Back to Reference 7177
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7177Rehaut; 