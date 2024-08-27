import React from 'react'
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import Link from 'next/link';
import user1 from "@/assets/user1.png";
import user2 from "@/assets/user2.png";

export default function HotelReview() {
    return (
        <div>
            <h1 className="font-semibold text-lg mb-8">Rate / Reviews</h1>
            <div className="flex items-center gap-20">
                <div className="w-[50%]">
                    <div className="flex items-center">
                        <h2 className="text-4xl font-bold">4.8</h2>
                        <div className="ml-4">
                            <Rating name="read-only" value={4.8} precision={0.1} readOnly />
                            <p className="text-sm text-gray-500">Very good · 52 Reviews</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between">
                            <p>Location</p>
                            <p>9.8</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className="bg-[#FE6927] h-1.5 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                        <div className="flex justify-between">
                            <p>Staff</p>
                            <p>9.4</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className="bg-[#FE6927] h-1.5 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                        <div className="flex justify-between">
                            <p>Value for money</p>
                            <p>6.9</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className="bg-[#FE6927] h-1.5 rounded-full" style={{ width: '69%' }}></div>
                        </div>
                        <div className="flex justify-between">
                            <p>Cleanliness</p>
                            <p>7.4</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className="bg-[#FE6927] h-1.5 rounded-full" style={{ width: '74%' }}></div>
                        </div>
                        <div className="flex justify-between">
                            <p>Food</p>
                            <p>9.9</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className="bg-[#FE6927] h-1.5 rounded-full" style={{ width: '99%' }}></div>
                        </div>
                        <div className="flex justify-between">
                            <p>Comfortability</p>
                            <p>8.0</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className="bg-[#FE6927] h-1.5 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <Image src={user1} alt="User 1" width={50} height={50} className="rounded-full" />
                            <div>
                                <p className="font-semibold">Adiat Rahman</p>
                                <p className="text-sm text-gray-500">United States · 12 Dec 2023</p>
                                <p className="text-sm text-gray-700 mt-2">It was an awesome experience. I really enjoyed the trip. And hotel reservation site helped to get into this hotel and so on and so on...</p>
                                <Rating name="read-only" value={4.8} precision={0.1} readOnly />
                                <p className="text-sm text-gray-500 mt-2">Very good · Staff service and food</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Image src={user2} alt="User 2" width={50} height={50} className="rounded-full" />
                            <div>
                                <p className="font-semibold">Alexandra Joe</p>
                                <p className="text-sm text-gray-500">United States · 12 Dec 2023</p>
                                <p className="text-sm text-gray-700 mt-2">It was an awesome experience. I really enjoyed the trip. And hotel reservation site helped to get into this hotel and so on and so on...</p>
                                <Rating name="read-only" value={4.8} precision={0.1} readOnly />
                                <p className="text-sm text-gray-500 mt-2">Very good · Staff service and food</p>
                            </div>
                        </div>
                    </div>
                    <Link href="/" className="text-[#FE6927] mt-20 block">View all 52 reviews</Link>
                </div>
            </div>
        </div>
    )
}
