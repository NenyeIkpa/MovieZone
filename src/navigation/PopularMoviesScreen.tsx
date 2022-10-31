import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PopularMovies } from '../screens/PopularMovies';

import { MovieDetails } from '../screens/MovieDetails';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const PopularMoviesStack = createNativeStackNavigator();


export const PopularMoviesScreen = () => {
    return (
        <PopularMoviesStack.Navigator initialRouteName='PopularMovies'>
            <PopularMoviesStack.Screen
            name='PopularMovies'
            component={PopularMovies}
            options={{headerShown: false}}
            />
            <PopularMoviesStack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{headerTitle : 'Details', animation: 'simple_push', headerShown: true, headerStyle: {backgroundColor : 'skyblue'}}}
            />
        </PopularMoviesStack.Navigator>
    )
}

//       <HomeStack.Screen
//         name="CommentSection"
//         component={CommentSection}
//         options={{
//           headerTitle: 'comment'
//         }}
//         />
//         <HomeStack.Screen
//         name="ChatScreen"
//         component={ChatScreen} //HIDE BottomTab INSIDE THIS COMPONENT
//         options={{
//           headerTitle: 'Messages',
//           animation: 'slide_from_right',
//         }}
//       />
//     </HomeStack.Navigator>
//   );
// };