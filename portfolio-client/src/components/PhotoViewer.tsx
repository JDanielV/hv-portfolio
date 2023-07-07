import React from 'react';
import { GalleryImage } from './images';
import CloseSvg from "../assets/close.svg";

interface PhotoViewerProps {
    img: GalleryImage;
    handleClosePhotoViewer: () => void;
}

const PhotoViewer = ({ img, handleClosePhotoViewer } :PhotoViewerProps) => {

    return (
        <div className='photo-viewer'>
            <div className='photo-viewer__img-text-wrapper'>
                <div className="photo-viewer__img-wrapper">
                    <img src={img.img} alt={img.description} className="photo-viewer__img" />
                </div>
                <div className="photo-viewer__text-wrapper">
                    <span className="photo-viewer__text">{img.description}</span>
                </div>
                <button className="photo-viewer__close-btn" onClick={handleClosePhotoViewer}>
                    <img src={CloseSvg} alt="close" className="photo-viewer__close-img" />
                </button>
            </div>
            <div className="photo-viewer__overlay"></div>
        </div>
    )
}

export default PhotoViewer;