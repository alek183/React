import React from 'react';rn
import { Text, View, StyleSheet } from 'react-native';

const SudentDetails = (props) => (
    <View>
        <View style = {styles.cardWrapper}>
            <Image source = {props.image}/>
            <View>
                <Text>{props.name}</Text>
                <Text>{props.desc}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop: 20,
    },
    name: {
        fontWeight: "bold",
    }
});

export default StudentDetails;
