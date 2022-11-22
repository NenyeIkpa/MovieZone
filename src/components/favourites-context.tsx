import React, { useEffect, useState, createContext, useContext} from "react";
import { IMovie } from "../data/IMovie";
import { getFavourites, storeFavourites } from "../data/database/database";

export const FavouritesContext = createContext(null);

 export const FavouritesContextProvider = ({children}) => {

    const[favourites, setFavourites] = useState([]);

   const addToFavourites =(movie: IMovie) => {
        setFavourites([...favourites, movie]) //add new restaurant to exisitng favourites.
    };

    const removeFromFavourites = (movie: IMovie) => {
       const newFavourites = favourites.filter((it) => {
            it.id !== movie.id
        });
        setFavourites(newFavourites);
    }
    useEffect(() => {
        getFavourites();
    }, []);

    useEffect(() => {
        storeFavourites(favourites);
    }, [favourites]);
 
    return (
       <FavouritesContext.Provider
       value={{
        addToFavourites,
        removeFromFavourites,
        favourites
    }}>
        {children}
       </FavouritesContext.Provider>
    )

}
