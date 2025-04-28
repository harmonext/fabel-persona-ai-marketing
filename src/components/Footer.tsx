
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-fabel-gold-dark">Fabel</span>
            </Link>
            <p className="text-gray-600 mb-4">
              AI-powered social media marketing platform for modern businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-gray-600 hover:text-fabel-gold-dark">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-600 hover:text-fabel-gold-dark">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-fabel-gold-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Fabel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="text-gray-500 hover:text-fabel-gold-dark">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-500 hover:text-fabel-gold-dark">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-500 hover:text-fabel-gold-dark">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
