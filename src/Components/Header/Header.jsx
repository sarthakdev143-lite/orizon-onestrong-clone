import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <section className='logo-fig'>
                    <img className='logo' src={require('./logo.png')} alt="Logo Not Found!" />
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
                    <h1>+021-5557-874</h1>
                    <button>
                        Contact us <span class="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </button>
                </section>
            </nav>
        </header>
    )
}

export default Header