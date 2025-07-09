import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7176Dial = () => {
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
            <span className="text-porsche-black font-medium">Dial Variations</span>
          </nav>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7176 - Dial Variations
          </h1>
          <div className="flex flex-col gap-12">
            <p className="font-sans text-lg text-porsche-dark-gray leading-relaxed mb-4">
              There are two main dials produced across the 7176 generation.<br />
              The 7176 dial is an update of the 7750 PD dial to match subdial placement of the Lemania 5100. Notable changes include a 12-oclock 24-hour dial, no lume or marker at 12-oclock because of the position of the subdial, and different ring printing of the small seconds subdial at 9-oclock.
            </p>
            {/* Civilian Dial */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">Civilian Dial</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>Found On: 7176, 7176 D, 7176 S</li>
                  <li>As with the 7750 PD dial, the PD logo is printed above Day/Date windows and PORSCHE DESIGN is printed below Day/Date windows.</li>
                  <li>The also 7176 ushered in a new hand set differentiated from the 7750 with:</li>
                  <ul className="list-disc ml-10 text-gray-700 mb-2">
                    <li>New hour and pointed minute hands.</li>
                    <li>Red central chrono sweep hand</li>
                    <li>“Lollipop” chrono totalizer hand</li>
                  </ul>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row gap-8 flex-1 items-center justify-center">
                <div className="flex flex-col items-center">
                  <img src="/placeholder.svg" alt="7176 with Civilian Dial" className="w-56 h-56 object-contain bg-porsche-gray rounded shadow mb-2" />
                  <span className="text-base md:text-lg text-gray-600 mt-2">7176 with Civilian Dial</span>
                </div>
                <div className="flex flex-col items-center relative">
                  <img src="/placeholder.svg" alt="7176 D with Civilian Dial" className="w-56 h-56 object-contain bg-porsche-gray rounded shadow mb-2" />
                  <span className="text-base md:text-lg text-gray-600 mt-2">7176 D with Civilian Dial</span>
                  <div className="absolute top-0 right-[-260px] w-64 p-4 bg-yellow-100 border-l-4 border-yellow-400 rounded shadow flex items-center" style={{ minWidth: '16rem' }}>
                    <span className="font-sans text-base text-porsche-dark-gray">
                      <span className="font-semibold">Specific Note -</span> The 7176 D exclusively features German Day/Date Wheels, as it was only sold in German Markets.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Military Dial */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-8">
              <div className="flex-1">
                <h2 className="font-sans text-2xl font-bold text-porsche-black mb-2">Military Dial</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-4">
                  <li>Found On: 7176 Military, 7176 D</li>
                  <li>The 7176 Military is features the fiirst appearance of the Military dial. The dial is an update of the 7176 Civilian dial. Notable changes include the introduction of the 3H logo as to meet military specifications, watches in the field utilizing Tritium (3H) lume must carry a marking on the dial indicating its use. This logo is printed in RED at 1:30 on the dial.</li>
                  <li>The Military dial also includes a Military handset with:</li>
                  <ul className="list-disc ml-10 text-gray-700 mb-2">
                    <li>Hour and minutes hands same as 7176 Civilian</li>
                    <li>Red central chrono sweep hand</li>
                    <li>Red painted “Airplane” on a black chrono totalizer hand</li>
                    <li>Red hand used for 6-oclock subdial</li>
                  </ul>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row gap-8 flex-1 items-center justify-center">
                <div className="flex flex-col items-center">
                  <img src="/placeholder.svg" alt="7176 Military with Military Dial" className="w-56 h-56 object-contain bg-porsche-gray rounded shadow mb-2" />
                  <span className="text-base md:text-lg text-gray-600 mt-2">7176 Military with Military Dial</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/placeholder.svg" alt="7176 D with Military Dial" className="w-56 h-56 object-contain bg-porsche-gray rounded shadow mb-2" />
                  <span className="text-base md:text-lg text-gray-600 mt-2">7176 D with Military Dial</span>
                </div>
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

export default Reference7176Dial; 