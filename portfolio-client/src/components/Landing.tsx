import React from 'react';
import "../styles/main.css";
import Work from "./Work";
import About from "./About";
import HeaderLogo from "../assets/logo.svg";
import LinkedInLogo from "../assets/linkedin_blue.svg";
import NewTabIcon from "../assets/open_new.svg";

const Landing = () => {

    return (
        <section className='landing'>
            <header className='landing__header'>
                <img className="landing__header-logo" src={HeaderLogo} alt="logo with capital letters HV" />
            </header>

            <main className='landing__main'>
                <div className="landing__main-texts-wrapper">
                    <div className='landing__main-wrapper-text'>
                        <p className='landing__main-header-text'>Welcome to my portfolio.</p>
                        <p className='landing__main-text'>I'm Hector. Here you can find photos of some of the products that I've sold, my contact details and resume.</p>
                        <p className='landing__main-header-text'>Thank you for stopping by!</p>
                    </div>
                    <div className='landing__main-wrapper-text'>
                        <div className="landing__main-contact">
                            <span className='landing__main-text-contact'>hectorvillaverde@shaw.ca</span>
                            <span className='landing__main-text-contact'>Vancouver BC, Canada</span>
                            <div className="landing__main-contact-links">
                                <button className="landing__main-contact-btn">
                                    <span className="landing__main-contact-btn-text">Resume</span>
                                    <div className="landing__main-contact-btn-icon-wrapper">
                                        <img src={NewTabIcon} alt="open in new tab" className="landing__main-contact-btn-icon" />
                                    </div>
                                </button>
                                <a href="https://www.linkedin.com/in/hector-villaverde-9a24019/" target='_blank'>
                                    <img src={LinkedInLogo} alt="link to linkedin profile" className="landing__main-contact-link" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Work />
                <About />
            </main>
        </section>
    )
}

export default Landing;