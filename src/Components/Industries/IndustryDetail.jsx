import React from 'react'
import './Industries.css'

import bgImage from './industriesDetailBg.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding';
import OurApproach from '../Home/OurApproach/OurApproach';
import ChooseBestDevs from './SubCompo/ChooseBestDevs/ChooseBestDevs';
import LetsTalk from './SubCompo/LetsTalk/LetsTalk';
import WillHelpYou from './SubCompo/WillHelpYou/WillHelpYou';
import QuesAns from './SubCompo/QuesAns/QuesAns';

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
        showSlider={true}
      />
      <ChooseBestDevs />
      <LetsTalk />
      <WillHelpYou />
      <OurApproach />
      <QuesAns />
    </>
  )
}

export default IndustryDetail