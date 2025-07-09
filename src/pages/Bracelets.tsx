import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Bracelets = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Bracelets</span>
          </nav>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Bracelets
          </h1>
          <div className="flex flex-col gap-10">
            <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-6">
              There are multiple known production runs of bracelets for all Orfina Porsche Design watches. The bracelets were produced by Novavit S.A. (known as N.S.A.) as printed on the folding portion of the clasp. 
            </p>
            <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">Mk. 1 Bracelets</h2>
            <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-4">
              The first run of bracelet were Power Coat Black and Silver/Sable bracelets produced for the Valjoux 7750 Porsche Design watches. These were found on the Orfina 7750 Orfina Dial – a.k.a Gen 1. They came in 2 types and these bracelet first featured Orfina signed spring loaded clasps.
            </p>
            <h3 className="font-sans text-xl font-semibold text-porsche-black mb-2">Spring-Loaded Expansion Clasp</h3>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Years of Production: some portion of the Orfina-dial run, but not all of it. Having this bracelet <b>MAY</b> signify an early example.</li>
              <li>There are a few variations of these including units sporting 1 “bump” in the folding part, and units sporting 2 “bumps”</li>
              <li>There are also 2 known clasp covers varying in length.</li>
            </ul>
            {/* Mk 1 Orfina Spring One Bump short/long (Powder Coat) */}
            <h4 className="font-sans text-lg font-bold text-porsche-black mb-2">Mk 1 Orfina Spring One Bump short/long (Powder Coat)</h4>
            <div className="flex flex-row gap-6 mb-8">
              <img src="/placeholder.svg" alt="One Bump 1" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="One Bump 2" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="One Bump 3" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="One Bump 4" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
            </div>
            {/* Mk 1 Orfina Spring Two Bump short/long (Powder Coat) */}
            <h4 className="font-sans text-lg font-bold text-porsche-black mb-2">Mk 1 Orfina Spring Two Bump short/long (Powder Coat)</h4>
            <div className="flex flex-row gap-6 mb-8">
              <img src="/placeholder.svg" alt="Two Bump 1" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="Two Bump 2" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="Two Bump 3" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="Two Bump 4" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-porsche-black mb-2">Pin-adjusted clasp</h3>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Years of Production: later in the Orfina-dial run.</li>
              <li>Photos</li>
            </ul>
            {/* Mk 1 Orfina Pin (Powder Coat) */}
            <h4 className="font-sans text-lg font-bold text-porsche-black mb-2">Mk 1 Orfina Pin (Powder Coat)</h4>
            <div className="flex flex-row gap-6 mb-8">
              <img src="/placeholder.svg" alt="Pin 1" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="Pin 2" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="Pin 3" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
              <img src="/placeholder.svg" alt="Pin 4" className="w-64 h-32 object-contain bg-porsche-gray rounded shadow" />
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bracelets; 