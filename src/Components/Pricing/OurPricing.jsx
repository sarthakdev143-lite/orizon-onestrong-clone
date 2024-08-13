import React from 'react'
import './OurPricing.css'

const services = [
    { id: 'service1', index: '01/', name: 'Evaluation & Design', price: '$1500 /Project', tags: ['research & development', 'scoping session', 'ui review', 'ui design', 'branding', 'product design'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
    { id: 'service2', index: '02/', name: 'Custom Software', price: '$5000 /Project', tags: ['crm development', 'erp software', 'cloud app', 'webapp', 'branding', 'product development', 'nft marketplace'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
    { id: 'service3', index: '03/', name: 'Web Development', price: '$4000 /Project', tags: ['frontend', 'php backend', 'java', 'node.js', '.net'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
    { id: 'service4', index: '04/', name: 'Mobile Development', price: '$4000 /Project', tags: ['ios app', 'android app', 'react native', 'flutter', 'cross-platform', 'hybrid app'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
];

const OurPricing = () => {
    return (
        <>
            <section id="pricing">
                <div id="pricing-wrapper">
                    <div className="head">
                        <h1>Pricing</h1>
                        <p>Tailored to you  we create custom software specifically designed to meet your unique business needs.</p>
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
                            {
                                services.map(service => (
                                    <div
                                        id={service.id}
                                        key={service.id}
                                        className='service'
                                    >
                                        <div className={`super-wrap ${service.imgSrc ? 'shrink' : ''}`}>
                                            <div className="wrap">
                                                <h2>{service.index}</h2>
                                                <div className="sub-wrap">
                                                    <h3>{service.price}</h3>
                                                    <h1>{service.name}</h1>
                                                    <p>{service.text}</p>
                                                    <div className="tags">
                                                        {
                                                            service.tags.map(tag => (
                                                                <div className="pricing-checkbox">
                                                                    <i class="ri-checkbox-circle-fill"></i>
                                                                    {tag}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <figure className={service.imgSrc ? '' : 'disappear'}>
                                            <img src={service.imgSrc} alt='our pricing pic' />
                                        </figure>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurPricing