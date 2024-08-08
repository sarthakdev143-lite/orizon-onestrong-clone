import React from 'react';
import './Case_Studies.css';
import Workflow_System_Energy from './imgs/workflow-system-energy.jpg';
import SaaS_for_End_to_End_Analytics from './imgs/saas-for-end-to-end-analytics.jpg';
import Workload_Management from './imgs/workload-management.jpg';
import Qpay_E_wallet_mobile from './imgs/qpay-e-wallet-mobile.jpg';
import Fitness_and_Personal_Trainers from './imgs/fitness-and-personal-trainers.jpg';
import Nutrition_Coach_and_Nutritionist from './imgs/nutrition-coach-and-nutritionist.jpg';

const studies_boxes = [
    { src: Workflow_System_Energy, alt: "Workflow System Energy", tag: "web development", industry: "oil & gas", title: "Workflow System Energy" },
    { src: SaaS_for_End_to_End_Analytics, alt: "SaaS for End-to-End Analytics", tag: "custom software", industry: "ecommerce", title: "SaaS for End-to-End Analytics" },
    { src: Workload_Management, alt: "Workload Management", tag: "web development", industry: "web development", title: "Workload Management" },
    { src: Qpay_E_wallet_mobile, alt: "Qpay E-wallet mobile", tag: "mobile app", industry: "oil & gas", title: "Qpay E-wallet mobile" },
    { src: Fitness_and_Personal_Trainers, alt: "Fitness & Personal Trainers", tag: "web development", industry: "ecommerce", title: "Fitness & Personal Trainers" },
    { src: Nutrition_Coach_and_Nutritionist, alt: "Nutrition Coach & Nutritionist", tag: "custom software", industry: "web development", title: "Nutrition Coach & Nutritionist" }
]

const Case_Studies = ({ showHead }) => {
    return (
        <section id='case-studies' className={`case-studies ${!showHead ? 'used' : ''}`}>
            <div className="studies-wrapper">
                {showHead && <h1 className='heading'>
                    Case Studies
                    <button>
                        All Case
                        <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                </h1>}
                <div className="studies">
                    {studies_boxes.map((box, index) => (
                        <article key={index} className="box">
                            <figure>
                                <img src={box.src} alt={box.alt} />
                                <figcaption className='tag'>{box.tag}</figcaption>
                            </figure>
                            <div className="title">
                                <h5>{box.industry}</h5>
                                <h1>{box.title}</h1>
                                <span className="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Case_Studies;
