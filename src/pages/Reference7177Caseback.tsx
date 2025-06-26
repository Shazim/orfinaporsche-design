import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177Caseback = () => {
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
            <span className="text-porsche-black font-medium">Caseback</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Caseback
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-6">
                The caseback engravings on the 7177 differ entirely from that of the 7176 variants.
              </p>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-6">
                For the center of the caseback, the 7177 swapped a large Porsche Design logo for a smaller one, added Orfina to the text, and had "Military Chronograph 7177 MOD. DEP. INT." stamped on the back.
              </p>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-2">
                For the outer engraving, the text differed as well:
              </p>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li><span className="font-semibold">7176S Outer Engraving:</span> "SWISS MADE_ 7176 S CHRONOGRAPH_ AUTOMATIC_WATER RESISTANT_ TESTED 10 ATM_ SHOCKPROTECTED_STAINLESS STEEL"</li>
                <li><span className="font-semibold">7177 Outer Engraving:</span> "SWISS MADE_WATER RESISTANT_TESTED 10ATM_AUTOMATIC_SHOCKPROTECTED_STAINLESS STEEL"</li>
              </ul>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-6">
                All 7177 variants also include a stamped serial number, which are found in groupings for particular dial configurations.
              </p>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>However, in 1999 after Umberto Maglioli died, Orfina was sold to new owners, and in order to clear much of their backstock, they sold these parts to a variety of parties who subsequently "produced" new watches from put-together surplus parts they had left on shelves. The addition of these late 1990 surplus watches has raised many questions about the correlation of serial numbers to the unit.</li>
              </ul>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed">
                Specifically for the Venezuelan, UAE, and Bund-issued variants, there are unique caseback engravings, which will be discussed in their perspective headings.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7177-caseback.jpg" 
                  alt="7177 Caseback Engraving" 
                  className="w-full max-w-xs rounded shadow mb-2 object-contain mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">7177 Caseback Engraving</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7176s-caseback.jpg" 
                  alt="7176S Caseback Engraving" 
                  className="w-full max-w-xs rounded shadow mb-2 object-contain mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-600 text-center">7176S Caseback Engraving</span>
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

export default Reference7177Caseback; 