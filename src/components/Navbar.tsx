
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-fabel-gold-dark">Fabel</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-fabel-gold-dark transition-colors">
              Home
            </Link>
            <Link to="/#features" className="text-gray-700 hover:text-fabel-gold-dark transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-gray-700 hover:text-fabel-gold-dark transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-fabel-gold-dark transition-colors">
              Login
            </Link>
            <Link to="/signup" className="btn-primary">
              Sign up free
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-fabel-gold-dark focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-fabel-gold-dark hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className="block px-3 py-2 text-gray-700 hover:text-fabel-gold-dark hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="block px-3 py-2 text-gray-700 hover:text-fabel-gold-dark hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 text-gray-700 hover:text-fabel-gold-dark hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="block px-3 py-2 btn-primary w-full text-center"
              onClick={toggleMenu}
            >
              Sign up free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
