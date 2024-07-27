import React from 'react'
import bgImage from './imgs/services-landing-background.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding'

const LandingServices = () => {
    const landingData = {
        bgImage,
        title: "Our Services",
    };

    return (
        <ReusableLanding
            bgImage={landingData.bgImage}
            title={landingData.title}
        />
    )
}

export default LandingServices