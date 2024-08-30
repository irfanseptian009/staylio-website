"use client";

import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = 'pk.eyJ1IjoiYWRpYXRyYWEiLCJhIjoiY20wOGh0b2VyMWR6NDJxcHY3Z2RoZ2NoNCJ9.0Yy9PyJztmbPcNI5Ps95HQ';

export default function MapHome() {

  const markerRef = useRef<mapboxgl.Marker | any>();

  const longitude = 106.71212353996478;
  const latitude = -6.275909791082876;

  return (
    <div className='h-[200px] rounded-lg'>
      <Map
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 13
        }}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxToken}
      >
        <Marker longitude={longitude} latitude={latitude} ref={markerRef} />
      </Map>
    </div>
  )
}
