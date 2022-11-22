import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeFavourites = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@FavouriteMovie', jsonValue)
  } catch (e) {
    // saving error
    console.log(e);
  }
}


export const getFavourites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@FavouriteMovie')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}
