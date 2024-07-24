import React from 'react'
import './App.css'
import Landing from './Components/Landing/Landing'
import Services from './Components/Services-Home/Services'
import Industries from './Components/Industries/Industries'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import Case_Studies from './Components/Case_Studies/Case_Studies'
import MeetTheTeam from './Components/MeetTheTeam/MeetTheTeam'
import TechnologyStack from './Components/TechnologyStack/TechnologyStack'
import OurApproach from './Components/OurApproach/OurApproach'
import ClientReviews from './Components/ClientReviews/ClientReviews'

const App = () => {
  return (
    <>
      <Landing />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Case_Studies />
      <MeetTheTeam />
      <TechnologyStack />
      <OurApproach />
      <ClientReviews />
      <div className="space"></div>
    </>
  )
}

export default App