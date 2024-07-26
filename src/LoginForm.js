import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState({ lat: 13.0475, lon: 80.2824 }); // Default location set to Marina Beach, Chennai
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser");
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { username, password });

        // Add your login validation logic here
        // For example, you could check the credentials against a database

        // If login is successful, redirect to the map page with location data
        navigate('/map', { state: { location } });
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
            {location && (
                <div className="location-info">
                    <h3>Current Location:</h3>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lon}</p>
                </div>
            )}
            {error && (
                <div className="location-error">
                    <p>Error: {error}</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
