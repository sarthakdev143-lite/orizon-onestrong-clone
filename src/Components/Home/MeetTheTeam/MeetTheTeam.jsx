import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MeetTheTeam.css'

import EthanJohnson from './imgs/EthanJohnson.jpg';
import BenjaminSmith from './imgs/BenjaminSmith.jpg';
import OliviaDavis from './imgs/OliviaDavis.jpg';
import Alexander from './imgs/Alexander.jpg';
import AvaJohnson from './imgs/AvaJohnson.jpg';
import SamuelAnderson from './imgs/SamuelAnderson.jpg';
import MatthewWilson from './imgs/MatthewWilson.jpg';
import DanielBrown from './imgs/DanielBrown.jpg';
import MiaWright from './imgs/MiaWright.jpg';

const TeamMembers = [
    { name: "Ethan Johnson", role: "CEO ORIZON", imgSrc: EthanJohnson },
    { name: "Benjamin Smith", role: "CHIEF OF INFORMATION", imgSrc: BenjaminSmith },
    { name: "Olivia Davis", role: "CHIEF OF FINANCE", imgSrc: OliviaDavis },
    { name: "Alexander", role: "FRONTEND DEVELOPER", imgSrc: Alexander },
    { name: "Ava Johnson", role: "UI & UX DESIGN", imgSrc: AvaJohnson },
    { name: "Samuel Anderson", role: "UI & UX DESIGN", imgSrc: SamuelAnderson },
    { name: "Matthew Wilson", role: "DEVELOPER", imgSrc: MatthewWilson },
    { name: "Daniel Brown", role: "DEVELOPER", imgSrc: DanielBrown },
    { name: "Mia Wright", role: "DEVELOPER", imgSrc: MiaWright },
]

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5.5,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4.2,
            }
        },
        {
            breakpoint: 829,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 404,
            settings: {
                slidesToShow: 1.1,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

const MeetTheTeam = () => {
    return (
        <section className="meet-the-team">
            <div className="marquee">
                <div className="marquee-content">
                    Meet the Team ✺ Meet the Team ✺ Meet the Team ✺ Meet the Team
                </div>
            </div>
            <div className="our-teams">
                <div className="our-teams-wrapper">
                    <h1 className='heading'>our teams</h1>
                    <div className="team-slider-wrapper">
                        <Slider {...sliderSettings}>
                            {TeamMembers.map((member, index) => (
                                <div key={index} className="team-member">
                                    <figure>
                                        <img src={member.imgSrc} alt="Team Member Pic" />
                                    </figure>
                                    <figcaption>
                                        <h1>{member.name}</h1>
                                        <h4>{member.role}</h4>
                                    </figcaption>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetTheTeam;
