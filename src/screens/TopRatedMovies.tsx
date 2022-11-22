import React, { useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';


import { SafeArea } from '../utils/safe-area';
import { MovieCard } from '../components/movie-card';
import { IMovie} from '../data/IMovie';
import { TopRatedMoviesContext } from '../../App';


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

export const MovieList = styled(FlatList as new () => FlatList<IMovie>)`
  flex: 1;
`;

export const TopRatedMovies = ({ navigation }) => {
    const topRatedMovies = useContext(TopRatedMoviesContext);
    const [filteredTopRatedMovies, setFilteredTopRatedMovies] = useState(topRatedMovies);
    const [searchQuery, setSearchQuery] = useState('');

  console.log("topRatedMovies are", topRatedMovies)

  const onSearch = (searchQuery : string) => {
    // Check if searched text is not blank
   if(searchQuery) {
    // Inserted text is not blank
// Filter the masterData and update FilteredData
const NewTopRatedMovies = topRatedMovies.filter((movie : IMovie) => {
// Applying filter for the inserted text in search bar
const movieTitle = movie.title
    ? movie.title.toUpperCase()
    : ''.toUpperCase();
const queryData = searchQuery.toUpperCase();
// The indexOf() method returns the first index at which a given element can be found in the array,
//  or -1 if it is not present.
return movieTitle.indexOf(queryData) > -1;
}
);
setFilteredTopRatedMovies(NewTopRatedMovies);
setSearchQuery(searchQuery);
} else {
// Inserted text is blank
// Update FilteredDataSource with masterDataSource
setFilteredTopRatedMovies(topRatedMovies);
setSearchQuery(searchQuery);
}
}


const renderItem: ListRenderItem<IMovie> = ({item}) => <MovieCard movie={item} handlePress={() => navigation.navigate('MovieDetails', { paramKey : item })} />;

  return (
    
     <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <SearchContainer>
        <Searchbar 
        placeholder="Search through top-rated movies"
        onChangeText={(text)=> onSearch(text)}
        value={searchQuery}/>
        </SearchContainer>
      <MovieList 
       data={filteredTopRatedMovies}
       onEndReachedThreshold={0.5}
       onEndReached={() => {}}
       renderItem={renderItem}
       keyExtractor={( item : IMovie, index: number) => item.id}
      />
      </View>
  );
};