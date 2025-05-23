import React from 'react';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import ChooseUs from '../Components/ChooseUs';
import ChallengesSection from '../Components/ChallengesSection';
import Testimonials from '../Components/Testimonials';
import Routines from '../Components/Routines';
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ChooseUs></ChooseUs>
      <Routines />
      <Testimonials></Testimonials>
      <ChallengesSection />
      <Features></Features>
    </div>
  );
};

export default Home;
