import React, { useState } from 'react';
import './TechnologyStack.css';
import graphql from './imgs/graphql.png';
import react_hook from './imgs/react_hook.png';
import ant_design from './imgs/ant_design.png';
import material_ui from './imgs/material_ui.png';
import typescript from './imgs/typescript.png';
import nextjs from './imgs/nextjs.png';
import react from './imgs/react.png';
import rest_api from './imgs/rest_api.png';
import nodejs from './imgs/nodejs.png';
import php from './imgs/php.png';
import laravel from './imgs/laravel.png';
import java from './imgs/java.png';
import nginx from './imgs/nginx.png';
import docker from './imgs/docker.png';
import kubernetes from './imgs/kubernetes.png';
import azure from './imgs/azure.png';
import aws from './imgs/aws.png';
import digital_ocean from './imgs/digital_ocean.png';
import google_cloud from './imgs/google_cloud.png';
import hatzner from './imgs/hatzner.png';

const TechnologyStack = () => {
    const [activeCategory, setActiveCategory] = useState('slide1');

    const handleClick = (event) => {
        const targetId = event.currentTarget.getAttribute('data-target');
        setActiveCategory(targetId);
    };

    const slides = [
        { id: 'slide1', index: '01/', name: 'Web Platform', p1_heading: 'Front-End', p1_block_imgSrc: [graphql, react_hook, ant_design, material_ui, typescript, nextjs, react, rest_api], p1_block_name: ['graphql', 'react hook', 'ant design', 'material ui', 'typescript', 'next.js', 'react.js', 'rest api'], p2_heading: 'Back-End', p2_block_imgSrc: [nodejs, php, laravel, java], p2_block_name: ['node.js', 'php', 'laravel', 'java'], },
        { id: 'slide2', index: '02/', name: 'Cloud & DevOps', p1_heading: 'DevOps', p1_block_imgSrc: [nginx, kubernetes, docker, azure], p1_block_name: ['nginx', 'kubernetes', 'docker', 'azure'], p2_heading: 'Cloud', p2_block_imgSrc: [aws, digital_ocean, google_cloud, hatzner], p2_block_name: ['aws', 'digital ocean', 'google cloud', 'hatzner'], },
        { id: 'slide3', index: '03/', name: 'Database', p1_heading: 'DevOps', p1_block_imgSrc: [nginx, kubernetes, docker, azure], p1_block_name: ['nginx', 'kubernetes', 'docker', 'azure'], p2_heading: 'Cloud', p2_block_imgSrc: [aws, digital_ocean, google_cloud, hatzner], p2_block_name: ['aws', 'digital ocean', 'google cloud', 'hatzner'], },
        { id: 'slide4', index: '04/', name: 'Mobile Apps', p1_heading: 'DevOps', p1_block_imgSrc: [nginx, kubernetes, docker, azure], p1_block_name: ['nginx', 'kubernetes', 'docker', 'azure'], p2_heading: 'Cloud', p2_block_imgSrc: [aws, digital_ocean, google_cloud, hatzner], p2_block_name: ['aws', 'digital ocean', 'google cloud', 'hatzner'], },
    ];

    return (
        <section id='technology-stack' className="technology-stack">
            <div id="technology-stack-wrapper" className="technology-stack-wrapper">
                <h1 className='main-heading'>Technology Stack</h1>
                <div className="features-wrapper content">
                    <div className="features-list">
                        {slides.map(slide => (
                            <button
                                key={slide.id}
                                className={`feature ${activeCategory === slide.id ? 'active' : ''}`}
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
                                className={`slide ${activeCategory === slide.id ? 'active' : ''}`}
                            >
                                <div className="part-1 part">
                                    <h1 className="heading">{slide.p1_heading}</h1>
                                    <div className="blocks">
                                        {slide.p1_block_imgSrc.map((src, idx) => (
                                            <div className="block" key={idx}>
                                                <img src={src} alt={slide.p1_block_name[idx]} />
                                                <h3 className='name'>{slide.p1_block_name[idx]}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="part-2 part">
                                    <h1 className="heading">{slide.p2_heading}</h1>
                                    <div className="blocks">
                                        {slide.p2_block_imgSrc.map((src, idx) => (
                                            <div className="block" key={idx}>
                                                <img src={src} alt={slide.p2_block_name[idx]} />
                                                <h3 className='name'>{slide.p2_block_name[idx]}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechnologyStack;
