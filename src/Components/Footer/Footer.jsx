import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
                                <img src={CeoImage} alt="ceo's img" />
                            </figure>
                            <figcaption>
                                <h1>Ethan Johnson, CEO</h1>
                                <div className="contacts">
                                    <div className="contact email">
                                        <i className="ri-mail-line"></i> info@orizon.com
                                    </div>
                                    <div className="contact phone">
                                        <i className="ri-phone-fill"></i> +021-8742-852
                                    </div>
                                    <div className="contact location">
                                        <i className="ri-map-pin-2-fill"></i> Jl. Soekarno-hatta
                                    </div>
                                    <div className="contact insta">
                                        <i className="ri-instagram-line"></i> @orizon
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
                                <label className="container">
                                    <input type="checkbox" required />
                                    <div className="checkmark"></div>
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
                                    <Link to="#" className='logo-a'>
                                        <li>
                                            <i className="ri-linkedin-fill"></i>
                                        </li>
                                    </Link>
                                    <Link to="#" className='logo-a'>
                                        <li>
                                            <i className="ri-facebook-fill"></i>
                                        </li>
                                    </Link>
                                    <Link to="#" className='logo-a'>
                                        <li>
                                            <i className="ri-twitter-fill"></i>
                                        </li>
                                    </Link>
                                    <Link to="#" className='logo-a'>
                                        <li>
                                            <i className="ri-behance-fill"></i>
                                        </li>
                                    </Link>
                                    <Link to="#" className='logo-a'>
                                        <li>
                                            <i className="ri-instagram-line"></i>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="right">
                                <div className="column">
                                    <div className="section">
                                        <h2>Consulting</h2>
                                        <ul type='none'>
                                            <li>
                                                <Link to="#">
                                                    Discovery Phase
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Technology Consulting
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    IIT Audit Services
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="section">
                                        <h2>Product Design</h2>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    Product Experience Design
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Business Analysis
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="section">
                                        <h1>Services</h1>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    Evaluation & Design
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Custom Software
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Web Development
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Mobile Development
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Maintenance & Support
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Integration Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Cloud Infrastructure
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="section">
                                        <h1>About us</h1>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Case Studies
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="section">
                                        <h1>Contact us</h1>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="ri-phone-fill"></i> +021-5557-874
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="ri-map-pin-2-fill"></i> Jl. Soekarno-hatta
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="ri-mail-fill"></i> helloorizon@mail.com
                                                </Link>
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
                        <Link to="#">
                            <h5>PRIVACY POLICY</h5>
                        </Link>
                        <span className='divider'>|</span>
                        <Link to="#">
                            <h5>SITEMAP</h5>
                        </Link>
                    </div>
                    <div className="right">
                        <h5>COPYRIGHT © 2023 ORIZON</h5>
                        <span className='divider'>|</span>
                        <h5>POWERED BY ONECONTRIBUTOR</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
