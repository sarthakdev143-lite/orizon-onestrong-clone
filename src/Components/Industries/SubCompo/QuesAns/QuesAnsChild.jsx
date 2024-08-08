import React, { useState } from 'react'
import './QuesAns.css';

const QuesAnsChild = ({ questions }) => {
    const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

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
}

export default QuesAnsChild