import React from 'react'
import ReusableLanding from '../ReusableLanding/ReusableLanding'
import bgImage from './imgs/LandingServicesDetailBg.jpg'

const LandingServicesDetail = () => {
    const landingData = {
        bgImage,
        title: "Frontend developement",
    };

    return (
        <>
            <ReusableLanding
                bgImage={landingData.bgImage}
                title={landingData.title}
            />
        </>
    )
}

export default LandingServicesDetail