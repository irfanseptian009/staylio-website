'use client';

import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Hotel as HotelType } from '@/lib/hotelTypes';

const HotelCard = ({ hotel }: { hotel: HotelType }) => {
    const staticRating = 5;
    const imageUrl = hotel.images.length > 0 ? hotel.images[0].url : '/default-image.jpg'; 

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="relative flex gap-2 items-center p-2 border border-transparent rounded-lg group hover:border-orange-500 hover:shadow-xl transition duration-300 ease-in-out">
                    <Image
                        src={imageUrl}
                        alt={hotel.name}
                        className="rounded-lg"
                        width={250}
                        height={120}
                        objectFit="cover"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#FE6927]">
                            {hotel.name}
                        </h3>
                        <div className="flex items-center mt-1 text-yellow-500">
                            {[...Array(staticRating)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{hotel.city}</p>
                        <div className='flex items-center mt-10 justify-between lg:gap-[320px] 2xl:gap-[595px]'>
                            <div className='flex items-center gap-4'>
                                <p className="text-xl font-bold text-[#FE6927] w-[132px]">
                                    Rp {parseFloat(hotel.price).toLocaleString('id-ID')}
                                </p>
                                <p className="text-sm text-gray-600">/ Night</p>
                            </div>
                            <Link href={"/"}>
                                <button className="bg-[#FE6927] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#FE6927] transition duration-300 ease-in-out">
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