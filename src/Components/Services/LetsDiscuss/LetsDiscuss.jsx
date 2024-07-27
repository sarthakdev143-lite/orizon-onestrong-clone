import React from 'react'
import './LetsDiscuss.css'
import man from '../imgs/man.jpg'

const LetsDiscuss = () => {
    return (
        <>
            <section id="lets-discuss">
                <div id="lets-discuss-wrapper">
                    <div className="head">
                        <h1>let's discuss</h1>
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
                            <figure>
                                <img src={man} alt="Unable to Access Image!" />
                            </figure>
                            <div className="wrap">
                                <article>
                                    <div className="head">
                                        <i class="ri-double-quotes-r"></i>
                                        <div className="sub-wrap">
                                            <h3>Benjamin Smith</h3>
                                            <h5>IT Sales Manager</h5>
                                        </div>
                                    </div>
                                    <p>Me and my team delivers an exceptional level of service and strives to build strong and long lasting partnerships with our clients.</p>
                                </article>
                                <div className="boxes">
                                    <div className="box">
                                        <h1 className="upper">15+
                                            <span className="material-symbols-outlined">arrow_outward</span>
                                        </h1>
                                        <p>With 15 years of experience, we have earned numerous awards</p>
                                    </div>
                                    <div className="box">
                                        <h1 className="upper">150+
                                            <span className="material-symbols-outlined">arrow_outward</span>
                                        </h1>
                                        <p>We have a team of over 150 certified full-time professionals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LetsDiscuss