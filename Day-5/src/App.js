import './App.css';
import React from 'react';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import CardSection from './Components/CardSection'
import FooterSection from './Components/FooterSection'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CardSection />
      <FooterSection />
    </div>
  )
}

export default App;
