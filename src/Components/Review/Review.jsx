import React from 'react'
import ReusableLanding from '../ReusableLanding/ReusableLanding'
import bgImage from '../CaseStudies/imgs/caseStudies.jpg';
import ClientReviews from '../Home/ClientReviews/ClientReviews';
import QuesAnsChild from '../Industries/SubCompo/QuesAns/QuesAnsChild';

const Review = () => {
  const landingData = {
    bgImage,
    title: 'Our Reviews',
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
      <ReusableLanding
        bgImage={landingData.bgImage}
        title={landingData.title}
        showSlider={true}
      />
      <ClientReviews />
      <QuesAnsChild questions={questions} />
    </>
  )
}

export default Review