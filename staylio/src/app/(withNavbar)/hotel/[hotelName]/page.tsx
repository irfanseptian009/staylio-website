'use client';

import React, { useEffect, useState } from 'react'
import SearchBox from '@/components/(searchBox)/SearchBox'
import Breadcrumb from '@/components/Breadcrumb'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import Rating from '@mui/material/Rating';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from 'next/image';
import main1 from "@/assets/main1.png";
import side1 from "@/assets/side1.png";
import side2 from "@/assets/side2.png";
import side3 from "@/assets/side3.png";
import { CircleParkingIcon, PawPrintIcon, TvIcon, WashingMachineIcon, PlaneIcon, DumbbellIcon, Plane } from "lucide-react"
import RoomCard from '@/components/RoomCard';
import HotelAmenities from '@/components/HotelAmenities';
import HotelLocation from '@/components/HotelLocation';
import HotelReview from '@/components/HotelReview';
import { Hotel as HotelType } from '@/lib/hotelTypes';


export default function Page({ params }: { params: { hotelName: string } }) {
    const [hotel, setHotel] = useState<HotelType | null>(null);
    const [starValue, setStarValue] = React.useState<number | null>(4);
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<HotelType[]>([]);

    const rooms = [
        {
            name: 'Deluxe Room',
            bedInfo: '2 beds (1 single, 1 large double)',
            features: [
                "Washing machine",
                "Private parking",
                "Free wifi",
                "Netflix",
                "Restaurant",
                "Fitness center",
                "Spa",
            ],
            nights: 3,
            guests: 3,
            price: 2580000,
            discountPrice: 1935000,
            imageUrl: '/room1.png',
            url: '/room/deluxe-room',
        },
        {
            name: 'Deluxe Premiere',
            bedInfo: '1 King Bed',
            features: [
                "Washing machine",
                "Private parking",
                "Free wifi",
                "Netflix",
                "Restaurant",
                "Fitness center",
                "Spa",
            ],
            nights: 3,
            guests: 3,
            price: 3200000,
            discountPrice: 1280000,
            imageUrl: '/room2.png',
            url: '/room/deluxe-premiere',
        },
        {
            name: 'Junior Suite',
            bedInfo: '1 King Bed',
            features: [
                "Washing machine",
                "Private parking",
                "Free wifi",
                "Netflix",
                "Restaurant",
                "Fitness center",
                "Spa",
            ],
            nights: 3,
            guests: 3,
            price: 4500000,
            discountPrice: 1800000,
            imageUrl: '/room3.png',
            url: '/room/junior-suite',
        },
    ];

    useEffect(() => {
        const fetchHotelDetails = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    console.error("Error fetching hotel details");
                    return;
                }
                const data = await response.json();
                const decodedHotelName = decodeURIComponent(params.hotelName);
                const hotelData = data.find((hotel: HotelType) => hotel.name.trim().toLowerCase() === decodedHotelName.trim().toLowerCase());

                if (!hotelData) {
                    console.error("Hotel not found");
                    return;
                }

                setHotel(hotelData);
            } catch (error) {
                console.error('Error fetching hotel details:', error);
            }
        };
        fetchHotelDetails();
    }, [params.hotelName]);

    if (!hotel) {
        return <div>Loading...</div>;
    }

    const handleFilteredHotels = (filtered: HotelType[]) => {
        setFilteredHotels(filtered);
      };

    return (
        <div>
            {/* BreadCrumb Section */}
            <div className='w-full h-[150px] bg-[#FE6927] rounded-b-[34px]'>
                <Breadcrumb />
            </div>
            {/* Search Box */}
            <div className="p-6 sm:p-12 md:p-16 lg:px-18 lg:py-4 lg:h-[150px] bg-white flex items-center justify-center overflow-hidden">
                <div className="absolute left-0 right-0 lg:bottom-[280px] 2xl:bottom-[570px] mx-auto z-20 w-full 2xl:max-w-[1550px] lg:max-w-[1200px]">
                    <SearchBox hotels={hotels} onFilteredHotels={handleFilteredHotels} />
                </div>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-6 w-full">
                <h1 className="font-semibold text-xl">{hotel.name}</h1>
                <div className='flex items-center mt-4'>
                    <h1 className='text-sm text-black/50'>{hotel.address}</h1>
                    <Separator orientation="vertical" className="mx-4 h-6" />
                    <Link href="/" className='text-sm text-[#FE6927]'>Show on map</Link>
                    <Separator orientation="vertical" className="mx-4 h-6" />
                    <Rating name="read-only" value={starValue} readOnly />
                </div>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-2 w-full">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-[200px] lg:min-h-[400px] max-w-full rounded-lg border md:min-w-[450px] border-white"
                >
                    {/* Main Image */}
                    <ResizablePanel defaultSize={70} className="flex-grow">
                        <Image src={hotel.images[0].url} alt='Main' width={700} height={400} className='h-full w-full object-cover rounded-xl' />
                    </ResizablePanel>
                    <ResizableHandle disabled className="bg-white" />
                    {/* Side Image*/}
                    <ResizablePanel defaultSize={30} className="flex-grow ml-4">
                        <Image src={hotel.images[1].url} alt='Main' width={300} height={200} className='lg:h-[175px] 2xl:h-[228px] w-full object-cover rounded-xl mb-2' />
                        <Image src={hotel.images[2].url} alt='Main' width={300} height={200} className='lg:h-[175px] 2xl:h-[228px] w-full object-cover rounded-xl mb-2' />
                        <Image src={hotel.images[3].url} alt='Main' width={300} height={200} className='lg:h-[175px] 2xl:h-[228px] w-full object-cover rounded-xl' />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-4 w-full">
                <div className='flex items-center gap-5'>
                    <Button className="w-[25%] bg-[#FE6927] text-white hover:bg-[#FE6927] hover:text-white ">Overview</Button>
                    <Button variant={"ghost"} className='w-[25%] hover:bg-[#FE6927] hover:text-white '>Amenities</Button>
                    <Button variant={"ghost"} className='w-[25%] hover:bg-[#FE6927] hover:text-white '>Location</Button>
                    <Button variant={"ghost"} className='w-[25%] hover:bg-[#FE6927] hover:text-white '>Rate / Reviews</Button>
                </div>
            </div>
            <div id="overview" className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-4 mb-8 w-full">
                <h1 className="font-semibold text-lg mb-6">Overview</h1>
                <p className='font-normal text-sm text-black/80'>{hotel.overview}
                </p>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-15 w-full bg-[#FE6927]/5">
                <h1 className="font-semibold text-lg mb-8 mt-[-10px]">Property Higlight</h1>
                <div className="grid grid-cols-6 gap-16 ml-[-30px]">
                    <div className="text-center flex flex-col items-center gap-2">
                        <CircleParkingIcon size={32} />
                        <p className="mt-2 text-sm">Free parking</p>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                        <PawPrintIcon size={32} />
                        <p className="mt-2 text-sm">Pets allowed</p>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                        <TvIcon size={32} />
                        <p className="mt-2 text-sm">Cable TV</p>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                        <WashingMachineIcon size={32} />
                        <p className="mt-2 text-sm">Washing machine</p>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                        <PlaneIcon size={32} />
                        <p className="mt-2 text-sm">Airport lift</p>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                        <DumbbellIcon size={32} />
                        <p className="mt-2 text-sm">Fitness center</p>
                    </div>
                </div>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-15 w-full">
                <h1 className="font-semibold text-lg">Availability</h1>
                <div className='py-4 flex'>
                    <p className='font-normal text-sm text-black/80'>Thu, 20th Nov 2024 to Sat, 24th Nov 2024</p>
                    <Separator orientation="vertical" className="mx-4 h-6" />
                    <p className='font-normal text-sm text-black/80'>4 Nights</p>
                    <Separator orientation="vertical" className="mx-4 h-6" />
                    <p className='font-normal text-sm text-black/80'>2 Adults and 2 Kids</p>
                    <Separator orientation="vertical" className="mx-4 h-6" />
                    <Link href={"/"} className='font-normal text-sm text-[#FE6927]'>Change</Link>
                </div>
                <div className="flex flex-col gap-4 ml-[-10px]">
                    {rooms.map((room, index) => (
                        <RoomCard key={index} room={room} />
                    ))}
                </div>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-15 w-full mt-[-40px]">
                <div>
                    <HotelAmenities />
                </div>
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-15 w-full mt-[-40px]">
                <HotelLocation
                    address={hotel.address}
                    longitude={hotel.longitude}
                    latitude={hotel.latitude}
                />
            </div>
            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-15 w-full mt-[-40px]">
                <HotelReview />
            </div>
        </div>
    )
}