
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Reference7750Dial = () => {
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
            <span className="text-porsche-black font-medium">Dial Variations</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7750 - Dial Variations
          </h1>
          <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-8">
            There are two dial variations found on the Reference 7750.
          </p>

          {/* Orfina Dial Section */}
          <div className="mb-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-4 mt-8">Orfina Dial (Found Mk. 1 Case with Mk. 1 Caseback)</h2>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>The First is the Orfina Dial, and this is the dial that started it all. “ORFINA” is printed above the Day/Date windows and “PORSCHE DESIGN” is printed below the windows.</li>
                <li>It is solely found on the Mk. 1 Case with a Mk. 1 Caseback and either rehaut.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src="/lovable-uploads/mk-1-service-dial.jpg" 
                alt="7750 Orfina Dial" 
                className="w-full max-w-xs rounded shadow mb-2 object-contain mx-auto"
                style={{ maxHeight: '350px' }}
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">7750 Orfina Dial</span>
            </div>
          </div>

          {/* PD Dial Section */}
          <div className="mb-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-4 mt-8">PD Dial (Found across all case marks and Mk. 2 Casebacks)</h2>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>“PD” is printed above the Day/Date windows and “PORSCHE DESIGN” is printed below the windows.</li>
                <li>This dial can be found on any 7750 case, caseback or rehaut variation except for the original Mk. 1 Caseback found exclusively paired with an Orfina dial.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src="/lovable-uploads/mk-2-service-dial.jpg" 
                alt="7750 PD Dial" 
                className="w-full max-w-xs rounded shadow mb-2 object-contain mx-auto"
                style={{ maxHeight: '350px' }}
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">7750 PD Dial</span>
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

export default Reference7750Dial;
