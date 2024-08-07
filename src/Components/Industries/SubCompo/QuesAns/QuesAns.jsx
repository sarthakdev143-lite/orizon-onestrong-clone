import React, { useState } from 'react';
import './QuesAns.css';

const QuesAns = () => {
    const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

    const questions = [
        {
            question: "What is custom software development?",
            answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        },
        {
            question: "Why should I choose custom software over off-the-shelf solutions?",
            answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        },
        {
            question: "How long does it take to develop custom software?",
            answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        },
        {
            question: "How do you ensure the security of custom software?",
            answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        },
        {
            question: "How do you handle software updates and maintenance?",
            answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        },
    ];

    const toggleQuestion = (index) => {
        setOpenedQuestionIndex(openedQuestionIndex === index ? null : index);
    };

    return (
        <section id="ques-ans">
            <div id="ques-ans-wrapper">
                <div className="upper">
                    <h1>QUESTIONS & ANSWERS</h1>
                </div>
                <div className="lower">
                    <article className="left">
                        <p>For custom software provides comprehensive answers to frequently asked questions, empowering clients to gain a deeper understanding of our services, processes, and solutions, and make informed decisions with confidence.</p>
                    </article>
                    <div className="right">
                        <div className="questions">
                            {questions.map((question, index) => (
                                <div className="question" key={question.question}>
                                    <div className="ques" onClick={() => toggleQuestion(index)}>
                                        <h1 className={openedQuestionIndex === index ? 'open' : ''}>{question.question}</h1>
                                        {openedQuestionIndex === index ? (
                                            <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                                                <path d="M200-440v-80h560v80H200Z" />
                                            </svg>
                                        ) : (
                                            <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className={`answer ${openedQuestionIndex === index ? 'open' : ''}`}>
                                        <p>{question.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuesAns;
