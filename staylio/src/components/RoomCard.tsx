import React from 'react';
import Image from 'next/image';
import { CheckIcon } from "lucide-react"; 
import Link from 'next/link';

interface Room {
    name: string;
    bedInfo: string;
    features: string[];
    nights: number;
    guests: number;
    price: number;
    discountPrice: number;
    imageUrl: string;
    url: string;
}

const RoomCard = ({ room }: { room: Room }) => {
    return (
        <div className="relative flex items-center p-4 hover:border-orange-500 border border-transparent rounded-lg group hover:shadow-xl transition duration-300 ease-in-out">
            {/* Image Section */}
            <div className="flex-shrink-0 w-[250px] h-[180px] overflow-hidden">
                <Image
                    src={room.imageUrl}
                    alt={room.name}
                    className="rounded-lg object-cover w-full h-full"
                    width={250}
                    height={300}
                />
            </div>

            {/* Details Section */}
            <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#FE6927]">
                    {room.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{room.bedInfo}</p>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                    {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <CheckIcon size={16} className="text-green-500" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                <Link href="#" className="text-sm text-[#FE6927] mt-4 block">
                    View all
                </Link>
            </div>

            {/* Pricing Section */}
            <div className="ml-auto text-right">
                <p className="text-sm text-gray-600 mb-1">
                    {room.nights} {room.nights > 1 ? "Nights" : "Night"}, {room.guests} {room.guests > 1 ? "Adults" : "Adult"}
                </p>
                <p className="text-lg font-bold text-gray-900 line-through">
                    Rp {room.price.toLocaleString('id-ID')}
                </p>
                <p className="text-xl font-bold text-[#FE6927]">
                    Rp {room.discountPrice.toLocaleString('id-ID')}
                </p>
                <p className="text-xs text-gray-500 mt-1">Include taxes & fees</p>
                <Link href={room.url}>
                    <button className="bg-[#FE6927] text-white text-sm font-semibold px-6 py-2 mt-4 rounded-lg hover:bg-[#FE6927]/90 transition duration-300 ease-in-out">
                        Choose rooms
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;
