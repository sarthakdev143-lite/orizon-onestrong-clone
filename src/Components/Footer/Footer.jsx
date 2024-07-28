import React from 'react'
import './Footer.css'

import Logo from './imgs/logo.png';
import CeoImage from './imgs/ceo-image.jpg';
import FooterBg from './imgs/footer-bg.jpg';

const Footer = () => {
    return (
        <footer>
            <div className="bg">
                <img src={FooterBg} alt="Footer Background" />
            </div>
            <div id="footer-wrapper">
                <div className="content">
                    <section className="part-1 part">
                        <div className="profile">
                            <figure>
                                <img src={CeoImage} alt="Picture" />
                            </figure>
                            <figcaption>
                                <h1>Ethan Johnson, CEO</h1>
                                <div className="contacts">
                                    <div className="contact email">
                                        <i class="ri-mail-line"></i> info@orizon.com
                                    </div>
                                    <div className="contact phone">
                                        <i class="ri-phone-fill"></i> +021-8742-852
                                    </div>
                                    <div className="contact location">
                                        <i class="ri-map-pin-2-fill"></i> Jl. Soekarno-hatta
                                    </div>
                                    <div className="contact insta">
                                        <i class="ri-instagram-line"></i> @orizon
                                    </div>
                                </div>
                            </figcaption>
                        </div>
                        <form action="#">
                            <h1>Start growing your business with us</h1>
                            <input type="text" placeholder='Name' required />
                            <div className="inline">
                                <input type="text" placeholder='Phone' required />
                                <input type="text" placeholder='Email' required />
                            </div>
                            <div className="inline">
                                <select name="" id="" required >
                                    <option value="">Select One</option>
                                    <option value="">Real Estate</option>
                                    <option value="">Oil & Gas</option>
                                    <option value="">Ecommerce</option>
                                    <option value="">Logistics</option>
                                    <option value="">Fintech</option>
                                    <option value="">Healthcare</option>
                                    <option value="">Agriculture</option>
                                </select>
                                <select name="" id="" required >
                                    <option value="">Select One</option>
                                    <option value="">10 K</option>
                                    <option value="">20 K - 50 K</option>
                                    <option value="">50 K - 100 K</option>
                                    <option value="">100 K</option>
                                    <option value="">N/A</option>
                                </select>
                            </div>
                            <textarea name="" id="" placeholder='Message' required ></textarea>
                            <div className="checkbox">
                                <label class="container">
                                    <input type="checkbox" required />
                                    <div class="checkmark"></div>
                                </label>
                                <p>I agree that my personal information will be processed and stored by Orizon.</p>
                            </div>
                            <input type="submit" value="SEND MESSAGE" />
                        </form>
                    </section>
                    <section className="part-2 part">
                        <div className="part-2-content-wrapper">
                            <div className="left">
                                <figure>
                                    <img src={Logo} alt="Logo" />
                                </figure>
                                <figcaption>Orizon — software product development services.</figcaption>
                                <ul type='none'>
                                    <a href="#" className='logo-a'>
                                        <li>
                                            <i class="ri-linkedin-fill"></i>
                                        </li>
                                    </a>
                                    <a href="#" className='logo-a'>
                                        <li>
                                            <i class="ri-facebook-fill"></i>
                                        </li>
                                    </a>
                                    <a href="#" className='logo-a'>
                                        <li>
                                            <i class="ri-twitter-fill"></i>
                                        </li>
                                    </a>
                                    <a href="#" className='logo-a'>
                                        <li>
                                            <i class="ri-behance-fill"></i>
                                        </li>
                                    </a>
                                    <a href="#" className='logo-a'>
                                        <li>
                                            <i class="ri-instagram-line"></i>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            <div className="right">
                                <div className="column">
                                    <div className="section">
                                        <h2>Consulting</h2>
                                        <ul type='none'>
                                            <li>
                                                <a href="#">
                                                    Discovery Phase
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Technology Consulting
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    IIT Audit Services
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="section">
                                        <h2>Product Design</h2>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Product Experience Design
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Business Analysis
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="section">
                                        <h1>Services</h1>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Evaluation & Design
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Custom Sofware
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Web Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Mobile Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Maintenance & Support
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Integration Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Cloud Infrastructure
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="section">
                                        <h1>About us</h1>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    About us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Case Studies
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="section">
                                        <h1>Contact us</h1>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-phone-fill"></i> +021-5557-874
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-map-pin-2-fill"></i> Jl. Soekarno-hatta
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-mail-fill"></i> helloorizon@mail.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bottom">
                    <div className="left">
                        <a href="#">
                            <h5>PRIVACY POLICY</h5>
                        </a>
                        <span className='divider'>|</span>
                        <a href="#">
                            <h5>SITEMAP</h5>
                        </a>
                    </div>
                    <div className="right">
                        <h5>COPYRIGHT © 2023 ORIZON</h5>
                        <span className='divider'>|</span>
                        <h5>POWERED BY ONECONTRIBUTOR</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer