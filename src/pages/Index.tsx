
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-fabel-sage-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by businesses like yours
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              See how Fabel is helping businesses transform their social media marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-fabel-blue-light">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-fabel-rose-light flex items-center justify-center text-fabel-rose-dark font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Jane Doe</h3>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Fabel has revolutionized how we approach social media. The AI-generated personas 
                helped us understand our audience better than ever before."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-fabel-blue-light">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-fabel-gold-light flex items-center justify-center text-fabel-gold-dark font-bold text-xl">
                  MS
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Mark Smith</h3>
                  <p className="text-sm text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The content generation capabilities save us hours every week. It's like having an 
                extra team member dedicated to our social media strategy."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-fabel-blue-light">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-fabel-blue-light flex items-center justify-center text-fabel-blue-dark font-bold text-xl">
                  AJ
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Alex Johnson</h3>
                  <p className="text-sm text-gray-600">Digital Agency Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We've been able to offer more comprehensive social media services to our clients 
                thanks to Fabel. It's now an essential part of our toolkit."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fabel-gold-light to-fabel-rose-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Ready to transform your social media strategy?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Join thousands of businesses using Fabel to create engaging, 
              targeted content for their audience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="btn-primary text-center">
                Sign up free
              </Link>
              <Link to="/contact" className="btn-outline text-center">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
