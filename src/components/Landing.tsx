import React, { useState } from 'react';
import "../styles/main.css";
import Work from "./Work";
import About from "./About";
import PhotoViewer from './PhotoViewer';
import HeaderLogo from "../assets/logo.svg";
import LinkedInLogo from "../assets/linkedin_blue.svg";
import { GalleryImage } from './images';

export interface SectionProps {
    handleImgClick: (img: GalleryImage) => void;
}

const Landing = () => {

    const [clickedImg, setClickedImg] = useState<GalleryImage | null>(null);

    const handleImgClick = (img: GalleryImage) => {
        setClickedImg(img);
    }

    const handleClosePhotoViewer = () => {
        setClickedImg(null);
    }

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
                                <a href="https://www.linkedin.com/in/hector-villaverde-9a24019/" target='_blank'>
                                    <img src={LinkedInLogo} alt="link to linkedin profile" className="landing__main-contact-link" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Work handleImgClick={handleImgClick} />
                <About handleImgClick={handleImgClick} />
            </main>
            {clickedImg && 
                <PhotoViewer 
                    img={clickedImg} 
                    handleClosePhotoViewer={handleClosePhotoViewer} 
                />
            }
        </section>
    )
}

export default Landing;