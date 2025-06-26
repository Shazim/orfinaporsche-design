import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const location = useLocation();
  const referencesRef = useRef(null);
  const componentsRef = useRef(null);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (referencesRef.current && !referencesRef.current.contains(event.target)) {
        setReferencesOpen(false);
      }
      if (componentsRef.current && !componentsRef.current.contains(event.target)) {
        setComponentsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-8">
          <Link to="/" className="font-bold text-3xl text-black tracking-wide mr-8 whitespace-nowrap">
            ORFINA PORSCHE DESIGN
          </Link>
          
          <div className="flex-1 flex justify-center items-center space-x-12">
            <Link 
              to="/story" 
              className={`font-normal text-base uppercase tracking-wider transition-colors hover:text-gray-600 ${
                isActive('/story') ? 'text-black' : 'text-gray-700'
              }`}
            >
              Story
            </Link>
            
            <div className="relative" ref={referencesRef}>
              <button
                className="flex items-center font-normal text-base uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
                onClick={() => setReferencesOpen((open) => !open)}
                aria-expanded={referencesOpen}
                aria-haspopup="true"
              >
                References
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {referencesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 z-50">
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
                        Reference 7176, 7176 Military, 7176D, 7176S
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
            
            <div className="relative" ref={componentsRef}>
              <button
                className="flex items-center font-normal text-base uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
                onClick={() => setComponentsOpen((open) => !open)}
                aria-expanded={componentsOpen}
                aria-haspopup="true"
              >
                Components
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {componentsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-50">
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
                    <Link to="/components/date-wheels" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Date Wheels
                    </Link>
                    <Link to="/components/boxes" className="block px-4 py-3 text-xs uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-black">
                      Boxes
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`font-normal text-base uppercase tracking-wider transition-colors hover:text-black ${
                isActive('/about') ? 'text-black' : 'text-gray-700'
              }`}
            >
              About
            </Link>
          </div>
          
          <img 
            src="/lovable-uploads/opd-watch.png" 
            alt="OPD Watch Logo" 
            className="w-20 h-20 object-contain ml-8"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
