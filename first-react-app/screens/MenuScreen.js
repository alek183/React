import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MenuScreen = (props) => {
    console.log(props.navigation);
    return (
        <View>
            <Text style = {styles.text}>Welcome to the Menu Screen</Text>
            <Button
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        marginVertical: 20,
        fontSize: 20,
        textAlign: "center"
    }
});

export default MenuScreen;