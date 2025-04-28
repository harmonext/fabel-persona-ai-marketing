
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-fabel-sage-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              AI-Powered Social Marketing for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Fabel creates targeted marketing content based on AI-generated personas, 
              tailored specifically to your business and audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary flex items-center justify-center">
                Sign up free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/login" className="btn-outline flex items-center justify-center">
                Login
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[350px] md:h-[400px] lg:h-[450px] bg-fabel-blue-light rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fabel-rose-light/30 to-fabel-blue-light/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                  <div className="w-full h-2/3 rounded bg-fabel-gold-light/20 mb-4 flex items-center justify-center">
                    <div className="text-fabel-gold-dark text-4xl font-bold">Fabel AI</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 bg-fabel-sage-light rounded"></div>
                    <div className="h-3 w-1/2 bg-fabel-sage-light rounded"></div>
                    <div className="h-3 w-2/3 bg-fabel-sage-light rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
