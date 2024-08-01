import React from 'react'

import bgImage from './industriesDetailBg.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding';
import OurApproach from '../Home/OurApproach/OurApproach';

const IndustryDetail = () => {
  const landingData = {
    bgImage,
    title: "Ecommerce Software Development",
  };

  return (
    <>
      <ReusableLanding
        bgImage={landingData.bgImage}
        title={landingData.title}
      />
      <OurApproach />
    </>
  )
}

export default IndustryDetail