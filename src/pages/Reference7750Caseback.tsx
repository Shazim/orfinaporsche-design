
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
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-8">
                The caseback of the Reference 7750 features distinctive engravings and specifications 
                that identify this timepiece as part of the Porsche Design collection.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-xl font-medium text-porsche-black mb-4 uppercase tracking-wide">Caseback Features</h3>
                  <ul className="space-y-2 text-porsche-dark-gray">
                    <li>• Screw-Down Construction</li>
                    <li>• Porsche Design Signature</li>
                    <li>• Reference Number Engraving</li>
                    <li>• Water Resistance Marking</li>
                    <li>• Movement Identification</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-sans text-xl font-medium text-porsche-black mb-4 uppercase tracking-wide">Engravings</h3>
                  <ul className="space-y-2 text-porsche-dark-gray">
                    <li>• "PORSCHE DESIGN"</li>
                    <li>• "by IWC"</li>
                    <li>• Serial Number</li>
                    <li>• "WATER RESISTANT 100M"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-porsche-gray aspect-square flex items-center justify-center">
              <span className="font-sans text-porsche-black text-2xl font-light uppercase tracking-wider">CASEBACK</span>
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
