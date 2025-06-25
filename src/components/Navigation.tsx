
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-light text-xl text-black tracking-wide">
            PORSCHE WATCH COLLECTION
          </Link>
          
          <img 
            src="/lovable-uploads/57816da8-ef5b-41e9-bb98-a818b25ffa69.png" 
            alt="OPD Logo" 
            className="w-12 h-12 object-contain"
          />
          
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/story" 
              className={`font-normal text-sm uppercase tracking-wider transition-colors hover:text-gray-600 ${
                isActive('/story') ? 'text-black' : 'text-gray-700'
              }`}
            >
              Story
            </Link>
            
            <div className="relative">
              <button
                onMouseEnter={() => setReferencesOpen(true)}
                onMouseLeave={() => setReferencesOpen(false)}
                className="flex items-center font-normal text-sm uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
              >
                References
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {referencesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 z-50"
                  onMouseEnter={() => setReferencesOpen(true)}
                  onMouseLeave={() => setReferencesOpen(false)}
                >
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <Link to="/references/7750" className="block font-medium text-sm text-black hover:text-gray-600">
                        Reference 7750
                      </Link>
                      <div className="ml-4 mt-1 space-y-1">
                        <Link to="/references/7750/case-finishes" className="block text-xs text-gray-600 hover:text-black">
                          Case & Finishes
                        </Link>
                        <Link to="/references/7750/caseback" className="block text-xs text-gray-600 hover:text-black">
                          Caseback
                        </Link>
                        <Link to="/references/7750/rehaut" className="block text-xs text-gray-600 hover:text-black">
                          Rehaut Variations
                        </Link>
                        <Link to="/references/7750/dial" className="block text-xs text-gray-600 hover:text-black">
                          Dial Variations
                        </Link>
                      </div>
                    </div>
                    
                    <div className="px-4 py-2 border-b border-gray-100">
                      <Link to="/references/7176" className="block font-medium text-sm text-black hover:text-gray-600">
                        Reference 7176
                      </Link>
                      <div className="ml-4 mt-1 space-y-1">
                        <Link to="/references/7176/case-finishes" className="block text-xs text-gray-600 hover:text-black">
                          Case & Finishes
                        </Link>
                        <Link to="/references/7176/caseback" className="block text-xs text-gray-600 hover:text-black">
                          Caseback
                        </Link>
                        <Link to="/references/7176/rehaut" className="block text-xs text-gray-600 hover:text-black">
                          Rehaut Variations
                        </Link>
                        <Link to="/references/7176/dial" className="block text-xs text-gray-600 hover:text-black">
                          Dial Variations
                        </Link>
                      </div>
                    </div>
                    
                    <div className="px-4 py-2 border-b border-gray-100">
                      <Link to="/references/7177" className="block font-medium text-sm text-black hover:text-gray-600">
                        Reference 7177
                      </Link>
                      <div className="ml-4 mt-1 space-y-1">
                        <Link to="/references/7177/case-finishes" className="block text-xs text-gray-600 hover:text-black">
                          Case & Finishes
                        </Link>
                        <Link to="/references/7177/caseback" className="block text-xs text-gray-600 hover:text-black">
                          Caseback
                        </Link>
                        <Link to="/references/7177/rehaut" className="block text-xs text-gray-600 hover:text-black">
                          Rehaut Variations
                        </Link>
                        <Link to="/references/7177/dial" className="block text-xs text-gray-600 hover:text-black">
                          Dial Variations
                        </Link>
                      </div>
                    </div>
                    
                    <div className="px-4 py-2">
                      <Link to="/references/prototypes" className="block font-medium text-sm text-black hover:text-gray-600">
                        Prototypes
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onMouseEnter={() => setComponentsOpen(true)}
                onMouseLeave={() => setComponentsOpen(false)}
                className="flex items-center font-normal text-sm uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
              >
                Components
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {componentsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-50"
                  onMouseEnter={() => setComponentsOpen(true)}
                  onMouseLeave={() => setComponentsOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/components/bracelets" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Bracelets
                    </Link>
                    <Link to="/components/straps" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Bund Straps
                    </Link>
                    <Link to="/components/hands" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Hands
                    </Link>
                    <Link to="/components/crowns" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Crowns
                    </Link>
                    <Link to="/components/movements" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Movements
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`font-normal text-sm uppercase tracking-wider transition-colors hover:text-black ${
                isActive('/about') ? 'text-black' : 'text-gray-700'
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
