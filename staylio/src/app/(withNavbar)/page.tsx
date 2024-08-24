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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import MapHome from '@/components/MapHome';
import React from "react";
import Rating from '@mui/material/Rating';
import { colors } from "@mui/material";

export default function Home() {
  const [starValue, setStarValue] = React.useState<number | null>(2);
  const [value, setValue] = React.useState<number[]>([300000, 600000]);
  const [discount, setDiscount] = React.useState<number>(45);

  const handleChangeDiscount = (event: Event, newValue: number | number[]) => {
    setDiscount(newValue as number);
  };

  const handleChangePriceRange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

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
              <p>Properties found in Bali</p>
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
            <div className="flex flex-col gap-9 px-1 h-full w-full items-start justify-start">
              {/* Map Preview Section */}
              <div className="h-[268px] w-[254px] rounded-xl">
                <MapHome />
              </div>
              {/* Price Range */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold">Price Range / Night</h1>
                  <h1 className="text-xs ">Rp 100.000 - Rp 1.000.000</h1>
                </div>
                <Slider
                  getAriaLabel={() => 'Price Range'}
                  value={value}
                  onChange={handleChangePriceRange}
                  valueLabelDisplay="auto"
                  min={100000}
                  max={1000000}
                  className="w-[160%]"
                  sx={{
                    width: '100%',
                    color: '#FE6927', // Color of the thumb and track when active
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#FE6927', // Color of the thumb
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#D3D3D3', // Color of the rail
                      height: 6, // Adjust rail thickness
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#FE6927', // Color of the track
                      height: 6, // Adjust track thickness
                    },
                  }}
                />
              </div>
              {/* Discount Range */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Discount</h1>
                <Slider
                  value={discount}
                  onChange={handleChangeDiscount}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value}%`}
                  min={0}
                  max={100}
                  step={1}
                  className="w-[350%]"
                  sx={{
                    width: '100%',
                    color: '#FE6927', // Orange color for the active thumb and track
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#FE6927',  // Thumb color
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#D3D3D3',  // Rail color
                      height: 6,  // Rail thickness
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#FE6927',  // Track color
                      height: 6,  // Track thickness
                    },
                    '& .MuiSlider-valueLabel': {
                      backgroundColor: 'white',  // White background for the value label
                      color: '#555',  // Text color inside the value label
                      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',  // Subtle shadow to match the screenshot
                    },
                  }}
                />
              </div>
              {/* Popular Filters Checkbox */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Popular Filters</h1>
                <div className="mt-2 flex flex-col gap-4">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Parking" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Breakfast" />
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Wifi" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Pets" />
                  </FormGroup>
                </div>
              </div>
              {/* Deals Checkbox */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Deals</h1>
                <div className="mt-2 flex flex-col gap-4">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Free cancellation" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="No pre-payment" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Book without credit card" />
                  </FormGroup>
                </div>
              </div>
              {/* Room Facilities Checkbox */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Room Facilities</h1>
                <div className="mt-2 flex flex-col gap-4">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Air conditioning" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Private bathroom" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Free wifi" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Balcony" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="View" />
                  </FormGroup>
                </div>
              </div>
              {/* Amenities Checkbox */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Amenities</h1>
                <div className="mt-2 flex flex-col gap-4">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Breakfast included" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Swimming pool" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Parking" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Pets" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Pool parlour" />
                    <FormControlLabel control={<Checkbox sx={{
                      color: '#CBCBCB',
                      '&.Mui-checked': {
                        color: '#FE6927',
                      },
                    }} />} label="Shuttle" />
                  </FormGroup>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold">Rating</h1>
                <Rating
                  name="simple-controlled"
                  value={starValue}
                  onChange={(event, newValue) => {
                    setStarValue(newValue);
                  }}
                />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle disabled className="bg-white" />
          {/* Main Content */}
          <ResizablePanel defaultSize={78} className="flex-grow">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
