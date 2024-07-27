import React from 'react'
import Header from '../../Header/Header'
import './Landing.css'
import bgImage from './services-landing-background.jpg'
import InfiniteSlider from '../../Home/Landing/InfiniteSlider'

const Landing = () => {
    return (
        <>
            <section id='landing-services'>
                <Header />
                <figure>
                    <img src={bgImage} alt="Background Image" />
                </figure>
                <div id='landing-content'>
                    <article>
                        <h1>Our Services</h1>
                        <p>We create innovative custom software solutions that keep up with the latest developments in the technology industry.</p>
                    </article>
                    <div className="lets-discuss">
                        <p>let's discuss your project</p>
                        <span class="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </div>
                </div>
            </section>
            <InfiniteSlider />
        </>
    )
}

export default Landing