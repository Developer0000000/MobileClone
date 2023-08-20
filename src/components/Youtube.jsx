import React from 'react';
import youtube from '../assets/youtube.png';
import { NavLink } from 'react-router-dom';

const Youtube = () => {
    return (
        <div className=''>
            <NavLink to='https://www.youtube.com/'>
                <img src={youtube} className='bg-white rounded-full' alt="youtube" />
            </NavLink>
        </div>
    )
}

export default Youtube
