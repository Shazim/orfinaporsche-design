import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7176Rehaut = () => {
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
            <span className="text-porsche-black font-medium">Rehaut Variations</span>
          </nav>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7176 - Rehaut Variations
          </h1>
          <div className="flex flex-col gap-12">
            {/* Yellow Triangle Rehaut */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">Yellow Triangle Rehaut</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>The Yellow Triangle rehaut features a Yellow Triangle Rehaut with the word “TACHYMETER” printed between 12 and 2 O'clock</li>
                  <li>Found On: 7176, 7176 Military</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img src="/placeholder.svg" alt="Yellow Triangle Rehaut" className="w-64 h-64 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">Yellow Triangle Rehaut</span>
              </div>
            </div>
            {/* TACHYMETRE Rehaut */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">TACHYMETRE Rehaut</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>The TACHYMETRE rehaut removes the the triangle at twelve o’clock, possesses an overall thicker font, and the word “TACHYMETRE” is printed between 12 and 2 O'clock.</li>
                  <li>Found On: 7176 D, 7176 S</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img src="/placeholder.svg" alt="TACHYMETRE Rehaut" className="w-64 h-64 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">TACHYMETRE Rehaut</span>
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

export default Reference7176Rehaut; 