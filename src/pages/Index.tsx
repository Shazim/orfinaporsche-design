
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-4xl mx-auto px-4">
          <img 
            src="/lovable-uploads/57816da8-ef5b-41e9-bb98-a818b25ffa69.png" 
            alt="OPD Logo" 
            className="w-24 h-24 mx-auto mb-8 object-contain"
          />
          
          <h1 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wider uppercase">
            Porsche Watch
            <br />
            Collection
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A curated documentation of Porsche-inspired timepieces, celebrating the intersection of automotive excellence and horological precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/story" 
              className="bg-black text-white px-8 py-4 font-normal text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Discover Our Story
            </Link>
            <Link 
              to="/references/7750" 
              className="border border-black text-black px-8 py-4 font-normal text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
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
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6 uppercase tracking-wider">
              Featured References
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Each timepiece represents a unique chapter in the story of Porsche's influence on horological design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/references/7750" className="group">
              <div className="bg-white border border-gray-200 overflow-hidden transition-all group-hover:shadow-lg">
                <div className="h-80 bg-gray-50 flex items-center justify-center">
                  <span className="text-black text-2xl font-light uppercase tracking-wider">REF. 7750</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-normal text-black mb-4 uppercase tracking-wide">Reference 7750</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The quintessential chronograph inspired by Porsche's racing heritage.
                  </p>
                  <span className="text-black font-normal text-sm uppercase tracking-wider group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/references/7176" className="group">
              <div className="bg-white border border-gray-200 overflow-hidden transition-all group-hover:shadow-lg">
                <div className="h-80 bg-gray-50 flex items-center justify-center">
                  <span className="text-black text-2xl font-light uppercase tracking-wider">REF. 7176</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-normal text-black mb-4 uppercase tracking-wide">Reference 7176</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Classic elegance meets automotive precision in this timeless piece.
                  </p>
                  <span className="text-black font-normal text-sm uppercase tracking-wider group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/references/7177" className="group">
              <div className="bg-white border border-gray-200 overflow-hidden transition-all group-hover:shadow-lg">
                <div className="h-80 bg-gray-50 flex items-center justify-center">
                  <span className="text-black text-2xl font-light uppercase tracking-wider">REF. 7177</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-normal text-black mb-4 uppercase tracking-wide">Reference 7177</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Contemporary design language inspired by modern Porsche aesthetics.
                  </p>
                  <span className="text-black font-normal text-sm uppercase tracking-wider group-hover:underline">
                    Explore Details →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Social Media Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 uppercase tracking-wider">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Connect with us to learn more about our collection or discuss your passion for Porsche timepieces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <a 
              href="mailto:contact@porschewatchcollection.com"
              className="bg-black text-white px-8 py-4 font-normal text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
