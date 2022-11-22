import React, { useEffect, useState, useContext} from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { IMovie } from "../data/IMovie";
import { FavouritesContext } from "./favourites-context";



export const Favourite  = (props) => {

    const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouritesContext);

    const isFavourite = favourites.includes(props.movie);

    return (
        <TouchableOpacity style={styles.favouriteStyle} onPress={() => isFavourite? removeFromFavourites(props.movie) : addToFavourites(props.movie)}>
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