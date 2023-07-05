import React from 'react';
import WorkImg from "../assets/images/work/hero-work.png";

const Work = () => {

    return (
        <section className='section'>
            <h2 className="section__title">My work</h2>
            <div className="section__title-underline section__title-underline_color_one"></div>
            <div className='section__body'>
                <div className="section__body-wrapper">
                    <div className="section__img-wrapper">
                        <img className="section__img" src={WorkImg} alt="hand holding a shiny apple" />
                    </div>
                    <p className="section__text">This photo album is a recollection of some of the products and industries I have experience in. Scroll the gallery, click on a photo to enlarge.</p>
                </div>
                <div className="section__body-wrapper">
                    <div className="section__gallery">

                    </div>
                </div>
            </div>
        </section>
    )
};

export default Work;