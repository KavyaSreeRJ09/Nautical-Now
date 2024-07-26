import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';
import pinImage from './assets/pin.png'; // Path to your pin image

const MapPage = () => {
    // Default location for Marina Beach, Chennai
    const defaultLocation = { lat: 13.0475, lon: 80.2824 };

    // Get the location passed from the login form or use the default location
    const location = useLocation();
    const userLocation = location.state?.location || defaultLocation;

    // Create a custom icon for the marker
    const customIcon = L.icon({
        iconUrl: pinImage,
        iconSize: [38, 38], // Size of the icon
        iconAnchor: [19, 38], // Anchor point of the icon
        popupAnchor: [0, -38] // Popup position relative to the icon anchor
    });

    return (
        <div className="map-page">
            <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={13} style={{ height: "100vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[userLocation.lat, userLocation.lon]} icon={customIcon}>
                    <Popup>
                        You are here.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapPage;
