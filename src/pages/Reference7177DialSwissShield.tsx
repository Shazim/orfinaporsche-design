import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialSwissShield = () => {
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
            <span className="text-porsche-black font-medium">Swiss Shield</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Swiss Shield Dial
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>The Swiss Military variant was supposedly issued to Switzerland's military. The dial of this variant bears a "Swiss Shield" as well as an additional line of text "by ORFINA".</p>
              <p>This variant was always produced in Green PVD, bears an Italian Day Disk (Easily identifiable by the world GIO - which stands for Thursday in Italian), and came in a set with a matching Green PVD BUND-style leather strap, Green PVD bracelet, and a Green Leather Box.</p>
              <p>It is also thought that all Baseline Variant Green PVD 7177s were also ordered by the Swiss Military and should bear an Italian day disk as well.</p>
              <p>It is estimated that there was a total of 200-500 Green PVD 7177s produced, with approximately 33 bearing a Swiss Shield.</p>
            </div>
            {/* Right: Images side by side */}
            <div className="flex flex-row gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                  alt="Swiss Shield Dial" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Swiss Shield Dial</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-caseback.jpg" 
                  alt="Olive Green Baseline 7177" 
                  className="w-64 h-64 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">Olive Green Baseline 7177</span>
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

export default Reference7177DialSwissShield; 