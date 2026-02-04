import React from "react";
import {Text, StyleSheet, View} from "react-native";

// Var, let, const

const ExerciseScreen = () => {
    let message = "Hi there!";

    message = "Hi there from Digital School!";

    return (<Text>{message}</Text>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
})

export default ExerciseScreen;