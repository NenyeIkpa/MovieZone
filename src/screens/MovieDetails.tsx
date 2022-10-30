import React, { useContext, useEffect} from 'react';
import { View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import { PopularMoviesContext } from '../../App';
import { SafeArea } from '../utils/safe-area';

const DetailsContainer = styled.View`
flex: 1;
justifyContent: center;
alignItems: center;
`;

const Overview = styled.Text`
fontFamily: Lato-Regular;
fontSize: 16px;
padding: 16px;
alignItems: 'spread';
`;

const ImageStyle = styled.Image`
height: 80%;
width: 90%;
padding: 5px;
backgroundColor: black;
resizeMode: cover;
`;


export const MovieDetails = ({ navigation, route}) => {
    const item = route.params.paramKey;
    const initialRoute = route.params.initialRouteName
    const photoUrl = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    const isPopularMoviesScreen = initialRoute === 'PopularMovies';
    console.log(isPopularMoviesScreen);

    useEffect(() => {
        // hides bottom nav
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: "none"
          }
        });
        return () => navigation.getParent()?.setOptions({
          tabBarStyle: undefined
        });
      }, [navigation]);
    return (
        <SafeArea style={{ backgroundColor: isPopularMoviesScreen ? 'skyblue' : 'beige' }}>
            <DetailsContainer>
                <ImageStyle  source={{ uri : photoUrl }} />
                    <Overview>{item.overview}</Overview>
                </DetailsContainer>
        </SafeArea>
    )
};