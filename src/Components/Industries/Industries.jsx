import React from 'react'
import './Industries.css'

import bgImage from '../Footer/imgs/footer-bg.jpg'
import ReusableLanding from '../ReusableLanding/ReusableLanding';

import OurApproach from '../Home/OurApproach/OurApproach.jsx'
import ClientReviews from '../Home/ClientReviews/ClientReviews.jsx'
import Case_Studies from '../Home/Case_Studies/Case_Studies.jsx'
import LetsDiscuss from '../Services/LetsDiscuss/LetsDiscuss.jsx'
import OurServices from '../Services/OurServices/OurServices.jsx'

import oilGasImg from '../Home/Industries/imgs/oil&gas.jpg';
import realEstateImg from '../Home/Industries/imgs/real-estate.jpg';
import ecommerceImg from '../Home/Industries/imgs/ecommerce.jpg';
import logisticsImg from '../Home/Industries/imgs/logistics.jpg';
import fintechImg from '../Home/Industries/imgs/fintech.jpg';

const services = [
  {
    id: 'service1',
    index: '01/',
    name: 'Oil & Gas',
    tags: ['LOGISTICS SOFTWARE', 'BILLING & ACCOUNTING SYSTEMS'],
    text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.',
    imgSrc: oilGasImg
  },
  {
    id: 'service2',
    index: '02/',
    name: 'Real Estate',
    tags: ['REAL E-COMMERCE', 'MOBILE APP CALCULATOR', 'CATALOGS FOR REALTORS'],
    text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.',
    imgSrc: realEstateImg
  },
  {
    id: 'service3',
    index: '03/',
    name: 'Ecommerce',
    tags: ['SAAS', 'INTERNET SHOPS', 'CORPORATE WEBSITES', 'MARKETPLACES'],
    text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.',
    imgSrc: ecommerceImg
  },
  {
    id: 'service4',
    index: '04/',
    name: 'Logistics',
    tags: ['TRANSPORTATION MANAGEMENT SYSTEM', 'SHIPMENT MANAGEMENT', 'FREIGHT MANAGEMENT', 'ROUTE PLANNING'],
    text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.',
    imgSrc: logisticsImg
  },
  {
    id: 'service5',
    index: '05/',
    name: 'Fintech',
    tags: ['DIGITAL BANKING', 'WEALTH MANAGEMENT', 'MARKETPLACE LENDING', 'PERSONAL BANKING', 'PAYMENTS MANAGEMENT'],
    text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.',
    imgSrc: fintechImg
  }
];

const Industries = () => {
  const landingData = {
    bgImage,
    title: "Digital Acceleration with IT Solution",
  };

  return (
    <>
      <div id="industries-landing">
        <ReusableLanding
          bgImage={landingData.bgImage}
          title={landingData.title}
        />
      </div>
      <OurServices services={services} />
      <OurApproach />
      <ClientReviews />
      <LetsDiscuss />
      <Case_Studies />
    </>
  )
}

export default Industries