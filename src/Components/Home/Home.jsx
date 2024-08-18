import React from 'react'
import Landing from './Landing/Landing'
import Services from './Services-Home/Services'
import Industries from './Industries/Industries'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import CaseStudies from './CaseStudies/CaseStudies'
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
            <WhyChooseUs forAboutUs={false} />
            <CaseStudies />
            <MeetTheTeam />
            <TechnologyStack />
            <OurApproach />
            <ClientReviews />
        </>
    )
}

export default Home