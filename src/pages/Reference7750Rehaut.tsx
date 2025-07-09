
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Reference7750Rehaut = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <Link to="/references/7750" className="text-porsche-dark-gray hover:text-porsche-black">Ref. 7750</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Rehaut Variations</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7750 - Rehaut Variations
          </h1>
          <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-8">
            There are three known variations of Rehaut found in the 7750 model range. These can found across all 7750 case marks and dial variations.
          </p>

          {/* 3x2 Photo Grid with two callouts, each centered to the right of their respective rows */}
          <div className="grid grid-cols-3 gap-12 items-center mb-12">
            {/* Left: 3x2 grid of photos */}
            <div className="col-span-2 flex flex-col gap-12">
              {/* Row 1: 1Mile and 1Mile Close-Up */}
              <div className="flex flex-row gap-12 items-center justify-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/7177-caseback.jpg" 
                    alt="7750 1Mile Rehaut" 
                    className="w-full max-w-lg rounded shadow mb-2 object-contain mx-auto"
                    style={{ maxHeight: '350px', minHeight: '350px', minWidth: '350px', maxWidth: '350px' }}
                  />
                  <span className="block text-base md:text-lg text-gray-600 text-center">7750 1Mile Rehaut</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/7177-standard-rehaut.jpg" 
                    alt="7750 1Mile Rehaut Close-Up" 
                    className="w-full max-w-lg rounded shadow mb-2 object-contain mx-auto"
                    style={{ maxHeight: '350px', minHeight: '350px', minWidth: '350px', maxWidth: '350px' }}
                  />
                  <span className="block text-base md:text-lg text-gray-600 text-center">7750 1Mile Rehaut Close-Up</span>
                </div>
              </div>
              {/* Row 2: 1km and 1km Close-Up */}
              <div className="flex flex-row gap-12 items-center justify-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                    alt="7750 1km Rehaut" 
                    className="w-full max-w-lg rounded shadow mb-2 object-contain mx-auto"
                    style={{ maxHeight: '350px', minHeight: '350px', minWidth: '350px', maxWidth: '350px' }}
                  />
                  <span className="block text-base md:text-lg text-gray-600 text-center">7750 1km Rehaut</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/7177-baseline.jpg" 
                    alt="7750 1km Rehaut Close-Up" 
                    className="w-full max-w-lg rounded shadow mb-2 object-contain mx-auto"
                    style={{ maxHeight: '350px', minHeight: '350px', minWidth: '350px', maxWidth: '350px' }}
                  />
                  <span className="block text-base md:text-lg text-gray-600 text-center">7750 1km Rehaut Close-Up</span>
                </div>
              </div>
              {/* Row 3: Advertisement and Advertisement Close-Up */}
              <div className="flex flex-row gap-12 items-center justify-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                    alt="7750 Advertisement Rehaut" 
                    className="w-full max-w-lg rounded shadow mb-2 object-contain mx-auto"
                    style={{ maxHeight: '350px', minHeight: '350px', minWidth: '350px', maxWidth: '350px' }}
                  />
                  <span className="block text-base md:text-lg text-gray-600 text-center">7750 Advertisement Rehaut</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/7177-baseline.jpg" 
                    alt="7750 Advertisement Rehaut Close-Up" 
                    className="w-full max-w-lg rounded shadow mb-2 object-contain mx-auto"
                    style={{ maxHeight: '350px', minHeight: '350px', minWidth: '350px', maxWidth: '350px' }}
                  />
                  <span className="block text-base md:text-lg text-gray-600 text-center">7750 Advertisement Rehaut Close-Up</span>
                </div>
              </div>
            </div>
            {/* Callouts: one for the first two rows, one for the last row */}
            <div className="flex flex-col justify-between h-full gap-12">
              {/* Callout for 1Mile/1km rows, centered between first four photos */}
              <div className="flex-1 flex items-center justify-center" style={{ minHeight: '720px' }}>
                <div className="p-6 bg-yellow-100 border-l-4 border-yellow-400 w-full max-w-sm self-center">
                  <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed">
                    <span className="font-semibold">An interesting comparison:</span> despite being different measurements - the 1Mile and 1km have the same marks throughout their rehaut. This lack of detail might explain that in the next reference of Orfina Porsche Design watches, the manufacturer just put "Tachymetre" solely on the rehaut without either “unit” designation.
                  </p>
                </div>
              </div>
              {/* Callout for Advertisement row, centered to the right of the last row */}
              <div className="flex-1 flex items-center justify-center" style={{ minHeight: '360px' }}>
                <div className="p-6 bg-yellow-100 border-l-4 border-yellow-400 w-full max-w-sm self-center">
                  <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed">
                    <span className="font-semibold">Advertisement version:</span> had neither 1Mile or 1km marks, but all tach scale markings. Likely unreleased in this way and possibly done to serve multiple markets with single advertisement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/references/7750" 
            className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors"
          >
            ← Back to Reference 7750
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7750Rehaut;
