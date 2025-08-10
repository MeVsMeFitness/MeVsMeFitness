// App.tsx
// Main application entry point

import React, { useEffect } from 'react';
import { initAnalytics } from './utils/analytics';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import FeatureBreakdownSection from './components/sections/FeatureBreakdownSection';
import PremiumSection from './components/sections/PremiumSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';


const App: React.FC = () => {
  useEffect(() => {
    initAnalytics();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FeatureBreakdownSection />
      <PremiumSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
