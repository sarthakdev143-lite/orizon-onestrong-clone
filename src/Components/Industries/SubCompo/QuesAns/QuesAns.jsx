import React from 'react';
import QuesAnsChild from './QuesAnsChild';

const QuesAns = () => {
    const questions = [
        { question: "What is custom software development?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
        { question: "Why should I choose custom software over off-the-shelf solutions?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
        { question: "How long does it take to develop custom software?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
        { question: "How do you ensure the security of custom software?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
        { question: "How do you handle software updates and maintenance?", answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", },
    ];

    return <QuesAnsChild questions={questions} />;
};

export default QuesAns;
