import React from 'react';
import { GalleryImage } from './images';

interface PhotoViewerProps {
    img: GalleryImage;
}

const PhotoViewer = ({ img } :PhotoViewerProps) => {

    return (
        <div className='photo-viewer'>
            <div className='photo-viewer__img-text-wrapper'>
                <div className="photo-viewer__img-wrapper">
                    <img src={img.img} alt={img.description} className="photo-viewer__img" />
                </div>
                <div className="photo-viewer__text-wrapper">
                    <span className="photo-viewer__text">{img.description}</span>
                </div>
            </div>
        </div>
    )
}

export default PhotoViewer;