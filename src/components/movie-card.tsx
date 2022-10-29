import { $DeepPartial } from '@callstack/react-theme-provider';
import React from 'react';
import {View, Text, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {Avatar, Card, Title } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { orange100, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { InternalTheme } from 'react-native-paper/lib/typescript/types';
import styled from 'styled-components';

import { IMovie } from '../data/IMovie';

const FilmCard = styled(Card)`
background-color: black;
padding: 8px;
margin: 8px `;

const CardTitle = styled(Card.Title)`
fontFamily : BlackAndWhitePicture-Regular;
fontSize : 24px`;
color: 'white';

export const MovieCard = ({movie}: {movie: IMovie}) => {

const photoUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
// console.log(photoUrl)
// console.log(movie.title)
// console.log(movie.release_date)
    return(
        <FilmCard elevation={5}>
            <Card.Cover source={{uri : photoUrl}} />
            <Card.Title 
            title={`Title: ${movie.title}`} 
            subtitle={`Release date: ${movie.release_date}`} 
            titleStyle={{fontFamily: 'BlackAndWhitePicture-Regular', fontSize: 20, color: 'white'}}
            subtitleStyle={{fontFamily: 'BlackAndWhitePicture-Regular', fontSize: 18, color: 'white'}}
             />
            </FilmCard>
    );
};