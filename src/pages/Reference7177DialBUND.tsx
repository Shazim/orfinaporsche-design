import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialBUND = () => {
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
            <span className="text-porsche-black font-medium">BUND</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - BUND Dial
          </h1>
          {/* Two-column grid: text left, casebacks right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Text (spans 2 columns on desktop) */}
            <div className="md:col-span-2 text-porsche-dark-gray text-lg leading-relaxed space-y-6">
              <p>The BUND variant is short for "Bundeswehr",  the German Federal Defense Force to whom they were issued.</p>
              <p>The dial has no special dial printing beyond that found on the "baseline" configuration.</p>
              <p>However, the caseback does have "BUND" and an appropriate NSN engraving.</p>
              <p>Two known NSNs are found on the BUND variant: the initial NSN is 6645-12-182-1763, and the second 6645-12-194-8642.</p>
              <p>Some BUND examples are "double-struck," meaning the initial NSN is crossed out, and the second NSN is added. This was presumably done at some maintenance event during the watch's lifetime. BUND variants also do not have the  "7177" ref# engraving on the caseback.</p>
              <p>BUND examples are seen in a variety of finishes and were always issued on a BUND-style strap.</p>
              <p>Some Bund examples over their service career, when sent in for service, had their dials replaced with Mk 1. Service Dials. These replacement dials  lacked "Porsche Design" text, which was replaced with "CHRONOGRAPH" text. These examples bear double-struck casebacks.</p>
              <p>In addition, some Bund examples also sent in for service, had their dials replaced with Mk 2. Service Dials. There used early Luminova and lacked "Porsche Design" text again replaced by "CHRONOGRAPH" text, but also lacked the "3H" marking because the dials did not use tritium. Luminova dial examples will also bear double-struck casebacks.</p>
            </div>
            {/* Caseback images stacked right */}
            <div className="flex flex-col gap-8 items-center md:items-end">
              <div className="flex flex-col items-center md:items-end">
                <img 
                  src="/lovable-uploads/7177-caseback.jpg" 
                  alt="Single-Struck Caseback" 
                  className="w-64 h-64 object-cover rounded shadow mb-2"
                />
                <span className="block text-base md:text-lg text-gray-600 text-right">Single-Struck Caseback</span>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <img 
                  src="/lovable-uploads/7177-standard-rehaut.jpg" 
                  alt="Double-Struck Caseback" 
                  className="w-64 h-64 object-cover rounded shadow mb-2"
                />
                <span className="block text-base md:text-lg text-gray-600 text-right">Double-Struck Caseback</span>
              </div>
            </div>
          </div>

          {/* Dials row centered */}
          <div className="flex flex-row gap-8 w-full justify-center my-12">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/7177-crooked-seven-rehaut.jpg" 
                alt="Bund with Baseline Dial" 
                className="w-56 h-56 object-cover rounded shadow mb-2"
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">Bund with Baseline Dial</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/7177-baseline.jpg" 
                alt="Mk 1. Service Dial" 
                className="w-56 h-56 object-cover rounded shadow mb-2"
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">Mk 1. Service Dial</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/7177-caseback.jpg" 
                alt="Mk 2. Service Dial" 
                className="w-56 h-56 object-cover rounded shadow mb-2"
              />
              <span className="block text-base md:text-lg text-gray-600 text-center">Mk 2. Service Dial</span>
            </div>
          </div>

          {/* Box text and images */}
          <div className="max-w-4xl mx-auto text-porsche-dark-gray text-lg leading-relaxed mb-4">
            <p>The Bund examples were also issued in a box that bore the initial NSN 6645-12-182-1763.</p>
          </div>
          <div className="flex flex-col items-center w-full gap-4 mb-12">
            <img 
              src="/lovable-uploads/bund-box.jpg" 
              alt="BUND Box" 
              className="w-full max-w-2xl object-cover rounded shadow mb-2"
            />
            <span className="block text-base md:text-lg text-gray-600 text-center">BUND Box</span>
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

export default Reference7177DialBUND; 