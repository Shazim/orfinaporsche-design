import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Reference7177CaseFinishes = () => {
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
            <span className="text-porsche-black font-medium">Case & Finishes</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Case & Finishes
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-6">
                The 7177's case is identical to that of the 7176's case, but differed in the available finishes.
              </p>
              <p className="font-sans text-lg text-porsche-black font-semibold mb-2">Measurements</p>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>Diameter: 40.6mm</li>
                <li>Lug-To-Lug: 44.2mm</li>
                <li>Height: 15.3mm</li>
              </ul>
              <p className="font-sans text-lg text-porsche-black font-semibold mb-2">There were five produced finishes of the 7177.</p>
              <ul className="space-y-2 text-porsche-dark-gray list-disc ml-6">
                <li>Non-PVD Sablè or Sandblasted Steel (Identical to the 7176 Finish)</li>
                <li>Black PVD (Identical to the 7176 Finish)</li>
                <li>Cadet Grey PVD (Only Available on the 7177)</li>
                <li>Olive Green PVD (Identical to the 7176 Military Finish)</li>
                <li>NTS PVD (Only Available on the 7177)</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/lovable-uploads/7177-case-finishes.jpg" 
                alt="Reference 7177 Case Finishes" 
                className="w-full max-w-md rounded shadow mb-4 object-contain mx-auto"
              />
              <span className="block text-base md:text-lg text-gray-600 mt-2 text-center">All 7177 Finishes</span>
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

export default Reference7177CaseFinishes; 