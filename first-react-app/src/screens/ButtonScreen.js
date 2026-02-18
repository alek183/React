import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity  } from "react-native";

const ButtonScreen = () => {
    return (
        <View>
            <Text style = {styles.textStyle}>Button Screen</Text>
            <Button
                title = "Click me"
                color = "purple"
                onPress={() => console.log("Button clicked!")}
            />

            <TouchableOpacity style = {styles.touchableButton} onPress={() => console.log("TouchableOpacity Clicked")}>
                <Text style = {styles.btnText}>This is a clickable text!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign : "center",
        marginTop : 10,
        fontSize : 15,
        marginBottom : 10,
    },
    touchableButton: {
        backgroundColor : "purple",
        marginVertical : 15,
        paddingVertical : 20,
        borderRadius : 6,
        marginHorizontal : 20,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight : "bold",
    },
});

export default ButtonScreen;