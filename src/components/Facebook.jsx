import React from 'react';
import facebook from '../assets/facebook.png';
import { NavLink } from 'react-router-dom';

const Facebook = () => {
    return (
        <div className=''>
            <NavLink to='https://facebook.com' >
                <img src={facebook} className='bg-white rounded-full' alt="facebook" />
            </NavLink>
        </div>
    )
}

export default Facebook
