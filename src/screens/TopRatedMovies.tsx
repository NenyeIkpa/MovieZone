import React, { useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, ListRenderItem , TouchableOpacity} from 'react-native';
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
backgroundColor: beige;
paddingHorizontal: 20px;
paddingVertical: 20px;
marginVertical: 10px;
`;

// const MovieList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 10,
//   },
// })``;

export const MovieList = styled(FlatList as new () => FlatList<IMovie>)`
  flex: 1;
`;

export const TopRatedMovies = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { masterTopRatedMovies, pageTopRated }= useContext(TopRatedMoviesContext);
    const [pagerTopRated, setPagerTopRated] = useState(pageTopRated);
    const[filteredTopRatedMovies, setFilteredTopRatedMovies]= useState(masterTopRatedMovies);

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

const renderItem: ListRenderItem<IMovie> = ({item}) => <TouchableOpacity onPress={(() => navigation.navigate('MovieDetails', { paramKey : item }))}><MovieCard movie={item} /></TouchableOpacity>;

  return (
    <SafeArea style={{backgroundColor: 'beige'}} >
      <SearchContainer>
        <Searchbar 
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}/>
        </SearchContainer>
      <MovieList 
       data={filteredTopRatedMovies}
       onEndReachedThreshold={0.5}
       onEndReached={() => {pagerTopRated<5 && setPagerTopRated(pagerTopRated + 1)}}
       renderItem={renderItem}
       keyExtractor={( item : IMovie, index: number) => item.id}
      />
    </SafeArea>
  );
};