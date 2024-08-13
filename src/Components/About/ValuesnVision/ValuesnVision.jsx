import React from 'react'
import ValuenVision from '../valuenvision.jpg'
import AboutTheClient from '../../CaseStudies/AboutTheClient'
import './ValuesnVision.css'

const ValuesnVision = () => {
    const checks = ['Quality Program', 'Innovation', 'Client Success', 'Teamwork'];

    return (
        <>
            <section id="values-n-vision">
                <div id="values-n-vision-wrapper">
                    <div className="left">
                        <h1>VALUES AND VISION</h1>
                        <ul type='none'>
                            {checks.map((check, idx) => (
                                <li key={idx}>
                                    <i class="ri-checkbox-circle-fill"></i>
                                    {check}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="right">
                        <figure>
                            <img src={ValuenVision} alt="Value and Vision" />
                        </figure>
                        <article>
                            <p>To be the leading provider of custom software solutions, empowering businesses worldwide with cutting-edge technology to achieve their strategic goals.</p>
                        </article>
                        <AboutTheClient />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ValuesnVision