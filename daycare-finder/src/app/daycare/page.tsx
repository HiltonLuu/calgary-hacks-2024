import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import DaycareInfoCard from './daycareInfoCard';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Navbar from '../_components/navbar';
import SearchBar from '../_components/SearchBar';

const StarFull = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

const StarEmpty = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

function daycarePage() {
  return (
    <>

      <div className='flex flex-col h-fit mb-10 bg-white'>

        {/* Search in Navbar configuration */}
        {/* <div className='sticky'>
          <div className='fixed w-full top-5 flex justify-center items-center'>
            <SearchBar />
          </div>
        </div>
        <div className='top-0 sticky z-10'>
          <Navbar />
        </div> */}

        {/* <div className='sticky z-20'>
          <div className='fixed w-full z-20 top-16 flex justify-center items-center'>
            <SearchBar />
          </div>
        </div> */}

        {/* <div className='sticky bottom-0 top-16 z-10'>
          <div className='absolute w-full flex justify-center items-center'>
            <SearchBar />
          </div>
        </div> */}

        <div className='top-0 sticky z-20'>
          <Navbar />
        </div>

        <div className='relative h-1/2 min-h-[400px] w-full'>
          <img className='h-1/2 fixed w-full min-h-[400px] object-cover brightness-75' src='/daycarePhoto.jpg'></img>
          <div className='sticky flex items-center self-start pb-8 top-28 z-20'>
            <div className='absolute w-full flex -top-16 justify-center items-center'>
              <SearchBar />
            </div>
          </div>
        </div>


        <div className='relative h-1/2 yellow-amber-500 -top-28 z-10'>

          <div className='flex flex-col mx-16 align-bottom '>
            <h1 className='font-bold text-white text-2xl'>Nurture Grove</h1>
            <div className='flex justify-between'>
              <h1 className='text-white mb-4'>259-153 Arbour Grove Close NW, Calgary, AB</h1>
              <div className='flex flex-row gap-1'>
                <h1 className='text-white font-medium'>4.50</h1>
                <a href='#reviews'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-white hover:text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Daycare provider infromation */}
          <div className='bg-white h-20 rounded-t-[40px]'>
            <div className='flex justify-left ml-16 pt-12 items-center h-full gap-2'>
              <Avatar>
                <AvatarImage src="/assets/rayMcCoy.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className=''>Ray McCoy</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-400">
                <path strokeLinecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className='grid grid-flow-col grid-cols-3 bg-white h-full min-h-screen w-full'>


            {/* Description */}
            <div className='flex justify-start col-span-2 '>
              <div className='mx-16 pt-10 w-full flex flex-col gap-y-4'>


                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/3 w-72 h-72"><img className='object-cover w-full h-full rounded-xl' src="https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/e7/e779ba9c-4702-4519-aa5c-236fae8a3b98?rule=kijijica-640-webp" alt="" /></CarouselItem>
                    <CarouselItem className="basis-2/3 w-72 h-72"><img className='object-cover w-full h-full rounded-xl' src="https://images.unsplash.com/photo-1613794713137-a78aba4be84a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></CarouselItem>
                    <CarouselItem className="basis-3/3 w-72 h-72"><img className='object-cover w-full h-full rounded-xl' src="https://images.unsplash.com/photo-1564429238817-393bd4286b2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <div className='bg-gray-200 my-8 h-[1px] w-full'></div>

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
                <div className='flex flex-col gap-y-4'>
                  <h1 className='text-black text-2xl font-medium'>What we offer</h1>
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

                <div className='bg-gray-200 my-8 h-[1px] w-full'></div>

                {/* Reviews */}
                <div className="w-full flex justify-center" id="reviews">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Review</TableHead>
                        <TableHead className="text-right">Date Posted</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Andrew Pilot</TableCell>
                        <TableCell className="flex">
                          {StarFull}
                          {StarFull}
                          {StarFull}
                          {StarFull}
                          {StarFull}
                        </TableCell>
                        <TableCell>
                          Ray McCoy's Daycare stands out as a beacon of excellence in Crowfoot. With Ray's attentive and nurturing care, our children not only feel safe but also thrive in their development.
                          We couldn't be happier with our choice! 😀
                        </TableCell>
                        <TableCell className="text-right">10/17/2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tobi Seal</TableCell>
                        <TableCell className="flex">
                          {StarFull}
                          {StarFull}
                          {StarFull}
                          {StarFull}
                          {StarEmpty}
                        </TableCell>
                        <TableCell>Ray McCoy's Daycare in Crowfoot is a game-changer for busy parents—reliable, caring, and flexible! I wish the place was closer though</TableCell>
                        <TableCell className="text-right">2/20/2024</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className='bg-gray-200 my-8 h-[1px] w-full'></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.9518653313357!2d-114.20747503494142!3d51.128683742101636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371691e991451df%3A0x9f66c83462415ea0!2s153%20Arbour%20Grove%20Close%20NW%20%23259%2C%20Calgary%2C%20AB%20T3G%204J2!5e0!3m2!1sen!2sca!4v1708248788357!5m2!1sen!2sca"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className='flex justify-center w-full '
                />

              </div>
            </div>

            <div className='bg-white col-span-1 w-full h-full'>
              <DaycareInfoCard />
            </div>


          </div>

        </div>


      </div >
    </>
  );
}

export default daycarePage;
