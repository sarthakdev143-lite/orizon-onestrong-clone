import React from 'react'
import bgImage from '../Footer/imgs/footer-bg.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding';

const IndustriesLanding = () => {
    const landingData = {
        bgImage,
        title: "Digital Acceleration with IT Solution",
    };

    return (
        <div id="industries-landing">
            <ReusableLanding
            bgImage={landingData.bgImage}
            title={landingData.title}
        />
        </div>
    )
}

export default IndustriesLanding