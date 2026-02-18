import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import TestScreen from './screens/TestScreen';
import ListScreen from './screens/ListScreen';
import ButtonScreen from './screens/ButtonScreen';
import PersonalScreen from './screens/PersonalScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Menu">
        <Stack.Screen name = "Home" component = {MainScreen}/>
        <Stack.Screen name = "Button" component = {ButtonScreen}/>
        <Stack.Screen name = "List" component = {ListScreen}/>
        <Stack.Screen name = "Exercise" component = {ExerciseScreen}/>
        <Stack.Screen name = "Menu" component = {MenuScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

