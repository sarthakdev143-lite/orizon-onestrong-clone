import React from 'react'
import ReusableLanding from '../ReusableLanding/ReusableLanding'
import bgImage from '../Footer/imgs/footer-bg.jpg'
import OurApproach from '../Home/OurApproach/OurApproach'
import QuesAnsChild from '../Industries/SubCompo/QuesAns/QuesAnsChild'
import OurPricing from './OurPricing'

const Pricing = () => {
  const landingData = {
    bgImage,
    title: 'Our Pricing',
  }

  const questions = [
    { question: "What is custom software development?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
    { question: "Why should I choose custom software over off-the-shelf solutions?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
    { question: "How long does it take to develop custom software?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
    { question: "How do you ensure the security of custom software?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
    { question: "How do you handle software updates and maintenance?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
  ];

  return (
    <>
      <div id="industries-landing">
        <ReusableLanding
          bgImage={landingData.bgImage}
          title={landingData.title}
          showSlider={true}
        />
      </div>
      <OurPricing />
      <OurApproach />
      <QuesAnsChild questions={questions} />
    </>
  )
}

export default Pricing