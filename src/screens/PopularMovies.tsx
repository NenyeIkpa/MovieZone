import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SafeArea } from '../utils/safe-area';
import { MovieCard } from '../components/movie-card';
import { IMovie } from '../data/IMovie';
import { PopularMoviesContext }  from '../../App';
import { FavouritesView } from '../components/favourites-view';

const SearchContainer = styled.View`
backgroundColor: skyblue;
paddingHorizontal: 20px;
paddingVertical: 20px;
marginVertical: 10px;
`;

// const MovieList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 10,
//   },
// })``;


const MovieList = styled(FlatList as new () => FlatList<IMovie>)`
  padding: 5px;
  border-width: 2px;
`;

export const PopularMovies = ({navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const popularMovies= useContext(PopularMoviesContext)
  const [filteredPopularMovies, setFilteredPopularMovies] = useState(popularMovies)
  const [isToggled, setIsToggled] = useState(false);

  const onFavouritesToggle=() =>{ setIsToggled(!isToggled)}

  const onSearch = (searchQuery : string) => {
    // Check if searched text is not blank
   if(searchQuery) {
    // Inserted text is not blank
// Filter the masterData and update FilteredData
const NewPopularMovies = popularMovies.filter((movie : IMovie) => {
// Applying filter for the inserted text in search bar
const movieTitle = movie.title
    ? movie.title.toUpperCase()
    : ''.toUpperCase();
const queryData = searchQuery.toUpperCase();
return movieTitle.indexOf(queryData) > -1;
}
);
setFilteredPopularMovies(NewPopularMovies);
setSearchQuery(searchQuery);
} else {
// Inserted text is blank
// Update FilteredDataSource with masterDataSource
setFilteredPopularMovies(popularMovies);
setSearchQuery(searchQuery);
}
};
console.log("filtered movies for popular movies screen ",filteredPopularMovies.length, filteredPopularMovies)

  return (
     <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <SearchContainer>
        <Searchbar 
        icon={isToggled? 'heart': 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search through popular movies"
        value={searchQuery}
        onChangeText={(text) => onSearch(text)}
        />
        </SearchContainer>
      
      <FlatList 
       data={filteredPopularMovies}
       onEndReachedThreshold={0.1}
       onEndReached={() => {}}
       renderItem={({item}) => 
       <MovieCard movie={item} handlePress={(() => navigation.navigate('MovieDetails', { paramKey : item, initialRouteName: "popular" }))} />
     }
      //  keyExtractor={( item : IMovie) => item.id}
      />
      </View>
  );
};
