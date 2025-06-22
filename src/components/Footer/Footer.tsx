import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-[80px]'>
        <div className='flex justify-center mt-10 gap-[113px] h-full w-full'>
            <div className='flex flex-col gap-[20px] w-[309px]'>
                <Image height={73} width={190} alt='sana' src={'/sana.png'}/>
                <p className='font-400 text-[18px] text-[#666666] leading-[30px]'>Empowering you with tools and resources for a healthier, happier life. SANA is here to support your journey every step of the way.</p>
            </div>
            <div className='flex flex-col gap-[20px] w-[135px]'>
                <h1 className='font-600 text-[28px] leading-[30px]'>Navigation</h1>
                <ul className='flex flex-col gap-[10px] font-400 text-[18px] leading-[30px] text-[#666666]'>
                    <li>Home</li>
                    <li>What is Sana</li>
                    <li>Professionals</li>
                    <li>Clients</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-600 text-[28px] leading-[30px]'>Legal Information</h1>
                <ul className='flex flex-col gap-[10px] font-400 text-[18px] leading-[30px] text-[#666666]'>
                    <li>Privacy</li>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-600 text-[28px] leading-[30px]'>Social Links</h1>
                <div className='flex'>
                    <Image className='flex justify-start' height={83} width={83} alt='facebook' src={'/fb.png'}/>
                    <Image className='flex justify-start' height={83} width={83} alt='ig' src={'/ig.png'}/>
                    <Image className='flex justify-start' height={83} width={83} alt='x' src={'/x.png'}/>
                    <Image className='flex justify-start' height={83} width={83} alt='linkedin' src={'/linkedin.png'}/>
                </div>
                <div className='flex flex-col gap-2 text-[#666666]'>
                    <h1 className='font-400 text-[18px] leading-[30px]'>Contact Us</h1>
                    <h1 className='font-400 text-[14px] leading-[22px]'>hello@mysana.io</h1>
                </div>
            </div>
        </div>
        <div className='h-[56px] bg-[#36541D] w-full text-white flex items-center justify-center'>© 2025 Copyright | All rights reserved</div>
    </footer>
  )
}

export default Footer