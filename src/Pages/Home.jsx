import React from 'react';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import ChooseUs from '../Components/ChooseUs';
import ChallengesSection from '../Components/ChallengesSection';
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ChooseUs></ChooseUs>
      <ChallengesSection />
      <Features></Features>
    </div>
  );
};

export default Home;
