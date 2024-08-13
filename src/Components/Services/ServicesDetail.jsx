import React from 'react'
import Landing from './LandingServicesDetail'
import OurApproach from '../Home/OurApproach/OurApproach'
import CaseStudies from '../Home/CaseStudies/CaseStudies'
import WillHelpYou from './WillHelpYou/WillHelpYou'
import LetsDiscuss from './LetsDiscuss/LetsDiscuss'

const ServicesDetail = () => {
  return (
    <>
      <Landing />
      <WillHelpYou />
      <OurApproach />
      <CaseStudies />
      <LetsDiscuss />
    </>
  )
}

export default ServicesDetail