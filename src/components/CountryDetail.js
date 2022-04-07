import React from 'react';
import CountriesContainer from '../containers/CountriesContainer';

const CountryDetail = ({selectedCountry}) => {
    
    return (
        <div>
            <h3>{selectedCountry.name}</h3> 
            <p></p>
            <img scr={selectedCountry.flags.png}/>
        </div>
    )

}

export default CountryDetail;