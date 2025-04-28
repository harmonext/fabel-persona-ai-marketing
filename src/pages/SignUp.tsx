
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [isHovered, setIsHovered] = useState<null | string>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-gray-600">
              Start your free trial, no credit card required
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <Link
                to="/signup/email"
                className={`w-full flex items-center justify-center px-4 py-3 border ${
                  isHovered === 'email' ? 'border-fabel-gold' : 'border-gray-300'
                } rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200`}
                onMouseEnter={() => setIsHovered('email')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Register with email
              </Link>
              
              <Link
                to="/signup/google"
                className={`w-full flex items-center justify-center px-4 py-3 border ${
                  isHovered === 'google' ? 'border-fabel-gold' : 'border-gray-300'
                } rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200`}
                onMouseEnter={() => setIsHovered('google')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  />
                </svg>
                Continue with Google
              </Link>
              
              <Link
                to="/signup/apple"
                className={`w-full flex items-center justify-center px-4 py-3 border ${
                  isHovered === 'apple' ? 'border-fabel-gold' : 'border-gray-300'
                } rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200`}
                onMouseEnter={() => setIsHovered('apple')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                  />
                </svg>
                Continue with Apple
              </Link>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <span className="text-gray-500">Already have an account?</span>{" "}
                <Link to="/login" className="font-medium text-fabel-gold-dark hover:text-fabel-gold">
                  Log in
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500">
            <p>
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-fabel-gold-dark hover:text-fabel-gold">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-fabel-gold-dark hover:text-fabel-gold">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
