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
                        <NavLink to="/" exact activeClassName="active">
                            <li className='list'>
                                <h1>home</h1>
                            </li>
                        </NavLink>
                        <li className='list'>
                            <h1>services</h1>
                            <ul type='none' className="dropdown">
                                <NavLink to="/services">
                                    <li>Services</li>
                                </NavLink>
                                <NavLink to="/services-detail">
                                    <li>Services Detail</li>
                                </NavLink>
                            </ul>
                        </li>
                        <li className='list'>
                            <h1>industries</h1>
                            <ul type='none' className="dropdown">
                                <NavLink to="/industries">
                                    <li>Industries</li>
                                </NavLink>
                                <NavLink to="/industry-detail">
                                    <li>Industry Detail</li>
                                </NavLink>
                            </ul>
                        </li>
                        <li className='list'>
                            <h1>case study</h1>
                            <ul type='none' className="dropdown">
                                <NavLink to="/case-studies">
                                    <li>Case Studies</li>
                                </NavLink>
                                <NavLink to="/case-studies-detail">
                                    <li>Case Studies Detail</li>
                                </NavLink>
                            </ul>
                        </li>
                        <li className='list'>
                            <h1>page</h1>
                            <ul type='none' className="dropdown">
                                <NavLink to="/about">
                                    <li>About</li>
                                </NavLink>
                                <NavLink to="/faq">
                                    <li>FAQ</li>
                                </NavLink>
                                <NavLink to="/team">
                                    <li>Our Team</li>
                                </NavLink>
                                <NavLink to="/review">
                                    <li>Review</li>
                                </NavLink>
                                <NavLink to="/pricing">
                                    <li>Pricing</li>
                                </NavLink>
                                <NavLink to="/404">
                                    <li>404</li>
                                </NavLink>
                            </ul>
                        </li>
                        <NavLink to="/contacts" activeClassName="active">
                            <li className='list'>
                                <h1>contacts</h1>
                            </li>
                        </NavLink>
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
