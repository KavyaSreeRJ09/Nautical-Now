import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import axios from 'axios';
import { HIGH_WIND_THRESHOLD, LOW_WIND_THRESHOLD, HIGH_ALTITUDE_THRESHOLD, LOW_ALTITUDE_THRESHOLD } from './constants';

const Maps = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint or data source
    const fetchData = async () => {
      const result = await axios('YOUR_API_ENDPOINT');
      setData(result.data);
    };

    fetchData();
  }, []);

  const getColor = (point) => {
    if (point.wind > HIGH_WIND_THRESHOLD || point.altitude > HIGH_ALTITUDE_THRESHOLD) {
      return 'red';
    } else if (point.wind > LOW_WIND_THRESHOLD || point.altitude > LOW_ALTITUDE_THRESHOLD) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {data.map((point, index) => (
        <Marker key={index} latitude={point.latitude} longitude={point.longitude}>
          <div style={{ backgroundColor: getColor(point), width: '10px', height: '10px', borderRadius: '50%' }} />
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Maps;