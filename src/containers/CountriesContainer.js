import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList'
import CountryDetail from '../components/CountryDetail'
import FavouritesList from '../components/FavouritesList'


const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [totalPopulation, setTotalPopulation] = useState(0);
    const [favouriteCountries, setFavouriteCountries] = useState([])

    useEffect (() => {
        // population();
        getCountries();
        getTotalPopulation();
    }, [countries])

    

    const getCountries = function () {
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }

    const onCountryClick = function(country) {
        setSelectedCountry(country);
        // console.log(country)
    }

    const addToFavourites = function(index) {
        const addedFavourite = countries[index];
        let updatedFavourites;
        if (favouriteCountries.length > 0){
            for (var faveCountry of favouriteCountries){
                if (faveCountry.key === countries[index].key){
                    console.log("already in list")
                    return
                } else {
                    updatedFavourites = [...favouriteCountries, addedFavourite];
                    // return updatedFavourites
                    console.log("add to list")
                }
            }   setFavouriteCountries(updatedFavourites)
        }else{
            updatedFavourites = [...favouriteCountries, addedFavourite];
            setFavouriteCountries(updatedFavourites)
        }
            
    }


    const getTotalPopulation = () => {
        const countryPops = countries.map((country) => {
            return country.population
        })

        const total = countryPops.reduce((total, pop) => {
                return total + pop 
            },0)

        setTotalPopulation(total);
    }

    return (
        <>  
            <h1>Total Population of All Countries: {totalPopulation}</h1>
            <h3>Favourite Countries:</h3>
            {favouriteCountries.length > 0 ? <FavouritesList favouriteCountries={favouriteCountries} addToFavourites = {addToFavourites} /> : <p>No Favourites</p>}
            <h3>All Countries</h3>
            <CountriesList countries={countries} onCountryClick = {onCountryClick} addToFavourites = {addToFavourites} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        </>
    )
}

export default CountriesContainer;