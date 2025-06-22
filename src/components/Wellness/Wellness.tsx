import Image from 'next/image'
import React from 'react'


const wellnessImages=[
    {
        id: 1,
        src: '/image1.png',
        alt: 'Wellness Image 1',
        border: "border-[#35531C]",
    },
    {
        id: 2,
        src: '/image2.png',
        alt: 'Wellness Image 2',
        border: "border-transparent bg-[#EBFFDA]",
    },
    {
        id: 3,
        src: '/image3.png',
        alt: 'Wellness Image 3',
        border: "border-[#9FB770]",
    },
    {
        id: 4,
        src: '/image4.png',
        alt: 'Wellness Image 4',
        border: "border-[#9FB770]",
    },
    {
        id: 5,
        src: '/image5.png',
        alt: 'Wellness Image 5',
        border: "border-[#35531C]",
    },
    {
        id: 6,
        src: '/image6.png',
        alt: 'Wellness Image 6',
        border: "border-transparent bg-[#EBFFDA]",
    },
]
const Wellness = () => {
  return (
    <div className='flex flex-col items-center gap-14 mt-5'>
        <div className='w-[56.56rem]'>
            <h1 className='font-[500] text-[4.5rem] text-center leading-[80px]'>Your <span className='text-[#35531C]'>Wellness</span> Companion for Mind & Body</h1>
        </div>
        <div className='w-[48rem]'>
            <p className='text-center text-[24px] leading-[29px] font-[275]'>Sana connects you with wellness professionals, simplifies appointment booking, and delivers prescribed medications to your doorstep.</p>
        </div>
        <div className='flex flex-wrap justify-center w-[75rem] gap-20'>
            {wellnessImages.map((image) => (
                <div key={image.id} className={`w-[282px] h-[170px] border-[3.5px] rounded-lg ${image.border}`}>
                    <img src={image.src} alt={image.alt} className='w-full h-full object-cover rounded-[20px]' />
             </div>
            ))}
        </div>
        <div className='flex justify-center gap-5 text-[31px]'>
            <button className='w-[220.93px] h-[60.47px] bg-[#35531C] rounded-[38.76px] text-white'>Join Waitlist</button>
            <button className='w-[220.93px] h-[60.47px] border-[2.33px] border-[#35531C] rounded-[38.76px] text-black'>Learn More</button>
        </div>
        <div className='absolute -bottom-[340px] -z-10 -left-0 overflow-hidden'>
            <Image src={'/leafleft.png'} width={567} height={250} alt='wellness' className='w-full h-auto' />
        </div>
        <div className='absolute -bottom-[360px] -z-10 -right-0 overflow-hidden'>
            <Image src={'/leafright.png'} width={674} height={504} alt='wellness' className='w-full h-auto' />
        </div>        
        <div className='w-full pl-[12px] flex justify-between h-[139px] items-center bg-[#35531C]'>
            <Image src={'/ms.png'} width={210} height={88} alt='ms'/>
            <Image src={'/cnm.png'} width={301} height={87} alt='cnm'/>
            <Image src={'/aws.png'} width={242} height={88} alt='aws'/>
            <Image src={'/psb.png'} width={189} height={76} alt='psb'/>
        </div>
    </div>
  )
}

export default Wellness