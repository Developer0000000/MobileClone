import React from 'react';
import instagram from '../assets/instagram.png';
import { NavLink } from 'react-router-dom';

const Instagram = () => {
    return (
        <div className='relative'>
            <NavLink to='https://www.instagram.com/'>
                <img src={instagram} className='' alt="instagram" />
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full -top-1 left-7">5</div>
            </NavLink>
        </div>
    )
}

export default Instagram
