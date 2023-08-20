import React from 'react';
import phone from '../assets/phone-call.png';
import { NavLink } from 'react-router-dom';

const Phone = () => {
    return (
        <div className=''>
            <NavLink to='https://play.google.com/store/apps/details?id=com.google.android.contacts&hl=en&gl=US'>
                <img src={phone} className='bg-white rounded-full' alt="phone" />
            </NavLink>
        </div>
    )
}

export default Phone
