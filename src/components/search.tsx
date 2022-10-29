import React, { useState} from 'react';
import { View, Text} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { IMovie } from '../data/IMovie';
import { MovieDataContext, MovieDataContextProvider } from '../service/movie-context';

const SearchContainer = styled.View`
backgroundColor: orange;
padding: 20px;
marginVertical: 10px;
`;

export const Search = () => {
    return (
        <SearchContainer>
        <Searchbar 
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}/>
        </SearchContainer>
    );


};