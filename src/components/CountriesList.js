import React from 'react';
import Country from './Country';

const CountriesList = ({countries, onCountryClick}) => {

    const countryItems = countries.map((country, index) => {
        return <Country country={country} key={index} onCountryClick = {onCountryClick} />
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