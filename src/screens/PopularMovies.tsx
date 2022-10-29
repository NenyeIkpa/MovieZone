import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SafeArea } from '../utils/safe-area';
import { MovieCard } from '../components/movie-card';
import { IMovie, DATA } from '../data/IMovie';
import { Search} from '../components/search';
import { PopularMoviesContext, TopRatedMoviesContext } from '../../App';


const SearchContainer = styled.View`
backgroundColor: blue;
padding: 20px;
marginVertical: 10px;
`;

// const MovieList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 10,
//   },
// })``;


export const MovieList = styled(FlatList as new () => FlatList<IMovie>)`
  padding: 20px;
`;

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const PopularMovies = ({navigation}) => {
  // const [fontsLoaded] = useFonts({
  //   'BlackAndWhitePicture-Regular': require('../../assets/fonts/BlackAndWhitePicture-Regular.ttf'),
  // });

  const [appIsReady, setAppIsReady] = useState(false);
  

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPopularMovies, setFilteredPopularMovies] = useState([]);
  const { masterPopularMovies, setMasterPopularMovies} = useContext(PopularMoviesContext);
  const{ setMasterTopRatedMovies }= useContext(TopRatedMoviesContext);
  console.log("masterPopularMovies are", masterPopularMovies);

  useEffect(() => {
    async function prepare() {
      try {
           // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'BlackAndWhitePicture-Regular': require('../../assets/fonts/BlackAndWhitePicture-Regular.ttf'),
          'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
          'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        });

        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=697855141b5a270bfc67144c1c8a2c38&language=en-US&page=1'
        );
        const json = await response.json();
        console.log(json.results);
        setFilteredPopularMovies(json.results);
        setMasterPopularMovies(json.results);

        const response2 = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=697855141b5a270bfc67144c1c8a2c38&language=en-US&page=1')
        const topRated = await response2.json();
        setMasterTopRatedMovies(topRated.results);
      }catch (e) {
      console.warn(e);
    }finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  } prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  const onChangeSearch =( query : string ) => {
    // Check if searched text is not blank
   if(query) {
       // Inserted text is not blank
// Filter the masterData and update FilteredData
const newData = masterPopularMovies.filter((item : IMovie) => {
   // Applying filter for the inserted text in search bar
   const itemData = item.title
       ? item.title.toUpperCase()
       : ''.toUpperCase();
   const queryData = query.toUpperCase();
   return itemData.indexOf(queryData) > -1;
 }
);
setFilteredPopularMovies(newData);
setSearchQuery(query);
} else {
// Inserted text is blank
// Update FilteredDataSource with masterDataSource
setFilteredPopularMovies(masterPopularMovies);
setSearchQuery(query);
}
}
const renderItem: ListRenderItem<IMovie> = ({item}) =>    <TouchableOpacity onPress={(() => navigation.navigate('MovieDetails', { paramKey : item }))}>{<MovieCard movie={item} /> }</TouchableOpacity>;

  return (
    <SafeArea onLayout={onLayoutRootView}>
      <SearchContainer>
        <Searchbar 
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}/>
        </SearchContainer>
      <MovieList 
       data={filteredPopularMovies}
       renderItem={renderItem}
       keyExtractor={( item : IMovie, index: number) => item.id}
      />
    </SafeArea>
  );
};
