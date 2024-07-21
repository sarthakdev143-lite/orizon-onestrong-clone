import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Industries.css";

import agricultureImg from './imgs/agriculture.jpg';
import ecommerceImg from './imgs/ecommerce.jpg';
import educationImg from './imgs/education.jpg';
import energyImg from './imgs/energy.jpg';
import fintechImg from './imgs/fintech.jpg';
import governmentImg from './imgs/government.jpg';
import healthcareImg from './imgs/healthcare.jpg';
import logisticsImg from './imgs/logistics.jpg';
import oilGasImg from './imgs/oil&gas.jpg';
import realEstateImg from './imgs/real-estate.jpg';

const SliderItems = [
    { title: 'Agriculture', imgSrc: agricultureImg },
    { title: 'E-Commerce', imgSrc: ecommerceImg },
    { title: 'Education', imgSrc: educationImg },
    { title: 'Energy', imgSrc: energyImg },
    { title: 'FinTech', imgSrc: fintechImg },
    { title: 'Government', imgSrc: governmentImg },
    { title: 'Healthcare', imgSrc: healthcareImg },
    { title: 'Logistics', imgSrc: logisticsImg },
    { title: 'Oil & Gas', imgSrc: oilGasImg },
    { title: 'Real Estate', imgSrc: realEstateImg },
];

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const Industries = () => {
    return (
        <section className="industries" id="industries">
            <div id="industries-wrapper">
                <h1>Industries</h1>
                <div className="lower-part">
                    <article className='left'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus eleifend ut, convallis inceptos sociis cum habitant potenti lectus nascetur, platea quis est duis proin pretium bibendum vel nisl.
                        <button>
                            Discover Now
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </button>
                    </article>
                    <div className="slider-wrapper">
                        <Slider {...sliderSettings}>
                            {SliderItems.map((item, index) => (
                                <div key={index} className="slider-item">
                                    <figure>
                                        <figcaption>{item.title}</figcaption>
                                        <img src={item.imgSrc} alt={item.title} />
                                    </figure>
                                    <article className='slider-item-article'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </article>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
