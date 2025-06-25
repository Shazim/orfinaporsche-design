import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-porsche-gray">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Your Logo */}
          <img 
            src="/lovable-uploads/57816da8-ef5b-41e9-bb98-a818b25ffa69.png" 
            alt="OPD Logo" 
            className="w-24 h-24 mx-auto mb-8 object-contain"
          />
          
          <h1 className="font-sans text-4xl md:text-6xl font-light text-porsche-black mb-8 tracking-wider uppercase">
            Porsche Watch
            <br />
            Collection
          </h1>
          <p className="font-sans text-lg md:text-xl font-light text-porsche-dark-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            A curated documentation of Porsche-inspired timepieces, celebrating the intersection of automotive excellence and horological precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/story" 
              className="bg-porsche-black text-white px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-porsche-dark-gray transition-colors"
            >
              Discover Our Story
            </Link>
            <Link 
              to="/references/7750" 
              className="border border-porsche-black text-porsche-black px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-porsche-black hover:text-white transition-all"
            >
              Explore References
            </Link>
          </div>
        </div>
      </section>

      {/* Featured References */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans text-3xl md:text-4xl font-light text-porsche-black mb-6 uppercase tracking-wider">
              Featured References
            </h2>
            <p className="font-sans text-lg text-porsche-dark-gray max-w-2xl mx-auto leading-relaxed">
              Each timepiece represents a unique chapter in the story of Porsche's influence on horological design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/references/7750" className="group">
              <div className="bg-white border border-porsche-light-gray overflow-hidden transition-all group-hover:shadow-sm">
                <div className="h-80 bg-porsche-gray flex items-center justify-center">
                  <span className="font-sans text-porsche-black text-2xl font-light uppercase tracking-wider">REF. 7750</span>
                </div>
                <div className="p-8">
                  <h3 className="font-sans text-xl font-normal text-porsche-black mb-4 uppercase tracking-wide">Reference 7750</h3>
                  <p className="font-sans text-porsche-dark-gray mb-6 leading-relaxed">
                    The quintessential chronograph inspired by Porsche's racing heritage.
                  </p>
                  <span className="font-sans text-porsche-black font-normal text-sm uppercase tracking-wider group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/references/7176" className="group">
              <div className="bg-white border border-porsche-light-gray overflow-hidden transition-all group-hover:shadow-sm">
                <div className="h-80 bg-porsche-gray flex items-center justify-center">
                  <span className="font-sans text-porsche-black text-2xl font-light uppercase tracking-wider">REF. 7176</span>
                </div>
                <div className="p-8">
                  <h3 className="font-sans text-xl font-normal text-porsche-black mb-4 uppercase tracking-wide">Reference 7176</h3>
                  <p className="font-sans text-porsche-dark-gray mb-6 leading-relaxed">
                    Classic elegance meets automotive precision in this timeless piece.
                  </p>
                  <span className="font-sans text-porsche-black font-normal text-sm uppercase tracking-wider group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/references/7177" className="group">
              <div className="bg-white border border-porsche-light-gray overflow-hidden transition-all group-hover:shadow-sm">
                <div className="h-80 bg-porsche-gray flex items-center justify-center">
                  <span className="font-sans text-porsche-black text-2xl font-light uppercase tracking-wider">REF. 7177</span>
                </div>
                <div className="p-8">
                  <h3 className="font-sans text-xl font-normal text-porsche-black mb-4 uppercase tracking-wide">Reference 7177</h3>
                  <p className="font-sans text-porsche-dark-gray mb-6 leading-relaxed">
                    Contemporary design language inspired by modern Porsche aesthetics.
                  </p>
                  <span className="font-sans text-porsche-black font-normal text-sm uppercase tracking-wider group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section className="py-24 bg-porsche-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans text-3xl md:text-4xl font-light text-porsche-black mb-6 uppercase tracking-wider">
              Premium Components
            </h2>
            <p className="font-sans text-lg text-porsche-dark-gray max-w-2xl mx-auto leading-relaxed">
              Every element crafted with the same attention to detail that defines Porsche engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Bracelets', path: '/components/bracelets' },
              { name: 'Hands', path: '/components/hands' },
              { name: 'Crowns', path: '/components/crowns' },
              { name: 'Movements', path: '/components/movements' },
              { name: 'Straps', path: '/components/straps' }
            ].map((component) => (
              <Link 
                key={component.name}
                to={component.path}
                className="group text-center p-8 bg-white border border-porsche-light-gray hover:shadow-sm transition-all"  
              >
                <div className="w-16 h-16 bg-porsche-light-gray mx-auto mb-6 flex items-center justify-center group-hover:bg-porsche-black transition-colors">
                  <span className="w-8 h-8 bg-porsche-dark-gray group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wider text-porsche-black group-hover:text-porsche-dark-gray transition-colors">
                  {component.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
