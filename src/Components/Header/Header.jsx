import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [headerActive, setHeaderActive] = useState(false);

    const handleListClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <header id='first' className={headerActive ? 'active' : ''}>
                <nav>
                    <section className='logo-fig'>
                        <img className='logo' src={logo} alt="Logo Not Found!" />
                        <figcaption>
                            <i onClick={() => setHeaderActive(!headerActive)} className="ri-close-line"></i>
                        </figcaption>
                    </section>
                    <section id='links'>
                        <ul type='none' className='navbar-list'>
                            <NavLink to="/">
                                <li className='list'>
                                    <h1>home</h1>
                                </li>
                            </NavLink>
                            <li
                                className={`list ${activeIndex === 0 ? 'active' : ''}`}
                                onClick={() => handleListClick(0)}
                            >
                                <h1>services</h1>
                                <ul type='none' className={`dropdown ${activeIndex === 0 ? 'active' : ''}`}>
                                    <NavLink to="/services">
                                        <li>Services</li>
                                    </NavLink>
                                    <NavLink to="/services-detail">
                                        <li>Services Detail</li>
                                    </NavLink>
                                </ul>
                            </li>
                            <li
                                className={`list ${activeIndex === 1 ? 'active' : ''}`}
                                onClick={() => handleListClick(1)}
                            >
                                <h1>industries</h1>
                                <ul type='none' className={`dropdown ${activeIndex === 1 ? 'active' : ''}`}>
                                    <NavLink to="/industries">
                                        <li>Industries</li>
                                    </NavLink>
                                    <NavLink to="/industry-detail">
                                        <li>Industry Detail</li>
                                    </NavLink>
                                </ul>
                            </li>
                            <li
                                className={`list ${activeIndex === 2 ? 'active' : ''}`}
                                onClick={() => handleListClick(2)}
                            >
                                <h1>case study</h1>
                                <ul type='none' className={`dropdown ${activeIndex === 2 ? 'active' : ''}`}>
                                    <NavLink to="/case-studies">
                                        <li>Case Studies</li>
                                    </NavLink>
                                    <NavLink to="/case-studies-detail">
                                        <li>Case Studies Detail</li>
                                    </NavLink>
                                </ul>
                            </li>
                            <li
                                className={`list ${activeIndex === 3 ? 'active' : ''}`}
                                onClick={() => handleListClick(3)}
                            >
                                <h1>page</h1>
                                <ul type='none' className={`dropdown ${activeIndex === 3 ? 'active' : ''}`}>
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
                            <NavLink to="/contacts">
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
            <header id="second">
                <nav>
                    <figure className='logo-fig'>
                        <img className='logo' src={logo} alt="logo" />
                    </figure>
                    <div id="menu">
                        <i onClick={() => setHeaderActive(!headerActive)} className="ri-menu-3-line"></i>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
