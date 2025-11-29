import React, { useState } from 'react';
import "./qualification.css";

export const Qualification = () => {
    const[toggleState,settoggleState] = useState(2);

    const toggleTab = (index) =>{
        settoggleState(index);
    };

  return (
    <section className="section qualification" id="qualification">
        <h2 className="section__title">Career Path</h2>
        <span className="section__subtitle">Education & Work Experience</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
            </div>

            <div className="qualification__sections">
                {/* education background */}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" }>
                    <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__title">U.G (B.Tech)</h3>
                            <span className="qualification__subtitle">NIST, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">Khallikote Junior College, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__title">Matriculation</h3>
                            <span className="qualification__subtitle">S.S.V.M Neelkantha Nagar, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                        <div>
                            <h3 className="qualification__title">Lower primary</h3>
                            <span className="qualification__subtitle">S.S.V.M Neelkantha Nagar, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2006 - 2017
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" }>
                                        <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__title">Stitch Financial Technologies India Pvt Ltd</h3>
                            <span className="qualification__role">Software Engineer (Chennai, IN)</span>
                                    <span className="qualification__about">
                                        Built scalable Go (Kratos) microservices for onboarding and loan workflows, integrating 7+ APIs and boosting system performance, automation, and reliability.
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Mar 2025 - Sept 2025
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                        <div>
                            <h3 className="qualification__title">Neonflake Enterprises (OPC) Pvt Ltd</h3>
                              <span className="qualification__role">Software Engineer (Hyderabad, IN)</span>
                                    <span className="qualification__about">
                                        Developed high-performance full-stack applications with React and Node.js, improving load speed, API reliability, and team delivery efficiency.
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Mar 2024 - Mar 2025
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__title">Manasio Pvt Ltd</h3>
                            <span className="qualification__role">Front-End Developer Intern (Remote)</span>
                                    <span className="qualification__about">
                                        Built fast, responsive React-based interfaces, reducing load times and accelerating feature delivery through Agile collaboration.
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Aug 2023 - Oct 2023
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>
            </div>

            </div>
        </div>
    </section>
  )
}
