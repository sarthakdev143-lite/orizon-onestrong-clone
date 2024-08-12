import React from 'react'
import ReusableLanding from '../ReusableLanding/ReusableLanding'
import bgImage from '../Industries/SubCompo/LetsTalk/letsTalk.jpg';
import LetsDiscuss from '../Services/LetsDiscuss/LetsDiscuss';
import './CaseStudiesDetail.css';
import csdBg from './imgs/csd-bg.jpg';
import csd1 from './imgs/csd1.jpg';
import csd2 from './imgs/csd2.jpg';
import AboutTheClient from './AboutTheClient.jsx'

const CaseStudiesDetail = () => {
  const landingData = {
    bgImage,
    title: "Fitness & Personal Trainers Project",
  };

  return (
    <>
      <div className="csd">
        <ReusableLanding
          bgImage={landingData.bgImage}
          title={landingData.title}
          landingText={true}
        />
        <div className="blank"></div>
        <div className="wrapper">
          <div className="about-client">
            <article className="left">
              <h1>A few words about the client</h1>
              <p>Our web design services for clients, such as Fitness & Personal Trainers, aim to create visually appealing and user-friendly websites that effectively showcase their unique brand, services, and expertise.</p>
            </article>
            <div className="card right">
              <h1 className='line'><span className="highlight">Industry</span> EDUCATION</h1>
              <h1 className='line'><span className="highlight">Location</span> USA</h1>
              <h1 className='line'><span className="highlight">Services Used :</span></h1>
              <div className="tags">
                <div className="tag">Frontend</div>
                <div className="tag">PHP BACKEND</div>
                <div className="tag">JAVA</div>
              </div>
            </div>
          </div>
          <div className="pics">
            <figure><img src={csd1} alt="Case Details Pic 1" /></figure>
            <figure><img src={csd2} alt="Case Details Pic 2" /></figure>
          </div>
          <AboutTheClient heading={true} />
          <figure>
            <img src={csdBg} alt="" />
          </figure>
          <LetsDiscuss />
        </div>
      </div>
    </>
  )
}

export default CaseStudiesDetail