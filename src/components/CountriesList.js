import React from 'react';
import Country from './Country';

const CountriesList = ({countries, onCountryClick, addToFavourites}) => {

    const countryItems = countries.map((country, index) => {
        return <Country country={country} key={index} index={index} onCountryClick = {onCountryClick} addToFavourites = {addToFavourites}/>
    })

    return(
        <>
            <ul>
                {countryItems}
            </ul>
        </>

    )

}

export default CountriesList;