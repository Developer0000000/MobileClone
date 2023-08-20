import React from 'react';
import whatsapp from '../assets/whatsapp.png';
import { NavLink } from 'react-router-dom';


const Whatsapp = () => {
    return (
        <div className='relative'>
            <NavLink to='https://web.whatsapp.com/'>
                <img src={whatsapp} alt="whatsapp" className='w-[18.3%] relative rounded-full' />
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full -top-1 left-7">5</div>
            </NavLink>
        </div>
    )
}

export default Whatsapp
