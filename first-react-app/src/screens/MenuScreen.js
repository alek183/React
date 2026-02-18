import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

const MenuScreen = (props) => {
    console.log(props.navigation);
    return (
        <View>
            <Text style = {styles.text}>Welcome to the Menu Screen</Text>
            <Button
                title = "Go to List Screen"
                onPress = {() => props.navigation.navigate("List")}
            />

            <TouchableOpacity>
                style = {styles.btn}
                onPress={() => props.navigation.navigate("Students")}
                <Text style = {styles.btnText}>Go to Students Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        marginVertical: 20,
        fontSize: 20,
        textAlign: "center"
    },
    btn: {
        backgroundColor: "#3446eb",
        marginVertical: 10,
        paddingVertical: 7,
    },
    btnText: {
        color: "white",
        fontSize: 15,
        textTransform: "uppercase",
        textAlign: "center",
    },
});

export default MenuScreen;