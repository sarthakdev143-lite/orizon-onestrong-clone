import React from 'react'
import './OurOffice.css'

const office = [
    { index: '01/', type: 'Location', name: 'Jl. Soekarno-hatta', },
    { index: '02/', type: 'Phone', name: '+021-5557-874', },
    { index: '03/', type: 'Email', name: 'orizon@mail.com', },
    { index: '04/', type: 'Open Hours', name: '10 am – 5 pm', },
]

const OurOffice = () => {
    return (
        <section id="our-office">
            <div id="our-office-wrapper">
                <div className="left">
                    <h1>OUR OFFICE</h1>
                </div>
                <div className="right">
                    {
                        office.map(elem => (
                            <div className="element">
                                <h1 className="index">{elem.index}</h1>
                                <div className="wrap">
                                    <h2 className="type">{elem.type}</h2>
                                    <h1 className="name">{elem.name}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurOffice