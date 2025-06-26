import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const dialVariations = [
  { name: 'Four-Logo', path: '/references/7177/dial/four-logo' },
  { name: 'Baseline', path: '/references/7177/dial/baseline' },
  { name: 'Nato', path: '/references/7177/dial/nato' },
  { name: 'Swiss Shield', path: '/references/7177/dial/swiss-shield' },
  { name: 'Venezuelan MOD', path: '/references/7177/dial/venezuelan-mod' },
  { name: 'BUND', path: '/references/7177/dial/bund' },
  { name: 'Flying Tiger', path: '/references/7177/dial/flying-tiger' },
  { name: 'Royal Navy', path: '/references/7177/dial/royal-navy' },
  { name: 'UAE', path: '/references/7177/dial/uae' },
  { name: 'By Orfina', path: '/references/7177/dial/by-orfina' },
];

// Use the provided image as a placeholder for all dial variations
const placeholderImg = "/lovable-uploads/opd-watch.png";

const Reference7177Dial = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="bg-porsche-gray py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="font-sans text-sm">
          <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
          <span className="mx-2 text-porsche-dark-gray">/</span>
          <Link to="/references/7177" className="text-porsche-dark-gray hover:text-porsche-black">Ref. 7177</Link>
          <span className="mx-2 text-porsche-dark-gray">/</span>
          <span className="text-porsche-black font-medium">Dial Variations</span>
        </nav>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider whitespace-nowrap">
        Reference 7177 - Dial Variations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dialVariations.map(variation => (
          <Link
            key={variation.path}
            to={variation.path}
            className="block p-6 bg-white border border-porsche-light-gray rounded shadow hover:shadow-md transition flex flex-col items-center text-center hover:bg-porsche-gray"
          >
            <img
              src={placeholderImg}
              alt="OPD Watch Placeholder"
              className="w-20 h-20 object-contain mb-3"
            />
            <span className="font-sans text-base text-porsche-black font-medium mt-1">{variation.name} Dial</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Reference7177Dial; 