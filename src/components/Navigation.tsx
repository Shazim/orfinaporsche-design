
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-playfair text-xl font-bold text-charcoal">
            Porsche Watch Collection
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/story" 
              className={`font-inter font-medium transition-colors hover:text-porsche-red ${
                isActive('/story') ? 'text-porsche-red' : 'text-charcoal'
              }`}
            >
              Story
            </Link>
            
            <div className="relative">
              <button
                onMouseEnter={() => setReferencesOpen(true)}
                onMouseLeave={() => setReferencesOpen(false)}
                className="flex items-center font-inter font-medium text-charcoal hover:text-porsche-red transition-colors"
              >
                References
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {referencesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border border-gray-200 rounded-md z-50"
                  onMouseEnter={() => setReferencesOpen(true)}
                  onMouseLeave={() => setReferencesOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/references/7750" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Ref. 7750
                    </Link>
                    <Link to="/references/7176" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Ref. 7176
                    </Link>
                    <Link to="/references/7177" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Ref. 7177
                    </Link>
                    <Link to="/references/prototypes" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Prototypes
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onMouseEnter={() => setComponentsOpen(true)}
                onMouseLeave={() => setComponentsOpen(false)}
                className="flex items-center font-inter font-medium text-charcoal hover:text-porsche-red transition-colors"
              >
                Components
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {componentsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border border-gray-200 rounded-md z-50"
                  onMouseEnter={() => setComponentsOpen(true)}
                  onMouseLeave={() => setComponentsOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/components/bracelets" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Bracelets
                    </Link>
                    <Link to="/components/straps" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Bund Straps
                    </Link>
                    <Link to="/components/hands" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Hands
                    </Link>
                    <Link to="/components/crowns" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Crowns
                    </Link>
                    <Link to="/components/movements" className="block px-4 py-2 font-inter text-sm text-charcoal hover:bg-gray-50 hover:text-porsche-red">
                      Movements
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`font-inter font-medium transition-colors hover:text-porsche-red ${
                isActive('/about') ? 'text-porsche-red' : 'text-charcoal'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
