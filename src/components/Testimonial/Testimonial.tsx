import React from 'react'

const testimonialItems = [
  {
    id: 1,
    name: 'Emma R.',
    role: 'Yoga Instructor',
    testimonial: 'Sana has transformed how I approach my wellness journey. The integrated approach makes everything so much easier.',
    image: '/emma.jpg', 
  },
  {
    id: 2,
    name: 'Micahel T.',
    role: 'Tech Executive',
    testimonial: 'Being able to consult with specialists and get my prescriptions all in one place has been a game-changer for me.',
    image: '/michael.png', 
  },
  {
    id: 3,
    name: 'Sarah K.',
    role: 'Marathon Runner',
    testimonial: 'The personalized wellness plan provided through Sana helped me achieve my health goals faster than I imagined possible.',
    image: '/sarah.png', 
  },
]
const Testimonial = () => {
  return (
    <div className='bg-[#FBFBFB] py-20 px-10'>
        <h1 className='text-[#35531C] font-[500] text-[75px] leading-[60px] text-center'>What Our Early Users Say</h1>
        <div className='flex justify-center mt-24'>
            <div className='flex gap-5'>
                {testimonialItems.map((item) => (
                    <div key={item.id} className='bg-white p-6 shadow-lg rounded-[29px] h-[359px] w-[411px] flex flex-col justify-center gap-8'>
                        <div className='flex items-center justify-start'>
                            <img src='/comma.png' alt='comma' className='w-[29px] h-[16px]' />
                        </div>
                        <p className='font-[400] text-[20px] leading-[25px]'>{item.testimonial}</p>
                        <div className='flex items-center gap-4'>
                            <img src={item.image} alt={item.name} className='w-[82px] h-[82px] rounded-full object-cover' />
                            <div>
                                <h3 className='text-[16px] text-[#36541D] font-[400] te'>{item.name}</h3>
                                <p className='text-[16px] font-[400]'>{item.role}</p>
                            </div>
                        </div>
                        {/* <img src={item.image} alt={item.name} className='w-24 h-24 rounded-full mb-4 mx-auto' />
                        <h3 className='text-xl font-semibold text-center'>{item.name}</h3>
                        <p className='text-gray-500 text-center'>{item.role}</p> */}
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Testimonial