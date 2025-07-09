import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Reference7750CaseFinishes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <Link to="/references/7750" className="text-porsche-dark-gray hover:text-porsche-black">Ref. 7750</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Case & Finishes</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7750 - Case & Finishes
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: TEXT */}
            <div>
              <p className="font-sans text-lg font-bold text-porsche-black mb-4">There are three main case variations for the 7750</p>
              <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                <li>Orfina 7750 Flat Top – a.k.a Mk.1</li>
                <li>Orfina 7750 Transitional Thin Top – a.k.a Mk. 2</li>
                <li>Orfina 7750 [FLAT-FACE - MODERN] - a.k.a Mk. 3 a.k.a Revised by Orfina Swiss S.A</li>
              </ul>
              <p className="mb-8 text-porsche-dark-gray">The three marks of the 7750 case were produced in a mix of Powder Coat Black, Black PVD, and Silver/Sable</p>

              {/* Mk. 1 Section (text only, full width) */}
              <div className="lg:col-span-2 mb-16">
                <p className="font-sans text-lg font-bold text-porsche-black mb-2">7750 Flat Top – a.k.a Mk. 1</p>
                <p className="font-sans text-lg text-porsche-dark-gray mb-2 font-semibold">Measurements</p>
                <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                  <li>Diameter: 40.3mm</li>
                  <li>Lug-To-Lug: 42.5mm</li>
                  <li>Height: 14.2mm</li>
                </ul>
                <p className="mb-6 text-porsche-dark-gray">
                  The "Flat Top" / "Flat Face" is the case that started it all. The timeless design of the Porsche Design Chronograph starts its story here. Dr. Ferdinand Alexander "Butzi" Porsche's initial design, which as legend has it took inspiration from the gauges of the original 911 that he had designed in 1963. Dr. Porsche's credo was "Design must be functional and functionality has to be translated visually into aesthetics, without gags that have to be explained first." This is often stated as "form follows function". With this visual translation from a 911's gauges to a watch face with a simple bezel surrounding it we see the rest of the case design continue to follow this design principle. The height of the "flat" face (which mimics the simple bezels of VDO gauges of the day) rises from the base of the case just enough to fit the hand set and rehaut. The overall body of the case then extends out to provide a proper presence on the wrist and include integrated hidden lugs. Because of the use of hidden lugs it could be machined from a single block, adding rigidity and a very masculine and sporty sensibility. The case geometry and dimensions are clean and minimalist, lacking unnecessary flourishes or embellishments. This is the birthplace of 50+ years of Porsche Design DNA.
                </p>
              </div>

              <p className="font-sans text-lg text-porsche-black font-semibold mb-2">There are two finishes that were produced on the 7750 Mk.1 Case</p>

              {/* Powder Coat Black row */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
                <div>
                  <p className="mb-4 text-porsche-dark-gray">
                    <span className="font-bold">Powder Coat Black</span> - the original units produced between 1973 – 1975 are often mistakenly believed to be the first black PVD chronograph, they were in fact powder coated with black paint. This coating is thicker and more easily "flaked" than PVD.
                  </p>
                  <p className="mb-2 text-porsche-dark-gray">7750 Powder Coat Black</p>
                  <p className="mb-2 text-porsche-dark-gray">7750 Powder Coat Black</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/7177-caseback.jpg" alt="7750 Powder Coat Black" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                </div>
              </div>

              {/* Silver/Sable row */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
                <div>
                  <p className="mb-4 text-porsche-dark-gray">
                    <span className="font-bold">Silver/Sable</span> - in a Sandblasted Silver similar to that seen on the 7176 and 7177. However, we are unsure to the exact timeline of the 7750 Mk. 1 Silver/Sable, but one can assume they were made in a similar timeline to that of the 7750 Mk. 1 Powder Coat Black cases.
                  </p>
                  <p className="mb-2 text-porsche-dark-gray">7750 Silver/Sable</p>
                  <p className="mb-2 text-porsche-dark-gray">7750 Silver/Sable</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/7177-standard-rehaut.jpg" alt="7750 Silver/Sable" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                </div>
              </div>

              {/* Mk. 2 Section (text only, full width) */}
              <div className="lg:col-span-2 mb-16">
                <p className="font-sans text-lg font-bold text-porsche-black mb-2">7750 Transitional Thin Top – a.k.a Mk. 2</p>
                <p className="font-sans text-lg text-porsche-dark-gray mb-2 font-semibold">Measurements</p>
                <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                  <li>Diameter:</li>
                  <li>Lug-To-Lug:</li>
                  <li>Height:</li>
                </ul>
                <p className="mb-6 text-porsche-dark-gray">
                  In 1975, as a reaction to the Quartz Crisis, Valjoux halted production and availability of the 7750 to most manufacturers including Orfina. Porsche Design & Orfina were faced with a dilemma of what movement to transition to in order to continue producing their watches. Dr. Porsche wanted to retain an automatic chronograph movement in his watch. This led them to switch to the Lemania 5100. They designed a new case in order to fit the dimensions of the new movement as it would not fit in the existing 7750 cases. The new case would be used with the 7176 and 7177 models. Some cases were produced (whether the same case vendor was used or not is unknown) with the new design, but thinned to fit a Valjoux 7750, which Orfina still had some inventory of. Given the design similarities it is believed that these cases would date to later in 1975 - 1976.
                </p>
                <p className="font-sans text-lg text-porsche-black font-semibold mb-2">There are two finishes that were produced on the 7750 Mk. 2 case</p>
                
                {/* Black PVD row */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
                  <div>
                    <p className="mb-4 text-porsche-dark-gray">
                      <span className="font-bold">Black PVD</span> - these represent the first PVD cases.
                    </p>
                    <p className="mb-2 text-porsche-dark-gray">Production Years: 1975-1976</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/lovable-uploads/7177-caseback.jpg" alt="7750 Mk. 2 Black PVD" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                  </div>
                </div>
                
                <div className="mb-24"></div>
                
                {/* Silver/Sable row */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
                  <div>
                    <p className="mb-4 text-porsche-dark-gray">
                      <span className="font-bold">Silver/Sable</span> - matte finished stainless steel
                    </p>
                    <p className="mb-2 text-porsche-dark-gray">Production Years: 1975-1975</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/lovable-uploads/7177-standard-rehaut.jpg" alt="7750 Mk. 2 Silver/Sable" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                  </div>
                </div>
              </div>

              {/* Mk. 2 Section (Duplicate) */}
              <div className="lg:col-span-2 mb-16">
                <p className="font-sans text-lg font-bold text-porsche-black mb-2">Orfina 7750 [FLAT-FACE - Service] - a.k.a Mk. 3 a.k.a Revised by Orfina Swiss S.A</p>
                <p className="font-sans text-lg text-porsche-dark-gray mb-2 font-semibold">Measurements</p>
                <ul className="mb-6 text-porsche-dark-gray list-disc ml-6">
                  <li>Diameter:</li>
                  <li>Lug-To-Lug:</li>
                  <li>Height:</li>
                </ul>
                <p className="mb-6 text-porsche-dark-gray">
                  Similar in design and aesthetic to the MK. 1 “Flat Top” / “Flat Face”, it has a flat face. It is offered by Orfina Swiss SA as a replacement to original damaged or othewize unusable cases as a modern replacement. These cases feature a larger crown as the replacement crown produced for Orfina Swiss SA is larger than the originals and restored water resistant rating of the watch. This case also features larger pushers and mortices milled to fit the larger crown and pushers.
                </p>
                <p className="font-sans text-lg text-porsche-black font-semibold mb-2">There are two finishes that were produced on the 7750 MK. 3 case.</p>
                {/* Black PVD row */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
                  <div>
                    <p className="mb-4 text-porsche-dark-gray">
                      <span className="font-bold">Black PVD</span>
                    </p>
                    <p className="mb-2 text-porsche-dark-gray">Production Years:  2000+</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/lovable-uploads/7177-caseback.jpg" alt="7750 Mk. 3 Black PVD" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                  </div>
                </div>
                <div className="mb-24"></div>
                {/* Silver/Sable row */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
                  <div>
                    <p className="mb-4 text-porsche-dark-gray">
                      <span className="font-bold">Silver/Sable</span> - matte finished stainless steel
                    </p>
                    <p className="mb-2 text-porsche-dark-gray">Production Years:  2000+</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/lovable-uploads/7177-standard-rehaut.jpg" alt="7750 Mk. 3 Silver/Sable" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow mb-2" />
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT: IMAGES */}
            <div className="flex flex-col items-start justify-start gap-8 mt-[4in]">
              {/* Mk. 1 Images */}
              <div className="flex flex-col items-center w-full mb-8">
                <div className="flex flex-row gap-4 mb-2">
                  <img src="/lovable-uploads/7177-caseback.jpg" alt="7750 Flat Top Mk. 1" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow" />
                  <img src="/lovable-uploads/7177-standard-rehaut.jpg" alt="7750 Flat Top Mk. 1" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow" />
                </div>
                <span className="block text-base md:text-lg text-gray-600 text-center">7750 Flat Top – a.k.a Mk. 1</span>
              </div>
              {/* Mk. 2 Images */}
              <div className="flex flex-col items-center w-full mb-8 mt-[1056px]">
                <div className="flex flex-row gap-4 mb-2">
                  <img src="/lovable-uploads/7177-caseback.jpg" alt="7750 Transitional Thin Top Mk. 2 Black PVD" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow" />
                  <img src="/lovable-uploads/7177-standard-rehaut.jpg" alt="7750 Transitional Thin Top Mk. 2 Silver/Sable" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow" />
                </div>
                <span className="block text-base md:text-lg text-gray-600 text-center">7750 Transitional Thin Top – a.k.a Mk. 2</span>
              </div>
              {/* Mk. 3 Images */}
              <div className="flex flex-col items-center w-full mb-8 mt-[816px]">
                <div className="flex flex-row gap-4 mb-2">
                  <img src="/lovable-uploads/7177-caseback.jpg" alt="7750 Mk. 3 Black PVD" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow" />
                  <img src="/lovable-uploads/7177-standard-rehaut.jpg" alt="7750 Mk. 3 Silver/Sable" className="w-48 h-48 object-contain bg-porsche-gray rounded shadow" />
                </div>
                <span className="block text-base md:text-lg text-gray-600 text-center">Orfina 7750 [FLAT-FACE - Service] – a.k.a Mk. 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/references/7750" 
            className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors"
          >
            ← Back to Reference 7750
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7750CaseFinishes;
