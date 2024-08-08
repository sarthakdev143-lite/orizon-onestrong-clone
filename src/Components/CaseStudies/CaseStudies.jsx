import React from 'react'
import bgImage from './imgs/caseStudies.jpg';
import ReusableLanding from '../ReusableLanding/ReusableLanding';
import Case_Studies from '../Home/Case_Studies/Case_Studies';

const CaseStudies = () => {
  const landingData = {
    bgImage,
    title: "Case Studies",
  };

  return (
    <>
      <ReusableLanding
        bgImage={landingData.bgImage}
        title={landingData.title}
        showSlider={false}
        fullHeight={true}
      />
      <Case_Studies showHead={false} />
    </>
  )
}

export default CaseStudies