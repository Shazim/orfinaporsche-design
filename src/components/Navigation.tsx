
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-porsche-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-sans text-xl font-medium text-porsche-black tracking-wide">
            PORSCHE WATCH COLLECTION
          </Link>
          
          {/* Your Logo */}
          <img 
            src="/lovable-uploads/57816da8-ef5b-41e9-bb98-a818b25ffa69.png" 
            alt="OPD Logo" 
            className="w-12 h-12 object-contain"
          />
          
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/story" 
              className={`font-sans font-normal text-sm uppercase tracking-wider transition-colors hover:text-porsche-dark-gray ${
                isActive('/story') ? 'text-porsche-black' : 'text-porsche-dark-gray'
              }`}
            >
              Story
            </Link>
            
            <div className="relative">
              <button
                onMouseEnter={() => setReferencesOpen(true)}
                onMouseLeave={() => setReferencesOpen(false)}
                className="flex items-center font-sans font-normal text-sm uppercase tracking-wider text-porsche-dark-gray hover:text-porsche-black transition-colors"
              >
                References
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {referencesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-sm border border-porsche-light-gray z-50"
                  onMouseEnter={() => setReferencesOpen(true)}
                  onMouseLeave={() => setReferencesOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/references/7750" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Ref. 7750
                    </Link>
                    <Link to="/references/7176" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Ref. 7176
                    </Link>
                    <Link to="/references/7177" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Ref. 7177
                    </Link>
                    <Link to="/references/prototypes" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
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
                className="flex items-center font-sans font-normal text-sm uppercase tracking-wider text-porsche-dark-gray hover:text-porsche-black transition-colors"
              >
                Components
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {componentsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-sm border border-porsche-light-gray z-50"
                  onMouseEnter={() => setComponentsOpen(true)}
                  onMouseLeave={() => setComponentsOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/components/bracelets" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Bracelets
                    </Link>
                    <Link to="/components/straps" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Bund Straps
                    </Link>
                    <Link to="/components/hands" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Hands
                    </Link>
                    <Link to="/components/crowns" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Crowns
                    </Link>
                    <Link to="/components/movements" className="block px-4 py-3 font-sans text-xs uppercase tracking-wider text-porsche-dark-gray hover:bg-porsche-gray hover:text-porsche-black">
                      Movements
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`font-sans font-normal text-sm uppercase tracking-wider transition-colors hover:text-porsche-black ${
                isActive('/about') ? 'text-porsche-black' : 'text-porsche-dark-gray'
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
