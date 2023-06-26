import React from 'react';
import "../styles/main.css";
import HeaderLogo from "../assets/logo.svg";

const Landing = () => {

    return (
        <section className='landing'>
            <header className='landing__header'>
                <img className="landing__header-logo" src={HeaderLogo} alt="logo with capital letters HV" />
            </header>

            <main className='landing__main'>
                <div className='landing__main-wrapper-text'>
                    <p className='landing__main-header-text'>Welcome to my portfolio.</p>
                    <p className='landing__main-text'>I'm Hector. Here you can find photos of some of the products that I've sold, my contact details and resume.</p>
                    <p className='landing__main-header-text'>Thank you for stopping by!</p>
                </div>
                <div className='landing__main-wrapper-actions'>
                    <i className='landing__main-icon'></i>
                    <span className='landing__main-text-contact'>hectorvillaverde@shaw.ca</span>
                    <span className='landing__main-text-contact'>Vancouver BC, Canada</span>
                </div>
                <div className="landing__main-images">
                    {/* images go here */}
                </div>
            </main>
        </section>
    )
}

export default Landing;