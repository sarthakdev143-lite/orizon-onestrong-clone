import React from 'react'
import './WhyChooseUs.css'
import whyChooseUsImage from './why-choose-us.jpg';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us" id="why-choose-us">
            <div id="why-choose-us-wrapper">
                <div className="upper-part">
                    <h1>Why Choose Us?</h1>
                    <p>Tailored to you, we create custom software specifically designed to meet your unique business needs.</p>
                </div>
                <div className="lower-part">
                    <article className="left">
                        We pride ourselves on delivering high-quality custom software solutions that drive business growth and success. You gain a trusted partner who is dedicated to understanding your unique requirements and delivering innovative, and secure software tailored to your needs.
                        <button>
                            Discover Now
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </button>
                    </article>
                    <div className="right">
                        <figure>
                            <img src={whyChooseUsImage} alt="Why Choose Us?" />
                        </figure>
                        <div className="numbers">
                            <div className="column">
                                <div className="box">
                                    <h1 className="upper">15+
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </h1>
                                    <p>With 15 years of experience, we have earned numerous awards</p>
                                </div>
                                <div className="box">
                                    <h1 className="upper">150+
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </h1>
                                    <p>We have a team of over 150 certified full-time professionals.</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <h1 className="upper">23+
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </h1>
                                    <p>We have offices in four countries worldwide</p>
                                </div>
                                <div className="box">
                                    <h1 className="upper">2,540+
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </h1>
                                    <p>We have successfully implemented over 2,540 projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default WhyChooseUs