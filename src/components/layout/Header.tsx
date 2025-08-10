import React from 'react';

const Header: React.FC = () => (
  <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-5">
      <nav className="flex justify-between items-center py-4" aria-label="Main Navigation">
  <div className="text-xl font-bold text-gray-800" aria-label="ME Vs ME Fitness Home">ME Vs ME Fitness</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#features" className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none focus:text-indigo-600">Features</a></li>
          <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none focus:text-indigo-600">How It Works</a></li>
          <li><a href="#premium" className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none focus:text-indigo-600">Premium</a></li>
          <li><a href="#faq" className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none focus:text-indigo-600">FAQ</a></li>
        </ul>
  {/* Free Trial button removed for pre-launch state */}
      </nav>
    </div>
  {/* Floating CTA for mobile removed for pre-launch state */}
  </header>
);

export default Header;
