import React from 'react';
import PropTypes from 'prop-types'; // For type checking
import './WhyChooseUs.css';
import whyChooseUsImage from './why-choose-us.jpg';

const UpperPart = ({ isAboutUs }) => (
    <div className={`upper-part ${isAboutUs ? 'about-us-upper-part' : ''}`}>
        <h1 className={isAboutUs ? 'about-us-title' : ''}>
            {isAboutUs ? 'PASSIONATE AND CREATIVE' : 'Why Choose Us?'}
        </h1>
        <p>
            {isAboutUs
                ? 'Customer satisfaction is our top priority. We take pride in seeing our clients succeed and being happy with the software solutions we provide.'
                : 'Tailored to you, we create custom software specifically designed to meet your unique business needs.'
            }
        </p>
    </div>
);

const NumberBox = ({ number, description }) => (
    <div className="box">
        <h1 className="upper">
            {number}
            <span className="material-symbols-outlined">arrow_outward</span>
        </h1>
        <p>{description}</p>
    </div>
);

const WhyChooseUs = ({ forAboutUs }) => {
    return (
        <section className={`why-choose-us ${forAboutUs ? 'about-us' : ''}`} id="why-choose-us">
            <div id="why-choose-us-wrapper">
                <UpperPart isAboutUs={forAboutUs} />
                <div className="lower-part">
                    <article className="left">
                        We pride ourselves on delivering high-quality custom software solutions that drive business growth and success. You gain a trusted partner who is dedicated to understanding your unique requirements and delivering innovative, and secure software tailored to your needs.
                        {!forAboutUs &&
                            <button>
                                About us
                                <span className="material-symbols-outlined">arrow_outward</span>
                            </button>
                        }
                    </article>
                    <div className="right">
                        <figure>
                            <img src={whyChooseUsImage} alt="Why Choose Us?" />
                        </figure>
                        <div className="numbers">
                            <div className="column">
                                <NumberBox number="15+" description="With 15 years of experience, we have earned numerous awards" />
                                <NumberBox number="150+" description="We have a team of over 150 certified full-time professionals." />
                            </div>
                            <div className="column">
                                <NumberBox number="23+" description="We have offices in four countries worldwide" />
                                <NumberBox number="2,540+" description="We have successfully implemented over 2,540 projects." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Type checking with PropTypes
WhyChooseUs.propTypes = {
    forAboutUs: PropTypes.bool.isRequired,
};

export default WhyChooseUs;
