"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import
import { UserContext } from "../context/userContext";
import Navbar from "../_components/navbar";
import SearchBar from "../_components/SearchBar";
const useUserContext = () => useContext(UserContext);
import { Card, CardContent } from "@/components/ui/card";
import { IoStar, IoLocationSharp } from "react-icons/io5";
const imageUrls = [
  {
    name: "Kids Care Crowfoot",
    stars: 4.5,
    price: 10,
    url: "/assets/kidscarecrow.jpeg",
    spots: 3,
    location: "Arbour Grove",
    click: "/daycare",
    fromDate: "2024-02-20",
    toDate: "2024-02-21",
    city: "Calgary",
  },
  {
    name: "Maira's Daycare",
    stars: 4.6,
    price: 12,
    url: "/assets/dc1.jpeg",
    spots: 3,
    location: "Beacon Hill",
    click: "/",
    fromDate: "2024-02-20",
    toDate: "2024-02-21",
    city: "Calgary",
  },
  {
    name: "Dieter's Daycare",
    stars: 2.2,
    price: 12,
    url: "/assets/dc2.jpg",
    spots: 3,
    location: "Royal Oak",
    click: "/",
    fromDate: "2024-02-20",
    toDate: "2024-02-21",
    city: "Calgary",
  },
  {
    name: "Liam's Daycare",
    stars: 4.7,
    price: 12,
    url: "/assets/dc3.jpeg",
    spots: 5,
    location: "Brentwood",
    click: "/",
    fromDate: "2024-02-20",
    toDate: "2024-02-21",
    city: "Vancouver",
  },
  {
    name: "Hilton's Daycare",
    stars: 4.3,
    price: 12,
    url: "/assets/dc4.jpeg",
    spots: 5,
    location: "Castleridge",
    click: "/",
    fromDate: "2024-02-20",
    toDate: "2024-02-21",
    city: "Edmonton",
  },
  {
    name: "Anthony's Daycare",
    stars: 4.9,
    price: 12,
    url: "/assets/dc5.jpeg",
    spots: 2,
    location: "Marlborough",

    click: "/",
    fromDate: "2024-02-20",
    toDate: "2024-02-21",
    city: "Toronto",
  },
];

export default function Results() {
  const router = useRouter();
  const { myCity, myCount, fromDate, toDate } = useUserContext();
  const filterResults = (
    imageUrls: any[],
    myCity: string,
    myCount: number,
    fromDate: any,
    toDate: any
  ) => {
    const fDate = new Date(fromDate);
    fDate.setDate(fDate.getDate());
    const formattedFDate = fDate.toISOString().split("T")[0];
    const tDate = new Date(toDate);
    tDate.setDate(tDate.getDate());
    const formattedTDate = tDate.toISOString().split("T")[0];
    console.log(formattedTDate);
    return imageUrls.filter(
      (item: { city: string; spots: number; fromDate: any; toDate: any }) => {
        return (
          item.city.toLowerCase() === myCity.toLowerCase() &&
          myCount <= item.spots &&
          formattedFDate === item.fromDate &&
          formattedTDate === item.toDate
        );
      }
    );
  };
  const filteredResults = filterResults(
    imageUrls,
    myCity,
    myCount,
    fromDate,
    toDate
  );

  // console.log(filteredResults);
  // console.log(
  //   imageUrls[0].city,
  //   imageUrls[0].spots,
  //   imageUrls[0].fromDate,
  //   imageUrls[0].toDate
  // );
  // console.log(myCity, myCount, fromDate, toDate);
  return (
    <>
      {" "}
      <Navbar />{" "}
      <div className="px-4 py-8">
        <div className="px-80">
          {" "}
          <SearchBar />
        </div>

        <div className="border-t-2  border-gray-100 mt-7">
          {" "}
          {filteredResults.length > 0 ? (
            <>
              {" "}
              <div className="text-lg text-gray-400 font-semibold mt-2">
                Results for {myCity}
              </div>
              <div className="grid grid-cols-4 mt-4">
                {" "}
                {filteredResults.map((data, index) => (
                  <div key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="w-80 h-103">
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
                          <div className="flex items-center mt-4 justify-between">
                            <div className="text-xl  font-bold ">
                              {data.name}
                            </div>
                            <div className="flex gap-2 items-center">
                              <IoStar />{" "}
                              <div className="text-xl">{data.stars}</div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <IoLocationSharp />
                            <div className="text-lg text-gray-600">
                              {data.location}, {data.city}
                            </div>
                          </div>
                          <div className="flex items-center mt-8 border-top-2 justify-between mb-9">
                            <div className="flex">
                              <div className="text-xl  font-bold ">
                                ${data.price}
                              </div>
                              <div className="text-md font-semibold text-gray-600">
                                /hour
                              </div>
                            </div>

                            <div className="text-lg text-gray-600">
                              {data.spots}/6 spots left
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="text-xl text-gray-400 font-semibold mt-2">
                No Results
              </div>
              <div className="mt-5 border-t-2 border-gray-100">
                <div className="text-lg font-bold mt-4">
                  Explore These popular Daycares
                </div>
                <div className="grid grid-cols-4">
                  {" "}
                  {imageUrls.map((data, index) => (
                    <div key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                      <div className="p-1">
                        <Card className="w-80 h-103">
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
                              <div className="text-xl  font-bold ">
                                {data.name}
                              </div>
                              <div className="flex gap-2 items-center">
                                <IoStar />{" "}
                                <div className="text-xl">{data.stars}</div>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center mt-3">
                              <IoLocationSharp />
                              <div className="text-lg text-gray-600">
                                {data.location}, {data.city}
                              </div>
                            </div>
                            <div className="flex items-center mt-8 border-top-2 justify-between mb-9">
                              <div className="flex">
                                <div className="text-xl  font-bold ">
                                  ${data.price}
                                </div>
                                <div className="text-md font-semibold text-gray-600">
                                  /hour
                                </div>
                              </div>

                              <div className="text-lg text-gray-600">
                                {data.spots}/6 spots left
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* <h1>Results for {city}</h1>
    <p>
      From: {from}
      <br />
      To: {to}
      <br />
      Number of Guests: {count}
    </p> */}
      </div>
    </>
  );
}
