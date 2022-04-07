import React from 'react';

const Country = ({country, index, onCountryClick, addToFavourites}) => {

    const handleClick = function() {
        onCountryClick(country)
    }

    const handleFaveClick = function(event) {
        addToFavourites(event.target.value)
        // console.log(event.target.value)
    }

    return <li>
        <h3 onClick={handleClick}>{country.name}</h3>
        <p>Population: {country.population}</p>
        <button onClick={handleFaveClick} value={index}>Favourites</button>
    </li>
}

export default Country; 