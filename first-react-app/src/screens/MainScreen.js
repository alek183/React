
// IMPORTING

import React from 'react';
import {Text, StyleSheet, View} from "react-native";

// COMPONENTS

const MainScreen = () => {
    return (
        <View>
            <Text style = {styles.textStyle}>This is the Main Screen</Text>
        </View>
    );
};

// STYLE

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
});

// EXPORT

export default MainScreen;