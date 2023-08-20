import React from 'react';
import gallery from '../assets/gallery.png';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className=''>
            <NavLink to='https://play.google.com/store/apps/details?id=photography.blackgallery.android&hl=en&gl=US'>
                <img src={gallery} className='' alt="gallery" />
            </NavLink>
        </div>
    )
}

export default Gallery
