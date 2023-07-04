import React from 'react';
import AboutImg from "../assets/images/about-me/hero-about-me.png";

const About = () => {

    return (
        <section className='section'>
            <h2 className="section__title">About me</h2>
            <div className="section__title-underline section__title-underline_color_two"></div>
            <div className='section__body section__body_layout_inverted'>
                <div className="section__body-wrapper">
                    <div className="section__img-wrapper">
                        <img className="section__img" src={AboutImg} alt="hector smiling" />
                    </div>
                    <p className="section__text">These are a few activities that I look forward to do in my free time. Click to enlarge!</p>
                </div>
                <div className="section__body-wrapper">
                    <div className="section__list"></div>
                </div>
            </div>
        </section>
    )
};

export default About;