import Image from 'next/image'
import React from 'react'

interface CardProps {
  icon: string;
  title: string;
  description: string;  
  dimensions: number;
}

const Card :React.FC<CardProps>= ({icon,title,description,dimensions}) => {
  return (
    <div className='cursor-pointer w-[380px] h-[380px] bg-white rounded-[20px] border-2 border-gray-200 hover:border-[#35531C] flex flex-col gap-5 p-6 transition-all duration-300 ease-in-out group'>
        <div className='p-2 bg-[#EBFFDA] rounded-full w-fit group-hover:bg-[#e2ffc4] transition-all duration-300'>
            <Image src={icon} alt={title} width={dimensions} height={dimensions} />
        </div>
        <h2 className='text-[#35531C] text-[32px] font-[500] leading-[40px]'>{title}</h2>
        <p className='text-[22px] font-[275] leading-[29px]'>{description}</p>
    </div>
  )
}
export default Card