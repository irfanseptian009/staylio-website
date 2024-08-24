"use client";

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader';

export default function MapHome() {
  
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            version: "weekly",
        });

        const { Map } = await loader.importLibrary('maps');

        const position = {
            lat: 43.642693,
            lng: -79.3871189,
        }

        //Map Options
        const mapOptions: google.maps.MapOptions = {
            center: position,
            zoom: 17,
            mapId: 'MY_NEXTJS_MAPID'
        }

        //Setup the Map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    }

    initMap();
  }, []);
  
    return (
    <div className='h-[268px] rounded-lg' ref={mapRef} />
  )
}
