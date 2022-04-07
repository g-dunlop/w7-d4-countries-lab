import React from 'react';

const Country = ({country, onCountryClick}) => {

    const handleClick = function() {
        onCountryClick(country)
    }

    return <li>
        <h3 onClick={handleClick}>{country.name}</h3>
        <p>Population: {country.population}</p>
    </li>
}

export default Country; 