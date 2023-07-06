import React from 'react';
import AboutImg from "../assets/images/about-me/hero-about-me.png";
import { aboutImgs } from './images';

const About = () => {

    return (
        <section className='section'>
            <h2 className="section__title">About me</h2>
            <div className="section__title-underline section__title-underline_color_two"></div>
            <div className='section__body section__body_layout_inverted'>
                <div className="section__body-wrapper">
                    <div className="section__img-wrapper margin-left-auto">
                        <img className="section__img" src={AboutImg} alt="hector smiling" />
                    </div>
                    <p className="section__text margin-left-auto">These are a few activities that I look forward to do in my free time. Click to enlarge!</p>
                </div>
                <div className="section__body-wrapper">
                    <ul className="section__list">
                        
                    {aboutImgs.map((img) => {

                        return (
                            <li className='section__list-item'>
                                <div className='section__list-item-img-wrapper'>
                                    <img className='section__list-item-img' src={img.img} alt={img.description}/>
                                </div>
                                <p className='section__list-item-text'>{img.description}</p>
                            </li>
                        )
                    })}

                    </ul>
                </div>
            </div>
        </section>
    )
};

export default About;