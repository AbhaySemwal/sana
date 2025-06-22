import React from 'react'
import Card from '../Card/Card'

const expectationItems= [
    {
        id: 1,
        title: 'One-Screen Consults',
        description: 'HD video, real-time notes, and secure chat in a single view—no extra tabs, no copy-paste.',
        icon: '/onescreen.png',
        dimensions:46,
    },
    {
        id: 2,
        title: 'Effortless Scheduling',  
        description: 'One calendar for both sides—clients book in seconds, pros get auto-synced slots, reminders, and zero double-bookings.',
        icon: '/el.png',
        dimensions:48,
    },
    {
        id: 3,
        title: 'Practice Dashboard',
        description: 'Daily schedule, invoices, and client files all under one roof—cuts admin time by 25 %.',           
        icon: '/practice.png', 
        dimensions:48,
    },
    {
        id: 4,
        title: 'Personal Companion',
        description: 'Five-second mood & symptom check-ins unlock bite-size insights that keep clients on track between visits.',
        icon: '/personal.png',
        dimensions:55,
    },
    {
        id: 5,
        title: 'Remedy Marketplace',
        description: 'Order practitioner-approved herbs and supplements with auto-refill and doorstep delivery—right inside the app.',
        icon: '/cart.png',
        dimensions:52,
    },
    {
        id: 6,
        title: 'Privacy & Compliance',
        description: 'End-to-end encryption plus GDPR/HIPAA safeguards. Your data, your rules.',
        icon: '/shield.png',
        dimensions:48,
    },
]
const WhatToExpect = () => {
  return (
    <div className='w-[1283px] h-[992px] mt-20 mx-auto flex flex-col gap-14'>
        <div className='flex flex-col gap-10 items-center'>
            <h1 className='text-[#36541D] w-[600px] text-center font-500 text-[80px] leading-[64px]'>What to Expect</h1>
            <p className='w-[704px] text-center font-[275] text-[24px] leading-[29px]'>SANA streamlines holistic care for clients and professionals so every session, message, and milestone lives in one place.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
            {expectationItems.map((item) => (
                <Card
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    dimensions={item.dimensions}
                />
            ))}
        </div>
    </div>
  )
}

export default WhatToExpect