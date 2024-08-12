import React from 'react'
import ReusableLanding from '../ReusableLanding/ReusableLanding'
import bgImage from '../Industries/SubCompo/LetsTalk/letsTalk.jpg'
import LetsDiscuss from './SubCompo/LetsDiscuss/LetsDiscuss'
import OurOffice from './SubCompo/OurOffice/OurOffice'

const Contacts = () => {
  const landingData = {
    bgImage,
    title: "Contact us",
    p: "if there is anything you would like to talk about, please feel free to contact us. even if you just want to say hello, we look forward to hearing from you!"
  }

  return (
    <>
      <div id="contact-us">
        <ReusableLanding
          bgImage={landingData.bgImage}
          title={landingData.title}
          showButton={true}
          customText={true}
        />
      </div>
      <LetsDiscuss />
      <div className="google-map-wrapper">
        <iframe loading="lazy" width="100%" height="400rem" src="https://maps.google.com/maps?q=Indore%2C%20India&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Indore, India" aria-label="Indore, India"></iframe>
      </div>
      <OurOffice />
    </>
  )
}

export default Contacts