import Image from 'next/image'
import React from 'react'

const FutureWellness = () => {
  return (
    <div className='bg-[#ECFFDB] h-[831px] flex px-40 py-10 mt-32'>
        <div className='w-1/2 flex flex-col gap-10'>
            <h1 className='text-[#35531C] text-[75px] font-[500] leading-[70px]'>The Future of Wellness Is Here</h1>
            <p className='font-[300] text-[24px] leading-[34px]'>Sana brings together the best of technology and human expertise to create a seamless wellness experience that fits into your lifestyle.</p>
            <ul className='flex flex-col marker:text-[#35531C] list-outside list-disc text-black font-[300] text-[24px] leading-[44px] pl-5'>
                <li>Access to certified professionals across multiple disciplines</li>
                <li>Secure video consultations from the comfort of home</li>
                <li>Smart appointment reminders and follow-ups</li>
                <li>Medication tracking and refill notifications</li>
                <li>Integrated wellness tracking with insights</li>
            </ul>
            <button className='w-[220.93px] h-[60.47px] bg-[#35531C] rounded-[38.76px] text-white text-[31px]'>Join Waitlist</button>
        </div>
        <div className='w-1/2 flex justify-end'>
          <Image height={400} width={400} alt='gif1' src={'/gif1.gif'}/>
        </div>
    </div>
  )
}

export default FutureWellness