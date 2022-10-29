import React, { createContext, useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 

import { PopularMoviesScreen } from './src/navigation/PopularMoviesScreen'
import { TopRatedMoviesScreen } from './src/navigation/TopRatedMoviesScreen';

export const PopularMoviesContext = createContext(null);
export const TopRatedMoviesContext = createContext(null);

const Tab = createBottomTabNavigator();

export default function App() {
  const [masterPopularMovies, setMasterPopularMovies] = useState([]);
  const[masterTopRatedMovies, setMasterTopRatedMovies]= useState([]);

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: 'popular', title: 'Popular', focusedIcon: 'bell', unfocusedIcon: ''},
    { key: 'topRated', title: 'Top-Rated', focusedIcon: 'bell', unfocusedIcon: ''},
  ]);

const renderScene = BottomNavigation.SceneMap({
  popular: PopularMoviesScreen,
  topRated: TopRatedMoviesScreen
});

  return (
    <>
    <NavigationContainer>
     <PopularMoviesContext.Provider value={{masterPopularMovies, setMasterPopularMovies}}>
      <TopRatedMoviesContext.Provider value={{masterTopRatedMovies, setMasterTopRatedMovies}}>
     <Tab.Navigator>
      <Tab.Screen name="Popular" component={PopularMoviesScreen} options={{
          headerShown: false,
          tabBarLabel: 'PopularMovies',
          // tabBarIcon: ({ color }) => (
          //   <Icon name="home" color={color} size={26} />
          // ),
        }}/>
      <Tab.Screen name="TopRated" component={TopRatedMoviesScreen} options={{
          headerShown: false,
          tabBarLabel: 'TopRatedMovies',
          // tabBarIcon: ({ color }) => (
          //   <Icon name="chat" color={color} size={26} />
          // ),
          // tabBarStyle: { display: "none" }
        }} />
    </Tab.Navigator>
      <ExpoStatusBar style="auto" />
      </TopRatedMoviesContext.Provider>
      </PopularMoviesContext.Provider>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
