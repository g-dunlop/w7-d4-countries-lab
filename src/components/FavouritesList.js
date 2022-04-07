import React from 'react';
import Country from './Country';

const FavouritesList = ({favouriteCountries, addToFavourites}) => {

    const faveItems = favouriteCountries.map((country, index) => {
        return <Country country={country} key={index} addToFavourites = {addToFavourites} />
    })

    return(
        <>
            <ul>
                {faveItems}
            </ul>
        </>

    )

}
    
export default FavouritesList;