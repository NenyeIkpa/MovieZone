import React, { useEffect, useState , useContext} from 'react';
import {View,Text, FlatList, StyleSheet} from 'react-native';
import { SafeArea } from '../utils/safe-area';
import { MovieCard } from '../components/movie-card';
import { FavouritesContext } from '../components/favourites-context';



export const Favourites = () => {
   
    const  {favourites}  = useContext(FavouritesContext);

    return (
        <SafeArea style={{backgroundColor: 'skyblue'}}>
            {favourites.length === 0 &&
            <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>No favourites yet!</Text>
        </View>
       }
       {
        favourites.length > 0 &&
        <>
        <View style={styles.textViewStyle}>
        <Text style={styles.textStyle}>MyFavourites!</Text>
        </View>
        <FlatList style={{flex: 1}}
        data={favourites}
        renderItem={({item}) =>{ return  <MovieCard movie={item} handlePress={() => null} />}}>
        </FlatList>
        </>
}
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'BlackAndWhitePicture-Regular',
        fontSize: 40,
    },
    textViewStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 10,
    }
})