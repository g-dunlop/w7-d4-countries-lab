import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList'
import CountryDetail from '../components/CountryDetail'


const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect (() => {
        getCountries();
    }, [])

    const getCountries = function () {
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }

    const onCountryClick = function(country) {
        setSelectedCountry(country);
        // console.log(country)
    }

    return (
        <>
            <CountriesList countries={countries} onCountryClick = {onCountryClick} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        </>
    )
}

export default CountriesContainer;