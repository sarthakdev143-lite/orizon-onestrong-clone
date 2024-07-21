import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Industries.css"

const SliderItems = [
    {
        title: 'Agriculture',
        imgSrc: './imgs/agriculture.jpg',
    },
    {
        title: 'E-Commerce',
        imgSrc: './imgs/ecommerce.jpg',
    },
    {
        title: 'Education',
        imgSrc: './imgs/education.jpg',
    },
    {
        title: 'Energy',
        imgSrc: './imgs/energy.jpg',
    },
    {
        title: 'FinTech',
        imgSrc: './imgs/fintech.jpg',
    },
    {
        title: 'Government',
        imgSrc: './imgs/government.jpg',
    },
    {
        title: 'Healthcare',
        imgSrc: './imgs/healthcare.jpg',
    },
    {
        title: 'Logistics',
        imgSrc: './imgs/logistics.jpg',
    },
    {
        title: 'Oil & Gas',
        imgSrc: './imgs/oil&gas.jpg',
    },
    {
        title: 'Real Estate',
        imgSrc: './imgs/real-estate.jpg',
    },
]

const Industries = () => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <section className="industries" id="industries">
                <div id="industries-wrapper">
                    <h1>industries</h1>
                    <div className="lower-part">
                        <article className='left'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus eleifend ut, convallis inceptos sociis cum habitant potenti lectus nascetur, platea quis est duis proin pretium bibendum vel nisl.
                            <button>discover now
                                <span class="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </button>
                        </article>
                        <div className="slider-wrapper">
                            <Slider {...settings}>
                                {
                                    SliderItems.map((item, index) => {
                                        return (
                                            <div key={index} className="slider-item">
                                                <figure>
                                                    <figcaption>{item.title}</figcaption>
                                                    <img src={require(`${item.imgSrc}`)} alt={item.title} />
                                                </figure>
                                                <article className='slider-item-article'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </article>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industries