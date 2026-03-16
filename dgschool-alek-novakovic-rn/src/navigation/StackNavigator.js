import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#ff6347',
        },
        headerTintColor: "White",
    }}>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "About" component={About}/>
    </Stack.Navigator>
);

export default MainStackNavigator;
