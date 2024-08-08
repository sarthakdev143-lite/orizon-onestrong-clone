import React from 'react'
import ReusableLanding from '../ReusableLanding/ReusableLanding'
import faq from './faq.jpg';
import OurApproach from '../Home/OurApproach/OurApproach';
import LetsDiscuss from '../Services/LetsDiscuss/LetsDiscuss';
import QuesAnsChild from '../Industries/SubCompo/QuesAns/QuesAnsChild';

const questions = [
  { question: "What is custom software development?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "Why should I choose custom software over off-the-shelf solutions?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "How long does it take to develop custom software?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "How do you ensure the security of custom software?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "How do you handle software updates and maintenance?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "What is the cost associated with custom software development?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "Can custom software integrate with existing systems?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "What level of involvement will I have during the custom software development process?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." },
  { question: "What are the cost factors associated with custom software development?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur." }
];

const FAQ = () => {
  const landingData = {
    bgImage: faq,
    title: 'FAQ',
  }

  return (
    <>
      <ReusableLanding
        bgImage={landingData.bgImage}
        title={landingData.title}
        showSlider={true}
      />
      <QuesAnsChild questions={questions} />
      <OurApproach />
      <LetsDiscuss />
    </>
  )
}

export default FAQ