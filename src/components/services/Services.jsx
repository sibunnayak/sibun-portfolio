import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const[toggleState,settoggleState] = useState(0);

    const toggleTab = (index) =>{
        settoggleState(index);
    }

  return (
    <section className="services section" id="services">
         <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer as a Developer & Freelancer</span>

        <div className="services__container container grid">
            <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Full-Stack <br/> Web Developer</h3>

            </div>

            <span className="services__button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Full-Stack Web Developer</h3>
                    <p className="services__modal-description"> I build complete, scalable, and high-performance web applications using modern technologies like React, Node.js, Golang, and SQL/NoSQL databases.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I build fully responsive and modern UI.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">REST API & backend development.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Secure authentication & authorization (JWT, OAuth).</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Integration with databases (MySQL, PostgreSQL, MongoDB).</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Building scalable, production-ready full-stack apps.</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Backend & API <br/> Development</h3>

            </div>

            <span className="services__button" onClick={()=> toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Backend & API Development</h3>
                    <p className="services__modal-description">I design and develop fast, secure, and scalable backend systems using Golang, Node.js, GIN, GORM, and SQL databases.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Custom REST API and microservices development.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Database design, optimization & indexing.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">High-performance Golang backend architecture.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Role-based access control & security.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Clean, maintainable, and production-quality code.</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Deployment & <br/> Hosting Expert</h3>

            </div>

            <span className="services__button" onClick={()=> toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Website Deployment & DevOps</h3>
                    <p className="services__modal-description"> I deploy and manage web applications with modern cloud and hosting platforms, ensuring speed, reliability, and smooth CI/CD.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frontend & backend deployment on Render, Vercel, Netlify, CPanel.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Dockerization & container-based deployment.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Domain setup, DNS, SSL configuration.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">CI/CD pipelines for automated deployments.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Server & performance optimization.</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services