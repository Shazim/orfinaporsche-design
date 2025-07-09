import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7176Caseback = () => {
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
            <span className="text-porsche-black font-medium">Caseback</span>
          </nav>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7176 - Caseback
          </h1>
          <div className="flex flex-col gap-12">
            {/* 7176 Mk. 1 Caseback */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">7176 Mk. 1 Caseback</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>The 7176 and 7176 Military casebacks follows the design language change of the caseback first seen on the 7750 Mk. 2 caseback</li>
                  <li>The caseback is marked, “7176 CHRONOGRAPH AUTOMATIC WATERRESISTANT TESTED 10 ATM SHOCKPROTECTED STAINLESS STEEL SWISS MADE” in one continuous circle at the perimeter of the back.</li>
                  <li>In the center features a PD logo.</li>
                  <li>Above the logo are the words “PORSCHE DESIGN” curved around it.</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img src="/placeholder.svg" alt="7176 Mk. 1 Caseback" className="w-64 h-64 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 Mk. 1 Caseback</span>
              </div>
            </div>
            {/* 7176 D Caseback */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">7176 D Caseback</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>For the 7176 D, the casebacks are identical to that of the 7176 Mk. 1, but with an additional “D” next to 7176.</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img src="/placeholder.svg" alt="7176 D Caseback" className="w-64 h-64 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 D Caseback</span>
              </div>
            </div>
            {/* 7176 S Caseback */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">7176 S Caseback</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>For the 7176 S, the casebacks are identical to that of the 7176 Mk. 1, but with an additional “S” next to 7176.</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img src="/placeholder.svg" alt="7176 S Caseback" className="w-64 h-64 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 S Caseback</span>
              </div>
            </div>
            {/* 7176 Prototype Caseback */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">Prototype Rehaut</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>On select 7176 variants, usually those identified as prototypes, a different caseback has been identified. It feature a black acrylic disk that is idented into the steel caseback.</li>
                  <li>The caseback is marked, “7176 S CHRONOGRAPH AUTOMATIC WATERRESISTANT TESTED 10 ATM SHOCKPROTECTED STAINLESS STEEL SWISS MADE” in one continuous circle at the perimeter of the back.</li>
                  <li>In the center features a sizeable PD logo.</li>
                  <li>Above the logo are the words “PORSCHE DESIGN” curved around it.</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img src="/placeholder.svg" alt="7176 Prototype Caseback" className="w-64 h-64 object-contain bg-porsche-gray rounded shadow mb-2" />
                <span className="text-base md:text-lg text-gray-600 mt-2">7176 Prototype Caseback</span>
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

export default Reference7176Caseback; 