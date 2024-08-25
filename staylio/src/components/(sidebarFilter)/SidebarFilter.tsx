'use client';

import React from 'react';
import MapHome from '@/components/(sidebarFilter)/MapHome';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

interface SidebarFilterProps {
    starValue: number | null;
    setStarValue: React.Dispatch<React.SetStateAction<number | null>>;
    priceRangeValue: number[];
    setPriceRangeValue: React.Dispatch<React.SetStateAction<number[]>>;
    discount: number;
    setDiscount: React.Dispatch<React.SetStateAction<number>>;
}

export default function SidebarFilter({
    starValue,
    setStarValue,
    priceRangeValue,
    setPriceRangeValue,
    discount,
    setDiscount,
}: SidebarFilterProps) {
    const handleChangeDiscount = (event: Event, newValue: number | number[]) => {
        setDiscount(newValue as number);
    };

    const handleChangePriceRange = (event: Event, newValue: number | number[]) => {
        setPriceRangeValue(newValue as number[]);
    };
    return (
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
                    value={priceRangeValue}
                    onChange={handleChangePriceRange}
                    valueLabelDisplay="auto"
                    min={100000}
                    max={1000000}
                    className="w-[160%]"
                    sx={{
                        width: '100%',
                        color: '#FE6927',
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#FE6927',
                        },
                        '& .MuiSlider-rail': {
                            backgroundColor: '#D3D3D3',
                            height: 6,
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: '#FE6927',
                            height: 6,
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
                        color: '#FE6927',
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#FE6927',
                        },
                        '& .MuiSlider-rail': {
                            backgroundColor: '#D3D3D3',
                            height: 6,
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: '#FE6927',
                            height: 6,
                        },
                        '& .MuiSlider-valueLabel': {
                            backgroundColor: 'white',
                            color: '#555',
                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
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
            {/* Rating */}
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold">Review Score</h1>
                <Rating
                    name="star-rating"
                    value={starValue}
                    onChange={(event, newValue) => {
                        setStarValue(newValue);
                    }}
                    sx={{
                        color: '#eab308',
                        '& .MuiRating-iconEmpty': {
                            color: '#CBCBCB',
                        },
                    }}
                />
            </div>
        </div>
    );
}
