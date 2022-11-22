import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { PopularMovies } from '../screens/PopularMovies';
import { TopRatedMovies } from '../screens/TopRatedMovies';
import { Favourites } from '../screens/Favourites';

const Tab = createBottomTabNavigator();


export const Root = () => {
    const isTopRated = Tab.Screen.name === "TopRatedMoviesScreen";
    return (
    <Tab.Navigator 
    screenOptions={{
    tabBarStyle:{ backgroundColor: isTopRated ? 'beige' : 'skyblue'},
  }}>
    <Tab.Screen name="PopularMoviesScreen" component={PopularMovies} options={{
        headerShown: false,
        tabBarLabel: 'PopularMovies',
      }}/>
    <Tab.Screen name="TopRatedMoviesScreen" component={TopRatedMovies} options={{
        headerShown: false,
        tabBarLabel: 'TopRatedMovies',
      }} />
       <Tab.Screen name="FavouritesScreen" component={Favourites} options={{
        headerShown: false,
        tabBarLabel: 'Favourites',
      }} />
  </Tab.Navigator>
    )
  };