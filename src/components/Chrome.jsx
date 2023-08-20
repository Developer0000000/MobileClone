import React from 'react';
import chrome from '../assets/chrome.png';
import { NavLink } from 'react-router-dom';

const Chrome = () => {
    return (
        <div className=''>
            <NavLink to='https://www.google.com/'>
                <img src={chrome} className='' alt="chrome" />
            </NavLink>
        </div>
    )
}

export default Chrome
