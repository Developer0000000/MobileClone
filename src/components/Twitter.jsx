import React from 'react';
import twitter from '../assets/twitter-x.png';
import { NavLink } from 'react-router-dom';


const Twitter = () => {
    return (
        <div className='relative'>
            <NavLink to='https://twitter.com/home'>
                <img src={twitter} alt="twitter" className='w-[500px] rounded-full' />
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full -top-1 -right-1">10</div>
            </NavLink>
        </div>
    )
}

export default Twitter
