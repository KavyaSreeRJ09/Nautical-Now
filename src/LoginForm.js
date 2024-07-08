import React, { useState, useEffect } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if ("geolocation" in navigator) {
    //                 navigator.geolocation.getCurrentPosition(
    //                     (position) => {
    //                         const { latitude, longitude } = position.coords;
    //                         setLocation({ lat: latitude, lon: longitude });
    //                         fetchCityName(latitude, longitude);
    //                     },
    //                     (err) => {
    //                         setError(err.message);
    //                     }
    //                 );
    //             } else {
    //                 setError("Geolocation is not supported by your browser");
    //             }
    //         } catch (err) {
    //             setError("Error fetching location");
    //         }
    //     };

    //     fetchData();
    // }, []); // Empty dependency array ensures this effect runs only once

    const fetchCityName = async (lat, lon) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`);
            const data = await response.json();
            console.log(data); // For debugging purposes

            if (data && data.address) {
                const city = data.address.city || data.address.town || data.address.village || data.address.hamlet || 'Location not found';
                setCity(city);
            } else {
                setError("Unable to reetrieve city name");
            }
        } catch (err) {
            setError("Error fetching city name");
        }
    };
    const latitude = 11.0168; // Example latitude for Coimbatore
    const longitude = 76.9558; // Example longitude for Coimbatore
    fetchCityName(latitude, longitude);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { username, password });
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-form-container">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username or Email:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {city ? (
                <div className="location-info">
                    <p>Your current city:</p>
                    <p>{city}</p>
                </div>
            ) : (
                <div className="location-error">
                    {error ? <p>Error: {error}</p> : <p>Fetching location...</p>}
                </div>
            )}
        </div>
    );
};

export default LoginForm;
