import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <section id='logo'>
                    <figure className='logo-fig'>
                        <img className='logo' src={require('./logo.png')} alt="Logo Not Found!" />
                    </figure>
                </section>
                <section id='links'>
                    <ul type='none'>
                        <li>home</li>
                        <li>services</li>
                        <li>industries</li>
                        <li>case study</li>
                        <li>page</li>
                        <li>contacts</li>
                    </ul>
                </section>
                <section id='contact'>
                    <h4>+021-5557-874</h4>
                    <button>
                        Contact us <i class="ri-arrow-right-up-line"></i>
                    </button>
                </section>
            </nav>
        </header>
    )
}

export default Header