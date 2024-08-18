import React from 'react'
import './LetsDiscuss.css'

const LetsDiscuss = () => {
    return (
        <>
            <section id="lets-discuss-your-project">
                <div id="lets-discuss-your-project-wrapper">
                    <article>
                        <h1>Let's discuss your project</h1>
                        <p>Order a free consultation – our experts will select the most effective solution</p>
                    </article>
                    <form action="#">
                        <input type="text" placeholder='Name' required />
                        <div className="inline">
                            <input type="text" placeholder='Phone' required />
                            <input type="text" placeholder='Email' required />
                        </div>
                        <div className="inline">
                            <select name="" id="" required >
                                <option value="">Industry</option>
                                <option value="">Real Estate</option>
                                <option value="">Oil & Gas</option>
                                <option value="">Ecommerce</option>
                                <option value="">Logistics</option>
                                <option value="">Fintech</option>
                                <option value="">Healthcare</option>
                                <option value="">Agriculture</option>
                            </select>
                            <select name="" id="" required >
                                <option value="">Expected Budget</option>
                                <option value="">10 K</option>
                                <option value="">20 K - 50 K</option>
                                <option value="">50 K - 100 K</option>
                                <option value="">100 K</option>
                                <option value="">N/A</option>
                            </select>
                        </div>
                        <textarea name="" id="" placeholder='Message' required ></textarea>
                        <div className="checkbox">
                            <label className="container">
                                <input type="checkbox" required />
                                <div className="checkmark"></div>
                            </label>
                            <p>I agree that my personal information will be processed and stored by Orizon.</p>
                        </div>
                        <input type="submit" value="SEND MESSAGE" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default LetsDiscuss