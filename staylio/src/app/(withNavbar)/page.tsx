'use client';

import Image from "next/image";
import thumbnail from "@/assets/thumbnail.png";
import SearchBox from "@/components/(searchBox)/SearchBox";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import Pagination from '@mui/material/Pagination';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from "react";
import SidebarFilter from "@/components/(sidebarFilter)/SidebarFilter";
import HotelCard from "@/components/HotelCard";
import { Hotel } from "@/lib/hotelTypes";

export default function Home() {
  const [starValue, setStarValue] = useState<number | null>(2);
  const [priceRangeValue, setPriceRangeValue] = useState<number[]>([300000, 600000]);
  const [discount, setDiscount] = useState<number>(45);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setHotels(data);
        setFilteredHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleFilteredHotels = (filtered: Hotel[]) => {
    setFilteredHotels(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  return (
    <main className="bg-white">
      {/* Hero Section */}
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
          <SearchBox hotels={hotels} onFilteredHotels={handleFilteredHotels} />
        </div>
      </div>
      {/* Search Result Bar */}
      <div className="p-6 sm:p-12 mt-28 md:p-16 lg:px-18 lg:py-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex h-10 items-center space-x-4 text-sm">
            <div className="font-light mr-20">Search Result</div>
            <Separator orientation="vertical" />
            <div className="flex gap-4">
              <p className="font-bold">{filteredHotels.length}</p>
              <p>Hotels found in {filteredHotels.length > 0 ? filteredHotels[0].city : 'Selected Location'}</p>
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
              {currentHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
            <div className="flex justify-center p-10">
              <Pagination
                count={Math.ceil(filteredHotels.length / hotelsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
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
