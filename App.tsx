import React, { createContext, useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

import { PopularMovies} from './src/screens/PopularMovies';
import { TopRatedMovies } from './src/screens/TopRatedMovies';

export const PopularMoviesContext = createContext(null);
export const TopRatedMoviesContext = createContext(null);


export default function App() {
  const [masterPopularMovies, setMasterPopularMovies] = useState([]);
  const[masterTopRatedMovies, setMasterTopRatedMovies]= useState([]);

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: 'popular', title: 'Popular', focusedIcon: 'bell', unfocusedIcon: ''},
    { key: 'topRated', title: 'Top-Rated', focusedIcon: 'bell', unfocusedIcon: ''},
  ]);

const renderScene = BottomNavigation.SceneMap({
  popular: PopularMovies,
  topRated: TopRatedMovies
});

  return (
    <>
     <PopularMoviesContext.Provider value={{masterPopularMovies, setMasterPopularMovies}}>
      <TopRatedMoviesContext.Provider value={{masterTopRatedMovies, setMasterTopRatedMovies}}>
    <BottomNavigation
      navigationState={{ index, routes, masterPopularMovies, masterTopRatedMovies}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
      <ExpoStatusBar style="auto" />
      </TopRatedMoviesContext.Provider>
      </PopularMoviesContext.Provider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
