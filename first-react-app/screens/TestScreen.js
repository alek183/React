import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TestScreen = () => {

    let message = "Hi";
    const message2 = "Hi2";
    
    return (
        <View>
            <Text>{message}</Text>,
            <Text>{message2}</Text>,
            <Text style = {styles.textStyle}>Hi 1!</Text>,
            <Text style = {styles.textStyle2}>Hi 2!</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    textStyle: {
        fontSize : 25,
        color : "red",
    },
    textStyle2 : {
        fontSize : 25,
        color : "orange",
    },
});

export default TestScreen;