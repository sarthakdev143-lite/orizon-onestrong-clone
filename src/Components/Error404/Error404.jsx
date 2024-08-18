import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
    return (
        <>
            <section id="not-found">
                <div id="not-found-wrapper">
                    <div className="content">
                        <h1>ERROR PAGE</h1>
                        <h1>404</h1>
                        <h1>OOPS, PAGE NOT FOUND!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, nec mattis, pulvinar dapibus leo.</p>
                        <NavLink to='/' className="nav-link">
                            BACK TO HOME
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error404