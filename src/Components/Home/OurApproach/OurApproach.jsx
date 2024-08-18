import React, { useState } from 'react';
import './OurApproach.css';
import ui_ux_design from './imgs/ui_ux_design.png';
import web_development from './imgs/web_development.png';
import mobile_development from './imgs/mobile_development.png';
import cloud_services from './imgs/cloud_services.png';
import test_automation from './imgs/test_automation.png';

const slides = [
    { id: 'slide1', index: '01/', name: 'UI/UX Design', imgSrc: ui_ux_design, checkbox: ['User-Centric Research', 'Wireframing & Prototyping', 'Visual Design & Branding'] },
    { id: 'slide2', index: '02/', name: 'Web Development', imgSrc: web_development, checkbox: ['Understanding Client Objectives', 'Strategic Planning', 'User-Centric Design'] },
    { id: 'slide3', index: '03/', name: 'Mobile Development', imgSrc: mobile_development, checkbox: ['User-Centric Research', 'Platform Selection Stack', 'Agile Development Process'] },
    { id: 'slide4', index: '04/', name: 'Cloud Services', imgSrc: cloud_services, checkbox: ['Comprehensive Cloud Strategy', 'Scalable Infrastructure Design', 'Security and Compliance'] },
    { id: 'slide5', index: '05/', name: 'Test Automation', imgSrc: test_automation, checkbox: ['Comprehensive Test Strategy', 'Test Execution & Reporting', 'Maintenance & Improvement'] },
];

const OurApproach = () => {
    const [activeSlide, setActiveSlide] = useState('slide1');

    const handleClick = (event) => {
        const targetId = event.currentTarget.getAttribute('data-target');
        setActiveSlide(targetId);
    };

    return (
        <section id="our-approach">
            <div id="our-approach-wrapper">
                <div className="header">
                    <div className="left">
                        <h1 className="main-heading">our approach</h1>
                        <button>
                            discover now
                            <span className="material-symbols-outlined">
                                arrow_outward
                            </span>
                        </button>
                    </div>
                    <article className="right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus eleifend ut, convallis inceptos sociis cum habitant potenti lectus nascetur, platea quis est duis proin pretium bibendum vel nisl.
                        </p>
                    </article>
                </div>
                <div className="content">
                    <div className="left">
                        {slides.map(slide => (
                            <button
                                key={slide.id}
                                className={`feature ${activeSlide === slide.id ? 'active' : ''}`}
                                data-target={slide.id}
                                onClick={handleClick}
                            >
                                <h1>{slide.name}</h1>
                            </button>
                        ))}
                    </div>
                    <div className="right">
                        {slides.map(slide => (
                            <div
                                key={slide.id}
                                id={slide.id}
                                className={`slide ${activeSlide === slide.id ? 'active' : ''}`}
                            >
                                <figure className="image">
                                    <img src={slide.imgSrc} alt={slide.name} />
                                </figure>
                                <div className="details">
                                    <figcaption>
                                        <h3>{slide.index}</h3>
                                        <h1>{slide.name}</h1>
                                    </figcaption>
                                    <article>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Ligula sagittis dignissim tortor sollicitudin accumsan leo gravida venenatis volutpat sociosqu labore et dolore magna aliqua.</p>
                                    </article>
                                    <ul type='none'>
                                        {slide.checkbox.map((item, idx) => (
                                            <li key={idx}>
                                                <i className="ri-checkbox-circle-fill"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurApproach;
