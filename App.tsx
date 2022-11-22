import React, { createContext, useState, useEffect, useCallback } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

import { SafeArea } from './src/utils/safe-area';
import { AppNavigator} from './src/navigation/app.navigator';
import { FavouritesContextProvider } from './src/components/favourites-context';


export const PopularMoviesContext = createContext([]);
export const TopRatedMoviesContext = createContext([]);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

useEffect(()=> {
  async function prepare1() {
    try {
         // Pre-load fonts, make any API calls you need to do here
         const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=697855141b5a270bfc67144c1c8a2c38&language=en-US&page=1`);
        const json = await response.json();
        // console.log(json);
        const result = json.results;
        setPopularMovies(result);
}catch (e) {
  console.log(e);
}
}prepare1()
}, []);

  
useEffect(() => {
  async function prepare2() {
    try {
      const topResponse = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=697855141b5a270bfc67144c1c8a2c38&language=en-US&page=1`
      );
      const topJson = await topResponse.json();
      setTopRatedMovies(topJson.results)
    }catch (e) {
    console.log(e);
  }
} prepare2();
}, []);

useEffect(()=> {
  async function prepare() {
    try {
         // Pre-load fonts, make any API calls you need to do here
      await Font.loadAsync({
        'BlackAndWhitePicture-Regular': require('./assets/fonts/BlackAndWhitePicture-Regular.ttf'),
        'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      });
}catch (e) {
  console.log(e);
}finally{
  // Tell the application to render
  setAppIsReady(true);
  }
} prepare()
}, []);


const onLayoutRootView = useCallback(async () => {
  if (appIsReady) {
    await SplashScreen.hideAsync();
  }
}, [appIsReady]);

if (!appIsReady) {
  return null;
}
// console.log("popular movies are: ", popularMovies );
// console.log("top rated movies are: ", topRatedMovies );



  return (
    <SafeArea style={{ backgroundColor: 'skyblue'}} onLayout={onLayoutRootView}>
      <FavouritesContextProvider>
    <TopRatedMoviesContext.Provider value={topRatedMovies}>
    <PopularMoviesContext.Provider value={popularMovies}>
      <AppNavigator />
      <ExpoStatusBar style="auto" />
    </PopularMoviesContext.Provider>
    </TopRatedMoviesContext.Provider>
    </FavouritesContextProvider>
    </SafeArea>
  );
}

