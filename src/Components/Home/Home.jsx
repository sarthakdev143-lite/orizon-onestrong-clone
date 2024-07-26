import React from 'react'
import Landing from './Landing/Landing'
import Services from './Services-Home/Services'
import Industries from './Industries/Industries'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import Case_Studies from './Case_Studies/Case_Studies'
import MeetTheTeam from './MeetTheTeam/MeetTheTeam'
import TechnologyStack from './TechnologyStack/TechnologyStack'
import OurApproach from './OurApproach/OurApproach'
import ClientReviews from './ClientReviews/ClientReviews'

const Home = () => {
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
        </>
    )
}

export default Home