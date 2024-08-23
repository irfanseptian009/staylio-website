'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { HotelIcon } from "lucide-react"

const RoomSelector: React.FC = () => {
    const [rooms, setRooms] = useState<number>(0);
    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);

    const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value + 1);
    const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value > 0 ? value - 1 : 0);

    const totalGuests = adults + children;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className="lg:w-52 2xl:w-72 h-14 bg-[#F8F8FA] flex justify-start !text-black font-regular border-white rounded-2xl hover:bg-gray-200 transition-colors duration-300"
                >
                    <HotelIcon className="mr-2 h-5 w-5" style={{ color: "#FF5722" }} />
                    {rooms} Room, {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="2xl:w-72 lg:w-52 p-4 space-y-4 bg-white shadow-lg border border-gray-300 rounded-lg">
                {/* Room Selector */}
                <div className="flex justify-between items-center">
                    <span>Room</span>
                    <div className="flex items-center">
                        <Button variant="outline" size="sm" onClick={() => decrement(setRooms, rooms)}>
                            -
                        </Button>
                        <span className="mx-2">{rooms}</span>
                        <Button variant="outline" size="sm" onClick={() => increment(setRooms, rooms)}>
                            +
                        </Button>
                    </div>
                </div>

                {/* Adults Selector */}
                <div className="flex justify-between items-center">
                    <span>Adults</span>
                    <div className="flex items-center">
                        <Button variant="outline" size="sm" onClick={() => decrement(setAdults, adults)}>
                            -
                        </Button>
                        <span className="mx-2">{adults}</span>
                        <Button variant="outline" size="sm" onClick={() => increment(setAdults, adults)}>
                            +
                        </Button>
                    </div>
                </div>

                {/* Children Selector */}
                <div className="flex justify-between items-center">
                    <span>Children</span>
                    <div className="flex items-center">
                        <Button variant="outline" size="sm" onClick={() => decrement(setChildren, children)}>
                            -
                        </Button>
                        <span className="mx-2">{children}</span>
                        <Button variant="outline" size="sm" onClick={() => increment(setChildren, children)}>
                            +
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default RoomSelector;
