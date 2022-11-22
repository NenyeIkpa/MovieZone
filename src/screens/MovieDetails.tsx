import React, { useContext, useEffect} from 'react';
import { View, Text, Image, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import { PopularMoviesContext } from '../../App';
import { SafeArea } from '../utils/safe-area';

const DetailsContainer = styled.View`
flex: 1;
alignItems: center;
padding: 8px;
`;

const Overview = styled.Text`
fontFamily: Lato-Regular;
alignContent: center;
fontSize: 16px;
marginTop: 10px;
padding: 3px;
`;

const ImageStyle = styled.Image`
height: 65%;
width: 90%;
padding: 10px;
backgroundColor: black;
resizeMode: cover;
`;


export const MovieDetails = ({ navigation, route, options}) => {
    const item = route.params.paramKey;
    const initialRoute = route.params.initialRouteName
    // console.log("initial route is ", initialRoute)
    const photoUrl = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    const isPopularMoviesScreen = initialRoute === 'popular';
    // console.log(isPopularMoviesScreen);

    return (
      <>
            <DetailsContainer style={{backgroundColor: 'skyblue'} }>
                <ImageStyle  source={{ uri : photoUrl }} />
                    <Overview>{item.overview}</Overview>
                </DetailsContainer>
        </>
    )
};