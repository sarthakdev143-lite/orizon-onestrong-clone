import React from 'react'
import bgImage from './imgs/caseStudies.jpg';
import ReusableLanding from '../ReusableLanding/ReusableLanding';
import CaseStudies from '../Home/CaseStudies/CaseStudies';

const CaseStudies2 = () => {
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
      <CaseStudies showHead={false} />
    </>
  )
}

export default CaseStudies2