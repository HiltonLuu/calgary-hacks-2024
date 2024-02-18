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

        <h1 className='ml-8 font-bold text-white text-2xl'>Kids Care Crowfoot</h1>
        <h1 className='ml-8 text-white mb-4'>2654 Crowfoot Blvd</h1>

        {/* Daycare provider infromation */}
        <div className='bg-blue-200 h-20 rounded-t-[40px]'>
          <div className='flex justify-left ml-8 items-center h-full gap-2'>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1564156280315-1d42b4651629?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className=''>Ray McCoy</h1>
          </div>
        </div>

        {/* Description */}
        <div className='bg-white h-full min-h-screen w-full'>
          <DaycareInfoCard />

        </div>

      </div>

      {/* </div> */}




    </div>
  );
}

export default daycarePage;
