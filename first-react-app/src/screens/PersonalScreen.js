import React from "react";
import {Text, StyleSheet, View, Button, FlatList} from "react-native";


const info = [
    {name : "Alek", surname: "Novaković", age: 17, birthday: 18.03},
];

const PersonalScreen = () => {
    return (
        <View>
            <FlatList
                data={info}
                renderItem={({item}) => {
                    return (
                        <Text>
                            Ime: {item.name}
                        </Text>
                    )
                }}
                vertical = {true}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PersonalScreen;