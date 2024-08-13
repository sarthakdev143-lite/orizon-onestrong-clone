import React from 'react'
import './OurServices.css'

const OurServices = ({ services }) => {
  return (
    <>
      <section id="our-services">
        <div id="our-services-wrapper">
          <div className="head">
            <h1>OUR SERVICES</h1>
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
                          <h1>{service.name}</h1>
                          <p>{service.text}</p>
                        </div>
                      </div>
                      <div className="tags">
                        {
                          service.tags.map(tag => (
                            <div key={tag} className="tag">{tag}</div>
                          ))
                        }
                      </div>
                    </div>
                    <figure className={service.imgSrc ? '' : 'disappear'}>
                      <img src={service.imgSrc} alt='our service img' />
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

export default OurServices