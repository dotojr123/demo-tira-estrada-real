import React from 'react';
import Navigation from '../components/Navigation';
import HeroSlider from '../components/HeroSlider';
import PathsSection from '../components/PathsSection';
import PartnersBanner from '../components/PartnersBanner';
import WhyExploreSection from '../components/WhyExploreSection';
import PassportSection from '../components/PassportSection';
import RoutesSection from '../components/RoutesSection';
import ProductsSection from '../components/ProductsSection';
import DownloadsSection from '../components/DownloadsSection';
import Footer from '../components/Footer';

const NewHomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <PathsSection />
      <PartnersBanner />
      <WhyExploreSection />
      <PassportSection />
      <RoutesSection />
      <ProductsSection />
      <DownloadsSection />
      <Footer />
    </div>
  );
};

export default NewHomePage;