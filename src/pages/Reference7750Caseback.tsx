
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Reference7750Caseback = () => {
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
            <span className="text-porsche-black font-medium">Caseback</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7750 - Caseback
          </h1>
          <div className="mb-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-8">
                There are two caseback variations found throughout the entire production of the Orfina 7750.
              </p>
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-4 mt-8">Caseback Mk. 1</h2>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-2">
                Found on the 7750 MK. 1 Case with Orfina Dial (Generation 1), the caseback is marked:
              </p>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>“ * CHRONOGRAPH PORSCHE DESIGN 7750 * ” in the top surrounding text. Followed by another line under it marked “WATERRESISTANT TESTED 10 ATM”</li>
                <li>In the center features a Orfina “Flame” logo over the ORFINA brand name. Above the logo the words “PORSCHE DESIGN” are curved around it.</li>
                <li>At the bottom, marked “INCABLOC AUTOMATIC ALL STAINLESS STEEL SWISS-MADE”</li>
                <li>These do not have serial numbers</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src="/lovable-uploads/7177-caseback.jpg" 
                alt="7750 Caseback Mk. 1" 
                className="w-full max-w-xs rounded shadow mb-2 object-contain mx-auto"
                style={{ maxHeight: '350px' }}
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">7750 Caseback Mk. 1</span>
            </div>
          </div>
          <div className="mb-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-4 mt-8">Caseback Mk. 2</h2>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-2">
                Found across all 7750 Cases, but only those with a PD Dial, the caseback is marked:
              </p>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>“7750 CHRONOGRAPH AUTOMATIC WATERRESISTANT TESTED 10 ATM INCABLOC ALL STAINLESS STEEL SWISS MADE” in the top surrounding text.</li>
                <li>In the center features a PD logo.  Above the logo the words “PORSCHE DESIGN” are curved around it.</li>
                <li>These do have serial numbers.</li>
                <li>The design language change of the caseback is significant and sets the tone for the caseback design language that would go on to be used in 7176, 7176 Military, 7176 D, and 7176 S.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src="/lovable-uploads/7177-standard-rehaut.jpg" 
                alt="7750 Caseback Mk. 2" 
                className="w-full max-w-xs rounded shadow mb-2 object-contain mx-auto"
                style={{ maxHeight: '350px' }}
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">7750 Caseback Mk. 2</span>
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

export default Reference7750Caseback;
