import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <section className='logo-fig'>
                    <img className='logo' src={require('./logo.png')} alt="Logo Not Found!" />
                </section>
                <section id='links'>
                    <ul type='none' className='navbar-list'>
                        <li className='list'><NavLink to="/" exact activeClassName="active"><h1>home</h1></NavLink></li>
                        <li className='list'>
                            <h1>services</h1>
                            <ul type='none' className="dropdown">
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/services-detail">Services Detail</NavLink></li>
                            </ul>
                        </li>
                        <li className='list'>
                            <h1>industries</h1>
                            <ul type='none' className="dropdown">
                                <li><NavLink to="/industries">Industries</NavLink></li>
                                <li><NavLink to="/industry-detail">Industry Detail</NavLink></li>
                            </ul>
                        </li>
                        <li className='list'>
                            <h1>case study</h1>
                            <ul type='none' className="dropdown">
                                <li><NavLink to="/case-studies">Case Studies</NavLink></li>
                                <li><NavLink to="/case-studies-detail">Case Studies Detail</NavLink></li>
                            </ul>
                        </li>
                        <li className='list'>
                            <h1>page</h1>
                            <ul type='none' className="dropdown">
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/faq">FAQ</NavLink></li>
                                <li><NavLink to="/team">Our Team</NavLink></li>
                                <li><NavLink to="/review">Review</NavLink></li>
                                <li><NavLink to="/pricing">Pricing</NavLink></li>
                                <li><NavLink to="/404">404</NavLink></li>
                            </ul>
                        </li>
                        <li className='list'><NavLink to="/contacts" activeClassName="active"><h1>contacts</h1></NavLink></li>
                    </ul>
                </section>
                <section id='contact'>
                    <h1>+021-5557-874</h1>
                    <button>
                        Contact us <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </button>
                </section>
            </nav>
        </header>
    )
}

export default Header;
