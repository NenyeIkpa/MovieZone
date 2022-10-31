import React, {useEffect} from 'react';
import { View, Text } from 'react-native';



export const LaunchScreen = ({navigation}) =>  {

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
    <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>

        <Text style={{ fontFamily: 'BlackAndWhitePicture-Regular', fontSize: 64, color: 'black'}}>MoviesZone</Text>

    </View>
);
    };