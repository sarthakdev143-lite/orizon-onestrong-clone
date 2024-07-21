import React, { useState } from 'react';
import './Services.css'; // Assuming you are using CSS Modules or have styles scoped correctly

const Services = () => {
    const [activeFeature, setActiveFeature] = useState('slide1');

    const handleClick = (event) => {
        const targetId = event.currentTarget.getAttribute('data-target');
        setActiveFeature(targetId);
    };

    const slides = [
        {
            id: 'slide1',
            index: '01/',
            name: 'Evaluation & Design',
            tags: ['research & development', 'scoping session', 'ui review', 'ui design', 'branding', 'product design', 'rapid prototyping'],
            imgSrc: './imgs/slide1.png',
        },
        {
            id: 'slide2',
            index: '02/',
            name: 'Custom Software',
            tags: ['crm development', 'erp software', 'cloud app', 'webapp', 'branding', 'product development', 'nft marketplace'],
            imgSrc: './imgs/slide2.png',
        },
        {
            id: 'slide3',
            index: '03/',
            name: 'Web Development',
            tags: ['frontend', 'php backend', 'java', 'node.js', '.net'],
            imgSrc: './imgs/slide3.png',
        },
        {
            id: 'slide4',
            index: '04/',
            name: 'Mobile Development',
            tags: ['ios app', 'android app', 'react native', 'flutter', 'cross-platform', 'hybrid app', 'single app'],
            imgSrc: './imgs/slide4.png',
        },
        {
            id: 'slide5',
            index: '05/',
            name: 'Maintenance & Support',
            tags: ['aws & cloud', 'agile project', 'market launch', 'ui design', 'test automation'],
            imgSrc: './imgs/slide5.png',
        }
    ];

    return (
        <section id='features-container' className="features-container">
            <div className="features-wrapper">
                <div className="features-list">
                    {slides.map(slide => (
                        <button
                            key={slide.id}
                            className={`feature ${activeFeature === slide.id ? 'active' : ''}`}
                            data-target={slide.id}
                            onClick={handleClick}
                        >
                            <h3>{slide.index}</h3>
                            <h1>{slide.name}</h1>
                        </button>
                    ))}
                </div>
                <div className="features-content">
                    {slides.map(slide => (
                        <div
                            key={slide.id}
                            id={slide.id}
                            className={`slide ${activeFeature === slide.id ? 'active' : ''}`}
                        >
                            <div className="tags">
                                {slide.tags.map(tag => (
                                    <div key={tag} className="tag">{tag}</div>
                                ))}
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit parturient, turpis habitant semper platea rhoncus et dignissim ultricies, proin dapibus quis sociis dui condimentum rutrum.</p>
                            <div className="learn-more">
                                learn more <span className="material-symbols-outlined">arrow_outward</span>
                            </div>
                            <img src={require(`${slide.imgSrc}`)} alt={`Slide ${slide.id.split('slide')[1]}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
