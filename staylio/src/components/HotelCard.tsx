'use client';

import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface Hotel {
    name: string;
    rating: number;
    address: string;
    price: number;
    imageUrl: string;
    url: string;
}

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="relative flex gap-2 items-center p-2 border border-transparent rounded-lg group hover:border-orange-500 hover:shadow-xl transition duration-300 ease-in-out">
                    <Image
                        src={hotel.imageUrl}
                        alt={hotel.name}
                        className="rounded-lg"
                        width={250}
                        height={120}
                        objectFit="cover"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                            {hotel.name}
                        </h3>
                        <div className="flex items-center mt-1 text-yellow-500">
                            {[...Array(hotel.rating)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{hotel.address}</p>
                        <div className='flex items-center mt-10 justify-between lg:gap-[320px] 2xl:gap-[595px]'>
                            <div className='flex items-center gap-4'>
                                <p className="text-xl font-bold text-orange-500 w-[132px]">
                                    Rp {hotel.price.toLocaleString('id-ID')}
                                </p>
                                <p className="text-sm text-gray-600">/ Night</p>
                            </div>
                            <Link href={hotel.url}>
                                <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">
                                    Choose rooms
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </HoverCardTrigger>
        </HoverCard>
    );
};

export default HotelCard;