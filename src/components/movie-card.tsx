import { $DeepPartial } from '@callstack/react-theme-provider';
import React from 'react';
import {View, Text, StyleProp, ViewProps, ViewStyle, TouchableOpacity} from 'react-native';
import {Avatar, Card, Title } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { orange100, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { InternalTheme } from 'react-native-paper/lib/typescript/types';
import styled from 'styled-components';

import { IMovie } from '../data/IMovie';
import { Favourite } from './favourite';

const FilmCard = styled(Card)`
background-color: black;
padding: 8px;
margin: 8px `;

const CardTitle = styled(Card.Title)`
fontFamily : BlackAndWhitePicture-Regular;
fontSize : 24px;
color: white
`;

interface IProps{
movie: IMovie,
handlePress(): void
}

export const MovieCard = (props: IProps) => {

const photoUrl = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`;
// console.log(photoUrl)
// console.log(movie.title)
// console.log(movie.release_date)

    return(
        <TouchableOpacity onPress={props.handlePress}>
        <FilmCard elevation={5}>
            <Card.Cover source={{uri : photoUrl}} style={{resizeMode: 'contain'}} />
            <Card.Title 
            title={`Title: ${props.movie.title}`} 
            subtitle={`Release date: ${props.movie.release_date}`} 
            titleStyle={{fontFamily: 'BlackAndWhitePicture-Regular', fontSize: 20, color: 'white'}}
            subtitleStyle={{fontFamily: 'BlackAndWhitePicture-Regular', fontSize: 18, color: 'white'}}
             />
             <Text style={{marginStart: 16, fontFamily: 'BlackAndWhitePicture-Regular' , color: 'white', fontSize: 18}}>Rating: {props.movie.vote_average}</Text>
             <Favourite movie={props.movie}/>
            </FilmCard>
            </TouchableOpacity>
    );
};