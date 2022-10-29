import React, { useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';


import { SafeArea } from '../utils/safe-area';
import { MovieCard } from '../components/movie-card';
import { IMovie, DATA } from '../data/IMovie';
import { Search} from '../components/search';
import { TopRatedMoviesContext } from '../../App';


const SearchContainer = styled.View`
backgroundColor: green;
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

export const TopRatedMovies = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { masterTopRatedMovies }= useContext(TopRatedMoviesContext);
    const[filteredTopRatedMovies, setFilteredTopRatedMovies]= useState(masterTopRatedMovies);
    
  const renderItem: ListRenderItem<IMovie> = ({item}) => <MovieCard movie={item} />;

//   const [topRatedMovies, settopRatedMovies] = useState(masterTopRatedMovies);
  console.log("masterTopRatedMovies are", masterTopRatedMovies)


  const onChangeSearch =( query : string ) => {
    // Check if searched text is not blank
   if(query) {
       // Inserted text is not blank
// Filter the masterData and update FilteredData
const newData = masterTopRatedMovies.filter((item : IMovie) => {
   // Applying filter for the inserted text in search bar
   const itemData = item.title
       ? item.title.toUpperCase()
       : ''.toUpperCase();
   const queryData = query.toUpperCase();
   return itemData.indexOf(queryData) > -1;
 }
);
setFilteredTopRatedMovies(newData);
setSearchQuery(query);
} else {
// Inserted text is blank
// Update FilteredDataSource with masterDataSource
setFilteredTopRatedMovies(masterTopRatedMovies);
setSearchQuery(query);
}
}

  return (
    <SafeArea style={{backgroundColor: 'green'}} >
      <SearchContainer>
        <Searchbar 
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}/>
        </SearchContainer>
      <MovieList 
       data={filteredTopRatedMovies}
       renderItem={renderItem}
       keyExtractor={( item : IMovie, index: number) => item.id}
      />
    </SafeArea>
  );
};