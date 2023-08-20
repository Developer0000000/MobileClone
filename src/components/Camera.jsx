import React from 'react';
import camera from '../assets/camera.png';
import { NavLink } from 'react-router-dom';

const Camera = () => {
    return (
        <div className=''>
            <NavLink to='https://play.google.com/store/apps/details?id=net.sourceforge.opencamera&hl=en&gl=US'>
                <img src={camera} className='bg-white rounded-full' alt="camera" />
            </NavLink>
        </div>
    )
}

export default Camera
