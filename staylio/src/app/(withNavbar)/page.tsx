'use client';

import Image from "next/image";
import thumbnail from "@/assets/thumbnail.png";
import SearchBox from "@/components/(searchBox)/SearchBox";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import React from "react";
import SidebarFilter from "@/components/(sidebarFilter)/SidebarFilter";
import HotelCard from "@/components/HotelCard";

export default function Home() {
  const [starValue, setStarValue] = React.useState<number | null>(2);
  const [priceRangeValue, setPriceRangeValue] = React.useState<number[]>([300000, 600000]);
  const [discount, setDiscount] = React.useState<number>(45);

  const hotels = [
    {
      name: 'Brits Hotel Legian',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 347107,
      imageUrl: '/hotel1.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'Four Star by Trans Hotel',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 507107,
      imageUrl: '/hotel2.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'Atanaya Kuta Bali',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 400107,
      imageUrl: '/hotel3.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'New Kuta Hotel by Lorin',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 910107,
      imageUrl: '/hotel4.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'Primera Hotel Seminyak',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 253202,
      imageUrl: '/hotel5.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'HARRIS Hotel Kuta Galleria',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 550413,
      imageUrl: '/hotel6.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'Sovereign Bali Hotel',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 681405,
      imageUrl: '/hotel7.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'The Kanjeng Hotel Legian',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 297625,
      imageUrl: '/hotel8.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'The Kanjeng Resort Ubud',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 710744,
      imageUrl: '/hotel9.png',
      url: '/hotel/brits-hotel-legian',
    },
    {
      name: 'Aryaduta Bali',
      rating: 5,
      address: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
      price: 2507107,
      imageUrl: '/hotel10.png',
      url: '/hotel/brits-hotel-legian',
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section*/}
      <div className="p-6 sm:p-12 md:p-16 lg:px-18 lg:py-4 h-[250px] sm:h-[350px] md:h-[450px] w-full 2xl:h-[650px] bg-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <div className="bg-black/90 absolute w-full h-full rounded-3xl" />
          <Image
            src={thumbnail}
            alt="Hotel Display"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-3xl opacity-70"
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-start ml-32 transform lg:translate-y-[-10%] 2xl:translate-y-[-16%]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-4xl 2xl:text-6xl font-extrabold leading-6">
            Vacation feels <br /> like home
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-sm 2xl:text-lg mt-4 max-w-xl font-light">
            The most comfortable accommodation you can find in our <br /> website, spread all over the world
          </p>
          <button className="bg-[#FE6927] hover:bg-[#D9581F] text-white lg:translate-y-[90%] 2xl:translate-y-[250%] py-3 px-6 rounded-xl text-sm lg:text-sm transition duration-300">
            Book Now!
          </button>
        </div>
        {/* Search Box */}
        <div className="absolute left-0 right-0 lg:bottom-[25px] 2xl:bottom-[135px] mx-auto z-20 w-full 2xl:max-w-[1550px] lg:max-w-[1200px]">
          <SearchBox />
        </div>
      </div>
      {/* Search Result Bar */}
      <div className="p-6 sm:p-12 mt-28 md:p-16 lg:px-18 lg:py-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex h-10 items-center space-x-4 text-sm">
            <div className="font-light mr-20">Search Result</div>
            <Separator orientation="vertical" />
            <div className="flex gap-4">
              <p className="font-bold">586</p>
              <p>Hotels found in Bali</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="h-12 w-12 bg-white border-[#FE6927] hover:bg-[#FE6927] group border rounded-lg flex items-center justify-center">
              <ListBulletIcon className="h-6 w-6 text-[#FE6927] group-hover:text-white" />
            </button>
            <button className="h-12 w-12 bg-white border-black/10 group border rounded-lg flex items-center justify-center">
              <Squares2X2Icon className="h-6 w-6 text-black/20" />
            </button>
          </div>
        </div>
        <Separator className="my-5" />
      </div>
      {/* Dashboard */}
      <div className="p-6 sm:p-12 md:p-16 lg:px-18 lg:py-4 w-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] lg:min-h-[400px] max-w-full rounded-lg border md:min-w-[450px] border-white"
        >
          {/* Sidebar Filter */}
          <ResizablePanel defaultSize={22} className="flex-grow">
            <SidebarFilter
              starValue={starValue}
              setStarValue={setStarValue}
              priceRangeValue={priceRangeValue}
              setPriceRangeValue={setPriceRangeValue}
              discount={discount}
              setDiscount={setDiscount}
            />
          </ResizablePanel>
          <ResizableHandle disabled className="bg-white" />
          {/* Main Card Content */}
          <ResizablePanel defaultSize={78} className="flex-grow">
            <div className="flex flex-col gap-4">
              {hotels.map((hotel, index) => (
                <HotelCard key={index} hotel={hotel} />
              ))}
            </div>
            <div className="flex justify-center p-10">
              <Pagination
                count={10}
                shape="rounded"
                variant="outlined"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: 'black',
                    borderColor: 'white', 
                  },
                  '& .MuiPaginationItem-page.Mui-selected': {
                    backgroundColor: 'white', 
                    borderColor: '#FE6927', 
                    color: 'black',
                  },
                }}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
