import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Reference7750 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-porsche-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="font-sans text-sm">
            <Link to="/" className="text-porsche-dark-gray hover:text-porsche-black">Home</Link>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-dark-gray">References</span>
            <span className="mx-2 text-porsche-dark-gray">/</span>
            <span className="text-porsche-black font-medium">Ref. 7750</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Heading Top Left with Room for Picture */}
      <section className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Heading, text, historical context */}
            <div className="flex-1">
              <h1 className="font-sans text-5xl md:text-6xl font-light text-porsche-black mb-4 uppercase tracking-wider text-left">
                Reference <span className="text-porsche-black">7750</span>
              </h1>
              <p className="font-sans text-xl text-porsche-dark-gray leading-relaxed mb-6 text-left">
                The quintessential racing chronograph that embodies Porsche's motorsport heritage through precision engineering and timeless design.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-left">
                The Reference 7750 represents a pivotal moment in Porsche's horological journey, introduced during the height of the brand's motorsport dominance in the late 1970s. This timepiece was conceived as the ultimate driver's watch, designed to complement the precision instruments found in Porsche's racing cockpits.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-left">
                Built around the robust Valjoux 7750 movement, this chronograph became the foundation for numerous variations throughout its production run. The dial layout, with its distinctive subdial configuration, directly echoes the instrument cluster design of contemporary Porsche sports cars, creating an unmistakable visual connection between timepiece and automobile.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed text-left">
                Today, the Reference 7750 is recognized as one of the most important chronographs in Porsche's catalog, representing the perfect synthesis of automotive inspiration and horological excellence that would define the brand's approach to timekeeping for decades to come.
              </p>
            </div>
            {/* Right: Picture placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <img 
                src="/lovable-uploads/57816da8-ef5b-41e9-bb98-a818b25ffa69.png" 
                alt="Reference 7750 Watch" 
                className="w-80 h-80 object-contain bg-porsche-gray rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="py-8 bg-porsche-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-light text-porsche-black mb-8 text-center uppercase tracking-wider">Explore Details</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Link to="/references/7750/case-finishes" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-center text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Case & Finishes
                </h3>
              </div>
            </Link>
            
            <Link to="/references/7750/caseback" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-center text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Caseback
                </h3>
              </div>
            </Link>
            
            <Link to="/references/7750/rehaut" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-center text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Rehaut Variations
                </h3>
              </div>
            </Link>
            
            <Link to="/references/7750/dial" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 min-h-[18rem] flex flex-col justify-center text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Dial Variations
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Now at Bottom */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-12 text-center">Technical Specifications</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-8 py-6 bg-charcoal">
              <h3 className="font-playfair text-2xl font-bold text-white">Reference 7750 Specifications</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Reference Number</span>
                    <span className="font-inter text-charcoal">7750</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Production Years</span>
                    <span className="font-inter text-charcoal">1978-1995</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Case Size</span>
                    <span className="font-inter text-charcoal">40mm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Case Material</span>
                    <span className="font-inter text-charcoal">Stainless Steel</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Water Resistance</span>
                    <span className="font-inter text-charcoal">100m</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Movement</span>
                    <span className="font-inter text-charcoal">Valjoux 7750</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Power Reserve</span>
                    <span className="font-inter text-charcoal">48 Hours</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Frequency</span>
                    <span className="font-inter text-charcoal">28,800 vph</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Jewels</span>
                    <span className="font-inter text-charcoal">25</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-inter font-medium text-gray-700">Functions</span>
                    <span className="font-inter text-charcoal">Hours, Minutes, Seconds, Chronograph, Date</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to References */}
      <div className="py-8 bg-white border-t border-porsche-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center font-sans text-porsche-dark-gray hover:text-porsche-black transition-colors"
          >
            ← Back to References
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7750;
