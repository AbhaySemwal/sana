import Image from 'next/image'
import React from 'react'


const Form = () => {

const tags=[
    {
        id:1,
        name:"Mental Health",
    },
    {
        id:2,
        name:"Nutrition",
    },
    {
        id:3,
        name:"Fitness",
    },
    {
        id:4,
        name:"Alternative Fitness",
    },
    {
        id:5,
        name:"Meditation",
    },
    {
        id:6,
        name:"Sleep",
    },
]

  return (
    <div className='flex justify-center items-center py-10'>
        <div className='w-[1056px] h-[833px] flex shadow-2xl rounded-4xl '>
            <div className='w-1/2 flex flex-col pl-12 gap-10 bg-[#35531C] text-white rounded-l-4xl pt-12'>
                <h1 className='text-[64px] font-[500] leading-[68px] w-[456px]'>Join the Sana Waitlist</h1>
                <p className='font-[275] text-[24px] leading-[29px] w-[380px]'>Be among the first to experience the future of wellness care. Sign up to receive:</p>
                <ul className='list-disc pl-5 text-[24px] font-[275] leading-[29px] w-[450px] flex flex-col gap-4'>
                    <li>Early access to the Sana platform</li>
                    <li>Exclusive launch offers and discounts</li>
                    <li>Invitation to our beta testing program</li>      
                    <li>Wellness resources and tips</li>
                </ul>
            </div>
            <div className='w-1/2 bg-white px-12 pt-12 flex flex-col gap-8 rounded-r-4xl'>
                <form className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[24px] font-[400] leading-[44px] flex items-start'>First Name<span className='text-[10px] text-red-500 relative -top-1'>*</span></label>
                        <input
                            type='text'
                            placeholder='Enter your first name'
                            className='w-[379px] h-[72px] border-1 border-[#C8C8C8] rounded-[15px] px-6 text-[24px] font-[400] leading-[44px] bg-[#F8F8F8] placeholder:text-gray-400'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[24px] font-[400] leading-[44px] flex items-start'>Last Name</label>
                        <input
                            type='text'
                            placeholder='Enter your last name'
                            className='w-[379px] h-[72px] border-1 border-[#C8C8C8] rounded-[15px] px-6 text-[24px] font-[400] leading-[44px] bg-[#F8F8F8] placeholder:text-gray-400'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[24px] font-[400] leading-[44px] flex items-start'>Email Address<span className='text-[10px] text-red-500 relative -top-1'>*</span></label>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            className='w-[379px] h-[72px] border-1 border-[#C8C8C8] rounded-[15px] px-6 text-[24px] font-[400] leading-[44px] bg-[#F8F8F8] placeholder:text-gray-400'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[24px] font-[400] leading-[44px] flex items-start'>Interests (Optional)</label>
                        <div className='gap-4 flex flex-wrap'>
                            {tags.map((tag) => (
                                <button
                                    key={tag.id}
                                    type='button'
                                    className='bg-[#F8F8F8] border-1 border-[#C8C8C8] rounded-full py-1 px-5 text-[16px] font-[300] leading-[44px] hover:bg-[#E0E0E0]'
                                >
                                    {tag.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2 items-center justify-center mt-4'>
                        <button
                            type='submit'
                            className='w-[332px] h-[56px] bg-[#35531C] text-white rounded-[10px] text-[24px] font-[500] leading-[44px] hover:bg-[#4A6B2A]'
                        >
                            Join Waitlist
                        </button>
                        <p className='text-[12px] font-[300] leading-[15px] text-[#666666]'>
                        By joining, you agree to our <span className='text-[#36541D]'>Terms of Service</span> and  <span className='text-[#36541D]'>Privacy Policy</span>
                        </p>
                    </div>
                </form>

            </div>
        </div>
        <div className='absolute -bottom-[340px] -z-10 -left-0 overflow-hidden'>
            <Image src={'/leafleft.png'} width={682} height={301} alt='wellness' className='w-full h-auto' />
        </div>
        <div className='absolute -bottom-[360px] -z-10 -right-0 overflow-hidden'>
            <Image src={'/leafright.png'} width={674} height={504} alt='wellness' className='w-full h-auto' />
        </div>     
    </div>
  )
}

export default Form