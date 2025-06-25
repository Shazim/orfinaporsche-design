
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Porsche Watch
            <br />
            <span className="text-porsche-red">Collection</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            A curated documentation of Porsche-inspired timepieces, celebrating the intersection of automotive excellence and horological precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/story" 
              className="bg-porsche-red text-white px-8 py-4 font-inter font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Discover Our Story
            </Link>
            <Link 
              to="/references/7750" 
              className="border-2 border-white text-white px-8 py-4 font-inter font-medium rounded-md hover:bg-white hover:text-charcoal transition-all"
            >
              Explore References
            </Link>
          </div>
        </div>
      </section>

      {/* Featured References */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Featured References
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Each timepiece represents a unique chapter in the story of Porsche's influence on horological design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/references/7750" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="font-playfair text-white text-2xl">REF. 7750</span>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Reference 7750</h3>
                  <p className="font-inter text-gray-600 mb-4">
                    The quintessential chronograph inspired by Porsche's racing heritage.
                  </p>
                  <span className="font-inter text-porsche-red font-medium group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/references/7176" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="font-playfair text-white text-2xl">REF. 7176</span>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Reference 7176</h3>
                  <p className="font-inter text-gray-600 mb-4">
                    Classic elegance meets automotive precision in this timeless piece.
                  </p>
                  <span className="font-inter text-porsche-red font-medium group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/references/7177" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                  <span className="font-playfair text-white text-2xl">REF. 7177</span>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Reference 7177</h3>
                  <p className="font-inter text-gray-600 mb-4">
                    Contemporary design language inspired by modern Porsche aesthetics.
                  </p>
                  <span className="font-inter text-porsche-red font-medium group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Premium Components
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Every element crafted with the same attention to detail that defines Porsche engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
                className="group text-center p-6 rounded-lg border border-gray-200 hover:border-porsche-red transition-colors"  
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-porsche-red transition-colors">
                  <span className="w-8 h-8 bg-gray-300 rounded group-hover:bg-white transition-colors"></span>
                </div>
                <h3 className="font-inter font-medium text-charcoal group-hover:text-porsche-red transition-colors">
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
