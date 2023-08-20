import React from 'react';
import snapchat from '../assets/snapchat.png';
import { NavLink } from 'react-router-dom';

const Snapchat = () => {
    return (
        <div className=''>
            <NavLink to='https://www.snapchat.com/'>
                <img src={snapchat} className='' alt="snapchat" />
            </NavLink>
        </div>
    )
}

export default Snapchat
