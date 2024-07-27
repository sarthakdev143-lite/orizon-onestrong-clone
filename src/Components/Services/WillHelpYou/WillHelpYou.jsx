import React from 'react';
import './WillHelpYou.css'

const WillHelpYou = () => {
    const helps = ['Security and reliability', 'Scalability', 'High-quality code', 'Cost-efficiency', 'Using latest technologies', 'Full-cycle development'];

    return (
        <section id="will-help-you">
            <div id="will-help-you-wrapper">
                <div className="head">
                    <h1>we will help you</h1>
                </div>
                <div className="content">
                    <div className="left">
                        <article>
                            <p>
                                We pride ourselves on delivering high-quality custom software solutions that drive business growth and success. You gain a trusted partner who is dedicated to understanding your unique requirements and delivering innovative, and secure software tailored to your needs.
                            </p>
                        </article>
                    </div>
                    <div className="right">
                        <div className="helps">
                            {helps.map((help, index) => (
                                <div className="help" key={index}>
                                    <i className="ri-checkbox-circle-fill"></i>
                                    <div className="wrap">
                                        <h1>{help}</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam dis sociosqu</p>
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

export default WillHelpYou;
