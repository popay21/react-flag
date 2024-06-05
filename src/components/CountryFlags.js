// src/components/CountryFlags.js

import React, { useState, useEffect } from 'react';
import { fetchCountryFlags } from '../api'; // ודא שהנתיב לקובץ נכון


const CountryFlags = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getCountries = async () => {
            try {
                const data = await fetchCountryFlags();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching country flags:', error);
            }
        };

        getCountries();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (country.cca2 && country.cca2.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (country.cca3 && country.cca3.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <input
                type="text"
                placeholder="חפש מדינה או קוד מדינה"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="flag-container">
                {filteredCountries.map((country, index) => (
                    <div className="flag-item" key={index}>
                        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                        <span>{country.name.common} ({country.cca2})</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryFlags;


