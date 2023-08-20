import React from 'react'
import Phone from './components/phone'
import Message from './components/message'
import Chrome from './components/Chrome'
import Camera from './components/Camera'
import Twitter from './components/Twitter'
import Tiktok from './components/Tiktok'
import Facebook from './components/Facebook'
import Youtube from './components/Youtube'
import Instagram from './components/Instagram'
import Gallery from './components/Gallery'
import Snapchat from './components/Snapchat'
import Zoom from './components/Zoom'
import Whatsapp from './components/Whatsapp';

import internet from './assets/internet.png';
import sim1 from './assets/signal-status.png';
import sim2 from './assets/signal-status-1.png';
import battery from './assets/battery.png';



const MobileHome = ({ toggle, mode }) => {

    let date = new Date();



    return (
        <div className='overflow-hidden'>
            <div className='text-center text-2xl px-4 overflow-hidden w-full py-10 bg-sky-100'>The <span className='text-3xl text-indigo-800'>"White Dot on a Mobile"</span> is not a Camera. This is a toggle button, click it & see magic🎩🤭
                <span className='text-green-500'>Also click the link, this is only a clone not a scam page, Don't worry about it 😇</span>
            </div>
            <div className='py-10 lg:py-0 grid place-items-center h-[100vh] w-[100vw] bg-sky-100'>
                <div className='border-[1rem] border-gray-800 dark:border-gray-800 bg-gray-800 w-[90%] h-[90%] lg:w-[24%] lg:h-[90%] rounded-[2.5rem] relative'>

                    <div className='border-gray-800 dark:border-gray-800 bg-gray-800 h-[10%] w-2 absolute top-28 lg:-left-[1.3rem] -left-[1.26rem] rounded-lg'></div>
                    <div className='border-gray-800 dark:border-gray-800 bg-gray-800 h-[10%] w-2 absolute top-[11.5rem] lg:-left-[1.3rem] -left-[1.26rem] rounded-lg'></div>
                    <div className='border-gray-800 dark:border-gray-800 bg-gray-800 h-[12%] w-2 absolute top-36 lg:-right-[1.3rem] -right-[1.26rem]  rounded-lg'></div>

                    <div className='relative'>
                        {/* <div className='w-full h-6 flex justify-end absolute my-2 px-2 space-x-1 -top-2  rounded-t-full bg-white opacity-50'> */}
                        <div className='w-full h-4 flex justify-end absolute px-4 space-x-1.5 top-2  rounded-t-full invert text-white'>
                            <img src={internet} alt="wifi" className='h-4 self-center' />
                            <img src={sim2} alt="sim2" className='h-4 self-center' />
                            <img src={sim1} alt="sim1" className='h-4 self-center' />
                            <img src={battery} alt="battery" className='h-4 self-center' />
                            <div className={`absolute left-1 -top-1 text-${mode} invert`}>
                                {date.toLocaleTimeString()}
                            </div>
                        </div>


                        <div onClick={toggle} className=' cursor-pointer bg-gray-800 w-5 h-5 absolute top-1.5 left-[45%] rounded-full'>
                            <div className='bg-white w-2 h-2 mx-auto mt-1.5 rounded-full cursor-pointer '></div>
                        </div>
                    </div>

                    <div className={`h-full rounded-[2rem] dark:bg-gray-800 bg_image`}>

                        <div className={`p-2 text-${mode} text-center`}>
                            <p className={`text-center mt-20 text-4xl `}>
                                {date.toLocaleTimeString()}
                            </p>
                            {date.toDateString()}
                        </div>


                        <div className='bottom-icons px-4 absolute bottom-4 flex space-x-6 '>
                            <Phone />
                            <Message />
                            <Chrome />
                            <Camera />
                        </div>

                        <div className='bottom-icons px-4 absolute bottom-32 flex space-x-6 '>
                            <Instagram />
                            <Tiktok />
                            <Facebook />
                            <Youtube />
                        </div>

                        <div className='bottom-icons px-4 absolute bottom-52 flex space-x-6 '>
                            <Gallery />
                            <Snapchat />
                            <Zoom />
                            <Twitter />
                        </div>

                        <div className='bottom-icons px-4 absolute bottom-72 flex space-x-6 '>
                            <Whatsapp />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHome
