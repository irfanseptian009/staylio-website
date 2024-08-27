import React from 'react';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';

const amenities = [
  "Internet Access",
  "SPA",
  "Pool parkour",
  "Private parking",
  "Netflix",
  "Video games",
  "Room service",
  "Smoking area",
  "Game room",
  "24 Hr Front desk",
  "Non smoking rooms",
  "Restaurant",
  "Fitness center",
  "Game room",
  "BBQ Grill",
  "Saturday night",
  "Night club",
  "Swimming pool",
  "Pets allowed",
  "Social distancing",
  "Currency exchange",
  "Baby sitting",
  "Lounge / Bar",
  "Mini bar"
];

export default function HotelAmenities() {
  return (
    <div>
      <h1 className="font-semibold text-lg">Hotel Amenities</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckIcon size={16} className="text-green-500" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
      <Link href="#" className="text-sm text-[#FE6927] mt-4 block">
        View more
      </Link>
    </div>
  );
}
