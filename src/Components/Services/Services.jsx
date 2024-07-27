import React from 'react'
import Landing from './LandingServices'
import OurApproach from '../Home/OurApproach/OurApproach'
import TechnologyStack from '../Home/TechnologyStack/TechnologyStack'
import Case_Studies from '../Home/Case_Studies/Case_Studies'
import './Services.css'
import OurServices from './OurServices/OurServices'

const Services = () => {
    return (
        <>
            <Landing />
            <OurServices />
            <OurApproach />
            <TechnologyStack />
            <hr />
            <Case_Studies />
        </>
    )
}

export default Services