import React from 'react'
import './Landing.css'
import InfiniteSlider from './InfiniteSlider'

const Landing = () => {
    return (
        <>
            <section id='landing-home'>
                <figure id='landing-bg-vid'>
                    <video autoPlay muted loop playsInline src={require('./bg.mp4')}></video>
                </figure>
                <div id='landing-content'>
                    <article>
                        <h1>CUSTOMIZED SOFTWARE SOLUTIONS FOR BUSINESS</h1>
                        <p>We worked with Orizon in a startup project. They are a professional and flexible team with different experience in many frameworks.</p>
                    </article>
                    <div className="lets-discuss">
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                        <p>let's discuss your project</p>
                    </div>
                </div>
            </section>
            <InfiniteSlider />
        </>
    )
}

export default Landing