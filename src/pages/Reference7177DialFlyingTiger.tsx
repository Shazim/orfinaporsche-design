import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialFlyingTiger = () => {
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
            <span className="text-porsche-black font-medium">Flying Tiger</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Flying Tiger Dial
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>The Flying Tiger Watches were Issued for the U.S. Air Force's 23rd Tactical Fighter Group.</p>
              <p>The 23rd Fighter Group is the home of the Air Force's legendary Flying Tigers and is stationed at Moody Air Force Base. The 23rd Fighter Group's primary mission is forward air control, close-air support, interdiction, and combat search and rescue operations.</p>
              <p>The 23rd Fighter Group traces its roots back to the 23rd Pursuit Group, which was formed on December 17, 1941, just 10 days after the Japanese attack on Pearl Harbor. The group had three squadrons assigned to carry out their mission: the 74th, 75th, and 76th Fighter Squadrons.</p>
              <p>A particularly interesting note is that the aircraft assigned to the group has the unique "Shark Teeth" nose art. The Flying Tigers are the only Air Force unit authorized to carry this distinctive and historical aircraft marking.</p>
              <p>The Flying Tiger watches were produced in two batches:​</p>
              <ul className="list-disc ml-6">
                <li>The first with the Mk. 1 Flying Tiger Dial possessing "U.S. Airforce" printing and the "Flying Tiger logo"</li>
                <li>The second with the Mk. 2 Flying Tiger Dial without "U.S. Airforce" printing but still retaining the "Flying Tiger logo"</li>
              </ul>
              <p>The casebacks of these watches were identical to that of the baseline 7177, and the majority of these watches were finished in either  Sandblasted Steel, Black PVD, or NTS PVD.</p>
            </div>
            {/* Right: Images stacked vertically */}
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/flying-tiger-crest.jpg" 
                  alt="Flying Tiger Crest" 
                  className="w-48 h-48 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-800 text-center">Flying Tiger Crest</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/flying-tiger-mk1.jpg" 
                  alt="Flying Tiger Mk. 1 Dial" 
                  className="w-48 h-48 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-800 text-center">Flying Tiger Mk. 1 Dial</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/flying-tiger-mk2.jpg" 
                  alt="Flying Tiger Mk. 2 Dial" 
                  className="w-48 h-48 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-800 text-center">Flying Tiger Mk. 2 Dial</span>
              </div>
            </div>
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

export default Reference7177DialFlyingTiger; 