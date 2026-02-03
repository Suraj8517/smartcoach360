import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
<header className="w-[96%] bg-white/50 border border-gray-200 rounded-3xl mx-auto mt-2 sticky top-3 z-50 shadow-md backdrop-blur-md max-w-7xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <img src={logo} className="w-14" alt="logo"></img>
              </div>
              <span className="text-medium font-semibold text-gray-900 tracking-tighter">SmartCoach360</span>
            </div>
          </div>

          {/* Desktop Navigation 
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                Customers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              API
            </a>
          </nav>
*/}
          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors tracking-tighter">
              Contact Us
            </button>
            <button onClick={() =>
  window.open(
    "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
    "_blank"
  )
} className="tracking-tighter px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{ backgroundColor: '#6E0ACE' }}>
                                Book a Demo

            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">

            <nav className="flex flex-col gap-4">
                 {/*
              <button className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
                Customers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <a href="#" className="text-gray-700 hover:text-gray-900 py-2">
                Pricing
              </a>

              <button className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <a href="#" className="text-gray-700 hover:text-gray-900 py-2">
                API
              </a>
 */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-gray-900 font-medium py-2 text-center">
                  Contact Us
                </button>
                <button className="px-6 py-3 rounded-lg font-medium text-white w-full" style={{ backgroundColor: '#6E0ACE' }}>
                  Book a Demo
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;