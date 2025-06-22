import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white text-black px-10 pt-[20px] font-[400]'>
        <div className='h-full w-full'>
            <Image alt='sana' height={100} width={300} src={'/sana.png'}/>
        </div>
        <div className='flex items-center gap-12'>
            <span className='text-[40px]'>Home</span>
            <span className='text-[40px]'>Features</span>
            <button className='bg-[#35531C] rounded-[46.14px] w-[300px] h-[71.98px] text-white text-[36.91px] flex justify-center items-center'>Join Waitlist</button>
        </div>
    </div>
  )
}

export default Navbar