import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import DaycareInfoCard from './daycareInfoCard';

function daycarePage() {
  return (
    <div className='flex flex-col h-screen bg-purple-300'>

      <div className='relative h-1/2 min-h-[400px] w-full '>
        <img className='h-1/2 fixed w-full min-h-[400px] object-cover brightness-75' src='/daycarePhoto.jpg'></img>
      </div>


      {/* <div className='relative -top-28'> */}

      <div className='relative h-1/2 yellow-amber-500 -top-28'>

        <div className='flex flex-col mx-16 align-bottom '>
          <h1 className='font-bold text-white text-2xl'>Kids Care Crowfoot</h1>
          <div className='flex justify-between'>
            <h1 className='text-white mb-4'>2654 Crowfoot Blvd</h1>
            <div className='flex flex-row gap-1'>
              <h1 className='text-white font-medium'>5.79</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-white hover:text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
          </div>

        </div>

        {/* Daycare provider infromation */}
        <div className='bg-white h-20 rounded-t-[40px]'>
          <div className='flex justify-left ml-16 items-center h-full gap-2'>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1564156280315-1d42b4651629?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className=''>Ray McCoy</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid grid-flow-col grid-cols-3 bg-white h-full min-h-screen w-full'>

          {/* Description */}
          <div className='flex justify-start col-span-2 '>
            <div className='mx-16 pt-10 w-full flex flex-col gap-y-4'>

              {/* About */}
              <div className='flex flex-col gap-y-4'>
                <h1 className='text-black text-2xl font-medium'>About</h1>
                <p className='flex'>
                  Ray McCoy understands the challenges faced by busy families juggling work and childcare responsibilities.
                  That's why he goes above and beyond to support parents while they're away from their children at work.
                  By providing a reliable and nurturing daycare service in Crowfoot,
                  Ray offers families peace of mind knowing that their children are in caring hands.
                  Through open communication and flexible scheduling options, Ray ensures that parents can focus on their work with confidence, knowing that their little ones are receiving quality care and attention. Whether it's sharing updates throughout the day or accommodating varying drop-off and pick-up times, Ray strives to make the transition between home and daycare as seamless as possible for both children and parents.
                  By creating a supportive and inclusive environment, Ray McCoy not only cares for the children entrusted to him but also supports busy families in their daily routines.
                </p>
              </div>

              <div className='bg-gray-200 my-8 h-[1px] w-full'>

              </div>

              {/* What this place Offers */}
              <h1 className='text-black text-2xl font-medium'>Our Services</h1>
              <div className='grid grid-cols-2'>

                {/* First column icons */}
                <div className='col-span-1 flex flex-col gap-4'>
                  <div className='flex flex-row gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2" />
                    </svg>
                    <h1 className=''>Engaging Learning</h1>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h0M9 9h0m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .5 2.4 1.5 3.2a5.5 5.5 0 0 0 7 0c1-.8 1.5-2.2 1.5-3.2 0 0-2 1-5 1s-5-1-5-1Z" />
                    </svg>
                    <h1 className=''>Positive Environment</h1>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z" />
                    </svg>
                    <h1 className=''>Nap Time</h1>
                  </div>
                </div>

                {/* Second col icons */}
                <div className='col-span-1 flex flex-col gap-4'>
                  <div className='flex flex-row gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h0m3.5 1.5h0m-7 0h0M7 12h0m9 4h2.7a2 2 0 0 0 1.9-1.3 9 9 0 1 0-16 2.5A9.1 9.1 0 0 0 12 21a2 2 0 0 0 2-2v-.9a2 2 0 0 1 2-2.1Z" />
                    </svg>
                    <h1 className=''>Arts and Crafts</h1>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1 className=''>Flexible Hours</h1>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.5 8.3 3.8-3.9a1.5 1.5 0 0 1 2.1 0l.2.2a1.5 1.5 0 0 1 0 2l-3.9 4a4 4 0 0 0-2.2-2.3Zm0 0a4 4 0 0 1 2.2 2.2L19.4 7a9 9 0 0 1 0 10.2l-3.7-3.6m-2.2-5.2L17 4.6a9 9 0 0 0-10 0l3.6 3.7a4 4 0 0 0-2.2 2.2L4.6 7a9 9 0 0 0 0 10.2l3.7-3.6a4 4 0 0 0 2.2 2.2L7 19.4a9 9 0 0 0 10.2 0l-3.6-3.7a4 4 0 0 0 2.2-2.2m0 0 3.9 3.8a1.5 1.5 0 0 1 0 2.1l-.2.2a1.5 1.5 0 0 1-2 0l-4-3.9a4 4 0 0 0 2.3-2.2ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.7 1.5-3.9 3.8a1.5 1.5 0 0 0 0 2.1l.2.2a1.5 1.5 0 0 0 2 0l4-3.9a4 4 0 0 1-2.3-2.2Zm2.2-5.2L6.7 4.4a1.5 1.5 0 0 0-2.1 0l-.2.2a1.5 1.5 0 0 0 0 2l3.9 4a4 4 0 0 1 2.2-2.3Z" />
                    </svg>
                    <h1 className=''>Safe Environment</h1>
                  </div>
                </div>


              </div>

            </div>
          </div>

          <div className='bg-white col-span-1 w-full h-full'>
            <DaycareInfoCard />
          </div>


        </div>

      </div>

      {/* </div> */}




    </div>
  );
}

export default daycarePage;