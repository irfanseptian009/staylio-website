'use client';

import Breadcrumb from '@/components/Breadcrumb';
import React, { useState } from 'react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { CalendarCheck, CheckCircle, XCircle } from "lucide-react";

export default function Page({ params }: { params: { bookingId: string } }) {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    const adultPrice = 1920000;
    const childPrice = 500000;
    const totalPrice = adultCount * adultPrice + childCount * childPrice;

    return (
        <div>
            {/* BreadCrumb Section */}
            <div className='w-full h-[97px] flex items-center bg-[#FE6927] rounded-b-[34px]'>
                <Breadcrumb />
            </div>

            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-6 w-full">
                <h1 className="font-semibold text-xl">Booking Details</h1>
                <div className='flex items-center mt-4'>
                    <h1 className='text-sm text-black/50'>
                        Place an order here and fill out all the forms to proceed to the payment
                    </h1>
                </div>
            </div>

            <div className="p-6 sm:p-12 md:p-16 lg:px-20 lg:py-2 w-full">
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
                    {/* Price Detail */}
                    <div className="flex-grow lg:w-[60%]">
                        <Card className="p-6 shadow-md rounded-lg border border-gray-200">
                            <h2 className="font-semibold text-lg mb-4">Select date*</h2>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal px-4 py-2",
                                            !selectedDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {selectedDate ? format(selectedDate, "d MMMM yyyy") : "Select a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>

                            {/* Adult and Child Section */}
                            <div className="flex justify-between items-center mt-6 space-x-4">
                                <div className="w-1/2">
                                    <Label>Adult*</Label>
                                    <div className="flex items-center justify-between mt-2 border border-gray-300 rounded-lg p-2">
                                        <span className="text-[#FE6927] font-semibold">
                                            Rp {adultPrice.toLocaleString()}
                                        </span>
                                        <div className="flex items-center">
                                            <Button variant="outline" size="icon" onClick={() => setAdultCount(adultCount > 1 ? adultCount - 1 : 1)}>
                                                <span className="text-[#FE6927]">-</span>
                                            </Button>
                                            <Input value={adultCount} readOnly className="w-12 text-center border-none" />
                                            <Button variant="outline" size="icon" onClick={() => setAdultCount(adultCount + 1)}>
                                                <span className="text-[#FE6927]">+</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2">
                                    <Label>Child*</Label>
                                    <div className="flex items-center justify-between mt-2 border border-gray-300 rounded-lg p-2">
                                        <span className="text-[#FE6927] font-semibold">
                                            Rp {childPrice.toLocaleString()}
                                        </span>
                                        <div className="flex items-center">
                                            <Button variant="outline" size="icon" onClick={() => setChildCount(childCount > 0 ? childCount - 1 : 0)}>
                                                <span className="text-[#FE6927]">-</span>
                                            </Button>
                                            <Input value={childCount} readOnly className="w-12 text-center border-none" />
                                            <Button variant="outline" size="icon" onClick={() => setChildCount(childCount + 1)}>
                                                <span className="text-[#FE6927]">+</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total Price */}
                            <div className="flex justify-between items-center mt-6 border-t pt-4">
                                <span className="text-lg font-semibold">Total price</span>
                                <span className="text-lg font-semibold text-[#FE6927]">Rp {totalPrice.toLocaleString()}</span>
                            </div>
                        </Card>
                    </div>

                    {/* Selected Package */}
                    <div className="flex-grow lg:w-[40%]">
                        <Card className="p-6 shadow-md rounded-lg border border-gray-200">
                            <h2 className="font-semibold text-lg">Selected package</h2>
                            <div className="mt-2 border p-4 rounded-lg">
                                <h3 className="font-semibold text-xl text-[#FE6927]">Rp {totalPrice.toLocaleString()}</h3> {/* Link the total price here */}
                                <p className="mt-2 font-semibold">Brits Hotel Legian</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Tickets are valid for 27 May - 31 July 23 and 18 Nov - 31 Dec 23
                                </p>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <CalendarCheck className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-500">Valid on selected dates</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <CheckCircle className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-500">Instant Confirmation</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <XCircle className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-500">No refunds</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* New Card for Personal Details */}
                <div className="mt-6 lg:w-[60%]">
                    <Card className="p-6 shadow-md rounded-lg border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label>Name*</Label>
                                <Input placeholder="Your name" className="mt-2" />
                            </div>
                            <div>
                                <Label>Email*</Label>
                                <Input placeholder="Your email" className="mt-2" />
                            </div>
                            <div>
                                <Label>Address*</Label>
                                <Input placeholder="Your address" className="mt-2" />
                            </div>
                            <div>
                                <Label>No Telp*</Label>
                                <Input placeholder="Your number" className="mt-2" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}








