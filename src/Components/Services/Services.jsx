import React from 'react'
import Landing from './LandingServices'
import OurApproach from '../Home/OurApproach/OurApproach'
import TechnologyStack from '../Home/TechnologyStack/TechnologyStack'
import Case_Studies from '../Home/Case_Studies/Case_Studies'
import './Services.css'
import OurServices from './OurServices/OurServices'

const services = [
    { id: 'service1', index: '01/', name: 'Evaluation & Design', tags: ['research & development', 'scoping session', 'ui review', 'ui design', 'branding', 'product design'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
    { id: 'service2', index: '02/', name: 'Custom Software', tags: ['crm development', 'erp software', 'cloud app', 'webapp', 'branding', 'product development', 'nft marketplace'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
    { id: 'service3', index: '03/', name: 'Web Development', tags: ['frontend', 'php backend', 'java', 'node.js', '.net'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
    { id: 'service4', index: '04/', name: 'Mobile Development', tags: ['ios app', 'android app', 'react native', 'flutter', 'cross-platform', 'hybrid app'], text: 'Our Evaluation & Design process serves as a solid foundation for the successful development and deployment of custom software solutions.' },
];

const Services = () => {
    return (
        <>
            <Landing />
            <OurServices services={services} />
            <OurApproach />
            <TechnologyStack />
            <hr />
            <Case_Studies />
        </>
    )
}

export default Services