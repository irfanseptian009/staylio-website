import React, { useState } from 'react';
import { MapIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { LocComboBox } from './LocComboBox';
import { CheckInDate } from './checkInDate';
import { CheckOutDate } from './checkOutDate';
import RoomSelector from './roomSelector';
import { Hotel } from '@/lib/hotelTypes';

export default function SearchBox({ hotels, onFilteredHotels }: { hotels: Hotel[], onFilteredHotels: (filtered: Hotel[]) => void }) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [roomDetails, setRoomDetails] = useState<{ rooms: number; guests: number }>({ rooms: 1, guests: 1 });

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const handleSearch = () => {
    const filteredHotels = hotels.filter(hotel => {
      return hotel.city?.toLowerCase() === selectedLocation.toLowerCase();
    });

    onFilteredHotels(filteredHotels);
  };

  return (
    <div className="lg:w-full lg:h-[210px] 2xl:h-[220px] bg-white shadow-lg p-4 rounded-3xl py-8 px-12">
      <div className="flex lg:space-x-[540px] 2xl:space-x-[900px]">
        <div className="flex w-96 gap-6 items-center">
          <MapIcon className="w-6 h-6 text-[#FE6927]" />
          <h1>Hotel and Resorts in {selectedLocation || "Selected Location"}</h1>
        </div>
        <div className='flex gap-2 items-center'>
          <h1 className='font-light text-black/50'>Latest Searching</h1>
          <ChevronRightIcon className="w-6 h-6 text-[#FE6927]" />
        </div>
      </div>
      <div className="border-t border-gray-900/10 2xl:mt-8 lg:mt-6" />
      <div className='py-4 flex 2xl:gap-10 lg:gap-4'>
        <div className='flex flex-col gap-4'>
          <p className="font-light text-sm text-black/50">Destination</p>
          <LocComboBox onSelectDestination={handleLocationSelect} />
        </div>
        <div className='flex flex-col gap-4'>
          <p className="font-light text-sm text-black/50">Check In</p>
          <CheckInDate />
        </div>
        <div className='flex flex-col gap-4'>
          <p className="font-light text-sm text-black/50">Check Out</p>
          <CheckOutDate />
        </div>
        <div className='flex flex-col gap-4'>
          <p className="font-light text-sm text-black/50">Room & Guest</p>
          <RoomSelector />
        </div>
        <div className='flex flex-col gap-4'>
          <button
            className='bg-[#FE6927] hover:bg-[#D9581F] w-14 h-14 rounded-xl flex items-center justify-center mt-9'
            onClick={handleSearch}
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
