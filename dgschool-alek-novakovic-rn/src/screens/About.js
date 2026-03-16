import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const About = ({ navigation }) => (
    <View>
        <Text>Welcome to About Screen</Text>
        <Button title = "Go to Home" onPress={() => navigation.goBack()}/>
    </View>
);

const styles = StyleSheet.create({});

export default About;
