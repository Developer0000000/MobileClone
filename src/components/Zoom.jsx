import React from 'react';
import zoom from '../assets/zoom.png';
import { NavLink } from 'react-router-dom';

const Zoom = () => {
    return (
        <div className=''>
            <NavLink to='https://zoom.us/'>
                <img src={zoom} className='' alt="zoom" />
            </NavLink>
        </div>
    )
}

export default Zoom
