import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PopularMovies } from '../screens/PopularMovies';

import { MovieDetails } from '../screens/MovieDetails';

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
            getId={({ params }) => params.initialRouteName}
            options={{headerTitle : 'Details', animation: 'simple_push', headerShown: true }}
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