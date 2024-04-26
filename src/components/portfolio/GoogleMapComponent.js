import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GoogleMapComponent = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: -27.4784, 
    lng: 153.0289
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} language="en">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        {/* Add any map features or markers here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
