import React from 'react';
import chat from '../assets/chat.png';
import { NavLink } from 'react-router-dom';

const Message = () => {
    return (
        <div className='relative'>
            <NavLink to='https://play.google.com/store/apps/details?id=com.google.android.apps.messaging&hl=en&gl=US'>
                <img src={chat} className='' alt="chat" />
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full -top-1 -right-2">2</div>
            </NavLink>
        </div>
    )
}

export default Message
