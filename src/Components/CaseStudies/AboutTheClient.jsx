import React from 'react'

const AboutTheClient = ({ heading }) => {
    const clientPoints = [
        { index: "01/", para: "We embrace innovation as a key driver of growth and progress. We continuously explore emerging technologies, industry trends." },
        { index: "04/", para: "We believe in the power of collaboration and teamwork. We foster an  and collaborative work environment", },
        { index: "02/", para: "Our clients' success is our top priority. We are dedicated to understanding  unique challenges, goals, and aspirations.", },
        { index: "05/", para: "We conduct our business with the utmost integrity and ethical conduct. , transparency", },
        { index: "03/", para: "We are committed to delivering software solutions of the highest quality and  reliability.", },
        { index: "06/", para: "We uphold the highest ethical standards in our business practices. Honesty, , and accountability.", },
    ]

    return (
        <div className="about-client-points">
            {heading && <h1>ABOUT THE CLIENT</h1>}
            <article className="points">
                {
                    clientPoints.map(point => (
                        <div className="point">
                            <h1>{point.index}</h1>
                            <p>{point.para}</p>
                        </div>
                    ))
                }
            </article>
        </div>
    )
}

export default AboutTheClient