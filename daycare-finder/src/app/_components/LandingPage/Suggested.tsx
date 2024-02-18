"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoStar, IoLocationSharp } from "react-icons/io5";

const imageUrls = [
  {
    name: "Maira's Daycare",
    stars: 4.6,
    price: 12,
    url: "/assets/dc1.jpeg",
    spots: "3/6",
    location: "Beacon Hill",
    click: "/",
  },
  {
    name: "Dieter's Daycare",
    stars: 2.2,
    price: 12,
    url: "/assets/dc2.jpg",
    spots: "1/6",
    location: "Royal Oak",
    click: "/",
  },
  {
    name: "Liam's Daycare",
    stars: 4.7,
    price: 12,
    url: "/assets/dc3.jpeg",
    spots: "5/6",
    location: "Brentwood",
    click: "/",
  },
  {
    name: "Hilton's Daycare",
    stars: 4.3,
    price: 12,
    url: "/assets/dc4.jpeg",
    spots: "5/6",
    location: "Castleridge",
    click: "/",
  },
  {
    name: "Anthony's Daycare",
    stars: 4.9,
    price: 12,
    url: "/assets/dc5.jpeg",
    spots: "2/6",
    location: "Marlborough",

    click: "/",
  },
  {
    name: "Kids Care Crowfoot",
    stars: 4.9,
    price: 10,
    url: "/assets/kidscarecrow.jpeg",
    spots: "3/6",
    location: "Marlborough",
    click: "/daycare",
  },
];

import { Card, CardContent } from "@/components/ui/card";

export default function Suggested() {
  const router = useRouter();
  return (
    <div className="h-108 flex py-12 px-40">
      <div className="flex flex-col w-full ">
        <div className="text-lg font-bold">Daycares Near You</div>
        <Carousel className="w-full  ">
          <CarouselContent className="-ml-1">
            {imageUrls.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className="w-72 h-100">
                    <CardContent
                      className="flex aspect-square p-3 flex-col shadow-lg rounded-xl  hover:bg-gray-100 cursor-pointer hover:scale-105 transition ease duration-100 "
                      onClick={() => router.push(data.click)}
                    >
                      {/* Display the image */}
                      <img
                        src={data.url}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="flex items-center mt-2 justify-between">
                        <div className="text-xl  font-bold ">{data.name}</div>
                        <div className="flex gap-2 items-center">
                          <IoStar /> <div className="text-xl">{data.stars}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mt-3">
                        <IoLocationSharp />
                        <div className="text-xl">{data.location}</div>
                      </div>
                      <div className="flex items-center mt-8 border-top-2 justify-between mb-12">
                        <div className="flex">
                          <div className="text-xl  font-bold ">
                            ${data.price}
                          </div>
                          <div className="text-md font-semibold text-gray-600">
                            /hour
                          </div>
                        </div>

                        <div className="text-lg text-gray-600">
                          {data.spots} spots left
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
// cost, number of spots left, location, price, rating
