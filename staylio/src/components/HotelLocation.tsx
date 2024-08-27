import React, { useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = 'pk.eyJ1IjoiYWRpYXRyYWEiLCJhIjoiY20wOGh0b2VyMWR6NDJxcHY3Z2RoZ2NoNCJ9.0Yy9PyJztmbPcNI5Ps95HQ';

export default function HotelLocation() {
    const markerRef = useRef<mapboxgl.Marker | any>();
    const hotelCoordinates = [115.17580292526058, -8.696654681744155];

    return (
        <div>
            <h1 className="font-semibold text-lg mb-4">Location</h1>
            <p className="text-sm text-black/50 mb-8">Jl. Sunset Road No 150 Legian Bali, Legian, Kuta, Bali, Indonesia, 80361</p>
            <Map
                initialViewState={{
                    longitude: hotelCoordinates[0],
                    latitude: hotelCoordinates[1],
                    zoom: 13
                }}
                style={{ width: '100%', height: 400, borderRadius: 10 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={mapboxToken}
            >
                <Marker longitude={hotelCoordinates[0]} latitude={hotelCoordinates[1]} ref={markerRef}/>
            </Map>
        </div>
    );
}