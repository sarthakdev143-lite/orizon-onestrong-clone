import React from 'react'
import Header from '../Header/Header'
import './Landing.css'

const Landing = () => {
    return (
        <>
            <section id='landing'>
                <Header />
                <figure>
                    <video autoPlay muted loop playsInline src={require('./bg.mp4')}></video>
                </figure>
            </section>
        </>
    )
}

export default Landing