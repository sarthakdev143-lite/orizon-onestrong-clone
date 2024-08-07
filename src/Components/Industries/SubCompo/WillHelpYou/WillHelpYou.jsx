import React from 'react'
import './WillHelpYou.css'

const WillHelpYou = () => {
    const helps = ['GREAT TA COVERAGE', 'CUSTOMER RETENTION', 'GREAT SEO', 'COST-EFFICIENCY'];
    return (
        <section id="will-help-you-industries">
            <div id="will-help-you-wrapper-industries">
                <div className="head">
                    <h1>WE WILL HELP YOU</h1>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="wrapper-left">
                            <article>
                                <p>Order a free consultation – our experts will select the most effective solution</p>
                            </article>
                            <form action="#">
                                <input type="text" placeholder='Phone Number*' />
                                <input type="text" placeholder='Your Email*' />
                                <input type="submit" value="ORDER A CONSULTATION" />
                            </form>
                        </div>
                    </div>
                    <div className="right">
                        <div className="helps">
                            {helps.map((help, index) => (
                                <div className="help" key={index}>
                                    <i className="ri-checkbox-circle-fill"></i>
                                    <div className="wrap">
                                        <h1>{help}</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit arcu accumsan, tristique at vivamus imperdiet sodales taciti iaculis</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WillHelpYou