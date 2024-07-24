import React from 'react'
import './ClientReviews.css'

import Alexander_Stone from './imgs/alexander_stone.jpg';
import Benjamin_Murphy from './imgs/benjamin_murphy.jpg';
import Sophia_Anderson from './imgs/sophia_anderson.jpg';
import Noah_Brown from './imgs/noah_brown.jpg';
import Liam_Roberts from './imgs/liam_roberts.jpg';
import Ava_Davis from './imgs/ava_davis.jpg';

const reviews = [
    {
        text: "We had the pleasure of working with Orizon on a custom software development project, and we couldn't be more impressed with their expertise, professionalism, and dedication to delivering outstanding results.",
        imageSrc: Alexander_Stone,
        name: 'Alexander Stone',
        company_name: 'Arno consulting',
    },
    {
        text: 'Thanks to Orizon expertise and the custom software they developed for us, our business has experienced a significant boost in efficiency and productivity. The solution has streamlined our processes.',
        imageSrc: Sophia_Anderson,
        name: 'Sophia Anderson',
        company_name: 'CareWell Systems',
    },
    {
        text: 'The software they developed exceeded our expectations and has greatly improved our efficiency and productivity. We highly recommend Orizon for any organization in need of reliable and customized software development services.',
        imageSrc: Liam_Roberts,
        name: 'Liam Roberts',
        company_name: 'EnergyPros',
    },
    {
        text: 'We highly recommend Orizon to any organization in search of reliable and customized software development services. Their professionalism, technical expertise, and unwavering commitment to client satisfaction make them an invaluable partner in achieving digital success.',
        imageSrc: Benjamin_Murphy,
        name: 'Benjamin Murphy',
        company_name: 'TechPro Solutions',
    },
    {
        text: 'Working with Orizon for our custom software development needs was an exceptional experience. Their team showcased unmatched expertise, professionalism, and a strong dedication to delivering a high-quality solution tailored to our requirements.',
        imageSrc: Noah_Brown,
        name: 'Noah Brown',
        company_name: 'DigitalSolutions Inc.',
    },
    {
        text: 'We had a fantastic experience working with Orizon for our custom software development. They showcased expertise, professionalism, and a strong commitment to delivering a high-quality solution.',
        imageSrc: Ava_Davis,
        name: 'Ava Davis',
        company_name: 'EduSmart Solutions',
    },
];

const ClientReviews = () => {
    const firstColumn = [reviews[0], reviews[1], reviews[2]];
    const secondColumn = [reviews[3], reviews[4], reviews[5]];

    return (
        <section id='client-reviews'>
            <div id="client-review-wrapper">
                <div className="sticky-header-wrapper">
                    <div className="sticky-header">
                        <h1>What Our Clients Say</h1>
                        <p>Highest rated with an average 4.95 out of 5.00 from 2,290 reviews</p>
                        <button>
                            read more reviews
                            <span className="material-symbols-outlined">
                                arrow_outward
                            </span>
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="column">
                        {firstColumn.map((review, index) => (
                            <article key={index} className="review">
                                <div className="text">
                                    <p>"{review.text}"</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src={review.imageSrc} alt={review.name} />
                                    </div>
                                    <div className="name">
                                        <div className="rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <h1>{review.name}</h1>
                                        <p>{review.company_name}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="column">
                        {secondColumn.map((review, index) => (
                            <article key={index} className="review">
                                <div className="text">
                                    <p>"{review.text}"</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src={review.imageSrc} alt={review.name} />
                                    </div>
                                    <div className="name">
                                        <div className="rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <h1>{review.name}</h1>
                                        <p>{review.company_name}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
