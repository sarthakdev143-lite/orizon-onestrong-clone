import React from 'react'
import bgImage from '../Services/imgs/services-landing-background.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding';
import MeetTheTeam from '../Home/MeetTheTeam/MeetTheTeam';
import QuesAns from '../Industries/SubCompo/QuesAns/QuesAns';

const Team = () => {
  const landingData = {
    bgImage,
    title: "Our Team",
  };

  return (
    <>
      <ReusableLanding
        bgImage={landingData.bgImage}
        title={landingData.title}
        showSlider={true}
      />
      <div className="space"></div>
      <MeetTheTeam />
      <QuesAns />
    </>
  )
}

export default Team