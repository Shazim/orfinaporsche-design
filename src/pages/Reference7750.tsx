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

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-sans text-5xl md:text-6xl font-light text-porsche-black mb-6 uppercase tracking-wider">
                Reference <span className="text-porsche-black">7750</span>
              </h1>
              <p className="font-sans text-xl text-porsche-dark-gray leading-relaxed mb-8">
                The quintessential racing chronograph that embodies Porsche's motorsport heritage through precision engineering and timeless design.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-porsche-light-gray px-4 py-2 font-sans text-sm font-medium text-porsche-dark-gray uppercase tracking-wide">
                  Chronograph
                </span>
                <span className="bg-porsche-light-gray px-4 py-2 font-sans text-sm font-medium text-porsche-dark-gray uppercase tracking-wide">
                  Automatic Movement
                </span>
                <span className="bg-porsche-light-gray px-4 py-2 font-sans text-sm font-medium text-porsche-dark-gray uppercase tracking-wide">
                  Racing Heritage
                </span>
              </div>
            </div>
            <div className="bg-porsche-gray aspect-square flex items-center justify-center">
              <span className="font-sans text-porsche-black text-4xl font-light uppercase tracking-wider">REF. 7750</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="py-16 bg-porsche-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-light text-porsche-black mb-12 text-center uppercase tracking-wider">Explore Details</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/references/7750/case-finishes" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Case & Finishes
                </h3>
              </div>
            </Link>
            
            <Link to="/references/7750/caseback" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Caseback
                </h3>
              </div>
            </Link>
            
            <Link to="/references/7750/rehaut" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 text-center transition-all group-hover:shadow-sm">
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-medium text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  Rehaut Variations
                </h3>
              </div>
            </Link>
            
            <Link to="/references/7750/dial" className="group">
              <div className="bg-white border border-porsche-light-gray p-8 text-center transition-all group-hover:shadow-sm">
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

      {/* Technical Specifications */}
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

      {/* Historical Context */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-8">Historical Context</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 leading-relaxed mb-6">
              The Reference 7750 represents a pivotal moment in Porsche's horological journey, introduced during the height of the brand's motorsport dominance in the late 1970s. This timepiece was conceived as the ultimate driver's watch, designed to complement the precision instruments found in Porsche's racing cockpits.
            </p>
            <p className="font-inter text-gray-700 leading-relaxed mb-6">
              Built around the robust Valjoux 7750 movement, this chronograph became the foundation for numerous variations throughout its production run. The dial layout, with its distinctive subdial configuration, directly echoes the instrument cluster design of contemporary Porsche sports cars, creating an unmistakable visual connection between timepiece and automobile.
            </p>
            <p className="font-inter text-gray-700 leading-relaxed">
              Today, the Reference 7750 is recognized as one of the most important chronographs in Porsche's catalog, representing the perfect synthesis of automotive inspiration and horological excellence that would define the brand's approach to timekeeping for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* Components Used */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-12 text-center">Components Used</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/components/hands" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-porsche-red transition-colors">
                  <span className="w-8 h-1 bg-gray-400 rounded group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-inter font-bold text-charcoal mb-2 group-hover:text-porsche-red transition-colors">Racing Hands</h3>
                <p className="font-inter text-gray-600 text-sm">Luminous sport hands with distinctive racing-inspired design</p>
              </div>
            </Link>
            
            <Link to="/components/crowns" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-porsche-red transition-colors">
                  <span className="w-6 h-6 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-inter font-bold text-charcoal mb-2 group-hover:text-porsche-red transition-colors">Signed Crown</h3>
                <p className="font-inter text-gray-600 text-sm">Screw-down crown with Porsche Design signature</p>
              </div>
            </Link>
            
            <Link to="/components/bracelets" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-porsche-red transition-colors">
                  <span className="w-8 h-4 bg-gray-400 rounded group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-inter font-bold text-charcoal mb-2 group-hover:text-porsche-red transition-colors">Steel Bracelet</h3>
                <p className="font-inter text-gray-600 text-sm">Brushed stainless steel with fold-over clasp</p>
              </div>
            </Link>
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
