import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Root } from './root.navigator';
import { MovieDetails } from '../screens/MovieDetails';

const MoviesStack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
          <MoviesStack.Navigator initialRouteName='PopularMoviesScreen'>
            <MoviesStack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}} />

            <MoviesStack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{headerShown: true, headerTitle: "", headerStyle: {backgroundColor:  'skyblue' },}} />
          </MoviesStack.Navigator>
        
      </NavigationContainer>
    )
};