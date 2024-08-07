import React from 'react'
import laptop from '../../../Home/Services-Home/imgs/slide2.png'
import './ChooseBestDevs.css'

const cards = [
    {
        index: "01/",
        heading: "SAAS",
    },
    {
        index: "02/",
        heading: "CORPORATE SITE",
    },
    {
        index: "03/",
        heading: "MARKETPLACES",
    },
]

const ChooseBestDevs = () => {
    return (
        <section id="choose-best-devs">
            <div id="choose-best-devs-wrapper">
                <div className="upper">
                    <h1>CHOOSE THE BEST DEVELOPERS FOR YOUR E-COMMERCE PROJECT</h1>
                </div>
                <div className="lower">
                    <figure className="left">
                        <img src={laptop} alt="Laptop image" />
                    </figure>
                    <div className="right">
                        <div className="cards">
                            {cards.map((card, index) => (
                                <div key={index} className="card">
                                    <div className="top">
                                        <h1>{card.index}</h1>
                                        <span className="material-symbols-outlined">
                                            arrow_outward
                                        </span>
                                    </div>
                                    <div className="bottom">
                                        <h1>{card.heading}</h1>
                                        <p>Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseBestDevs