import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7176CaseFinishes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <Link to="/references/7176" className="text-porsche-dark-gray hover:text-porsche-black">Ref. 7176</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Case & Finishes</span>
          </nav>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7176 - Case & Finishes
          </h1>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-6">
                All 7176 variants feature a “Round Top” / “Round Face” outfitted to fit the, at the time, new Lemania 5100 movement.  As stated in the 7750 Gen 3 case, the new case has a rounded face, and is thicker than the 7750 cases in order to house the taller new movement.
                <br /><br />
                In particular, the case has a longer extension of the hidden lugs than the Transitional case.  ____mm Lug-to-lug.
              </p>
              <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">Measurements</h2>
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li><span className="font-bold">Diameter:</span></li>
                <li><span className="font-bold">Lug-To-Lug:</span></li>
                <li><span className="font-bold">Height:</span></li>
              </ul>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-4">
                There are three main finishes found across all 7176 variants
              </p>
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li><span className="font-bold">Black PVD</span> - (Produced on 7176, 7176 Military, 7176 D, 7176 S)</li>
                <li><span className="font-bold">Silver/Sable</span> - (Produced on 7176, 7176 Military, 7176 D, 7176 S)</li>
                <li><span className="font-bold">Green PVD</span> - (Exclusive to 7176 Military)</li>
              </ul>
            </div>
            <div className="flex flex-row gap-8 items-start justify-center">
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="7176 S Black PVD" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 S Black PVD</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="7176 S Silver/Sable" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 S Silver/Sable</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="7176 Military Green" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 Military Green</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/references/7176" className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors">
            ← Back to Reference 7176
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7176CaseFinishes; 