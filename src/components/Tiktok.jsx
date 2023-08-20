import React from 'react';
import tiktok from '../assets/tik-tok.png';
import { NavLink } from 'react-router-dom';

const Tiktok = () => {
    return (
        <div className=''>
            <NavLink to='https://www.tiktok.com/'>
                <img src={tiktok} className='bg-white rounded-full' alt="tiktok" />
            </NavLink>
        </div>
    )
}

export default Tiktok
