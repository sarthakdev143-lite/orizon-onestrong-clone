import React from 'react';
import InfiniteSlider from '../Home/Landing/InfiniteSlider';
import './Landing.css'

const ReusableLanding = ({ bgImage, title, showSlider, fullHeight, landingText, showButton }) => {
    return (
        <>
            <section id='reusable-landing' className={fullHeight ? 'fullHeight' : ''}>
                <figure>
                    <img src={bgImage} alt="Background img" />
                </figure>
                <div id='landing-content' className={fullHeight ? 'dragUp' : '' || showButton ? 'dragUp' : ''}>
                    <article>
                        <h1>{title}</h1>
                        {!landingText && <p>We create innovative custom software solutions that keep up with the latest developments in the technology industry.</p>}
                    </article>
                    {
                        !showButton && <div className="lets-discuss">
                            <p>let's discuss your project</p>
                            <span className="material-symbols-outlined">
                                arrow_outward
                            </span>
                        </div>
                    }
                </div>
            </section>
            {showSlider && <InfiniteSlider />}
        </>
    );
};

export default ReusableLanding;
