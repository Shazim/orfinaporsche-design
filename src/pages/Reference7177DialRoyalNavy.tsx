import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Reference7177DialRoyalNavy = () => {
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
            <span className="text-porsche-black font-medium">Royal Navy</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
            Reference 7177 - Royal Navy Dial
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="max-w-3xl text-porsche-dark-gray text-lg leading-relaxed space-y-6 mb-8">
              <p>The Royal Navy variant has two debated origins.</p>
              <p>The first is that these are quasi-issued and were not issued to NATO stock, as they lack the traditional broad arrow and any typical MOD markings.</p>
              <p>The other theory is that they were, in fact, issued to NATO stock but only a small number for evaluation by the Royal Navy - all of which were marked and issued with a NATO stock code on their caseback.</p>
              <p>It is also believed that most, if not all, were issued on the following style bracelet, and have a sandblasted steel finish. However, examples have been seen in a NTS PVD case.</p>
            </div>
            {/* Right: Images stacked vertically */}
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/royal-navy-bracelet.jpg" 
                  alt="Royal Navy on Issued Bracelet" 
                  className="w-72 h-72 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-800 text-center">Royal Navy on Issued Bracelet</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/royal-navy-nts-pvd.jpg" 
                  alt="Royal Navy with NTS PVD Case" 
                  className="w-72 h-72 object-cover rounded shadow mb-2 mx-auto"
                />
                <span className="block text-base md:text-lg text-gray-800 text-center">Royal Navy with NTS PVD Case</span>
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

export default Reference7177DialRoyalNavy; 