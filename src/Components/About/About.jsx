import React from 'react'
import bgImage from './aboutus.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding';
import OurApproach from '../Home/OurApproach/OurApproach';
import MeetTheTeam from '../Home/MeetTheTeam/MeetTheTeam';
import WhyChooseUs from '../Home/WhyChooseUs/WhyChooseUs';
import ValuesnVision from './ValuesnVision/ValuesnVision';

const About = () => {
  const landingData = {
    bgImage,
    title: "About us",
  };

  return (
    <>
      <ReusableLanding
        bgImage={landingData.bgImage}
        title={landingData.title}
        showSlider={true}
      />
      <WhyChooseUs forAboutUs={true} />
      <OurApproach />
      <ValuesnVision />
      <MeetTheTeam />
    </>
  )
}

export default About