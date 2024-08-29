import React, { useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = 'pk.eyJ1IjoiYWRpYXRyYWEiLCJhIjoiY20wOGh0b2VyMWR6NDJxcHY3Z2RoZ2NoNCJ9.0Yy9PyJztmbPcNI5Ps95HQ';

interface HotelLocationProps {
    address: string;
    longitude: number;
    latitude: number;
}

export default function HotelLocation({ address, longitude, latitude }: HotelLocationProps) {
    const markerRef = useRef<mapboxgl.Marker | any>();

    return (
        <div>
            <h1 className="font-semibold text-lg mb-4">Location</h1>
            <p className="text-sm text-black/50 mb-10">{address}</p>
            <Map
                initialViewState={{
                    longitude: longitude,
                    latitude: latitude,
                    zoom: 13
                }}
                style={{ width: '100%', height: 400, borderRadius: 10 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={mapboxToken}
            >
                <Marker longitude={longitude} latitude={latitude} ref={markerRef}/>
            </Map>
        </div>
    );
}
