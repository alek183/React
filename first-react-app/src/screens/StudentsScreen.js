import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentsScreen = () => (
    <View>
        <Text style = {styles.text}>Students Screen</Text>
        <StudentDetails 
            name = "Ellie" 
            image = {require("/../../assets/Avatar-1.jpeg")}
            desc = {"Ryoiki tenkai"}
        />

        <StudentDetails 
            name = "Gabriela" 
            image = {require("../../assets/Avatar-2.png")}
            desc = {"Ryoiki tenkai"}
        />

        <StudentDetails 
            name = "Kaylen"
            image = {require("../../assets/Avatar-3.png")}
            desc = {"Ryoiki tenkai"}
        />
    </View>
);

const styles = StyleSheet.create ({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
});

export default StudentsScreen;
