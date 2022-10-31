import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TopRatedMovies } from '../screens/TopRatedMovies';

import { MovieDetails } from '../screens/MovieDetails';

const TopRatedMoviesStack = createNativeStackNavigator();


export const TopRatedMoviesScreen = () => {
    return (
        <TopRatedMoviesStack.Navigator initialRouteName='PopularMovies'>
            <TopRatedMoviesStack.Screen
            name='TopRatedMovies'
            component={TopRatedMovies}
            options={{headerShown: false}}
            />
            <TopRatedMoviesStack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{headerTitle : 'Details', animation: 'simple_push', headerStyle: {backgroundColor : 'beige'}, footerStyle: {backgroundColor : 'beige'}}}
            />
        </TopRatedMoviesStack.Navigator>
    )
    };
