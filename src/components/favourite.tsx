import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { IMovie } from "../data/IMovie";
import { getData, storeData } from "../data/database/database";


export const Favourite  = ({movie}: {movie: IMovie}) => {
    console.log("movie is", movie)
    const[favourites, setFavourites] = useState([]);

    const addToFavourites = (movie: IMovie) => {
        setFavourites([...favourites, movie]) //add new restaurant to exisitng favourites.
    };

    const removeFromFavourites = (movie: IMovie) => {
       const newFavourites = favourites.filter((it) => {
            it.id !== movie.id
        });
        setFavourites(newFavourites);
    }

    const isFavourite = favourites.includes(movie);

    useEffect(() => {
        storeData(favourites);
    }, [favourites]);

    return (
        <TouchableOpacity style={styles.favouriteStyle} onPress={() => isFavourite? removeFromFavourites(movie) : addToFavourites(movie)}>
        <AntDesign  name={isFavourite? "heart" : "hearto"} size={24} color={isFavourite ? 'red' : 'white'} />
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    favouriteStyle: {
    position: 'absolute',
    bottom: 20,
    end: 10
    },
    heartStyle: {
       
    }
})