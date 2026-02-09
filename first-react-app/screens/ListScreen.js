import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const students = [
    { id : 0, name : "Alek", surname: "Novaković", age: 17},
    { id : 1, name : "Anida", surname: "Veledar", age: 17},
    { id : 2, name : "Danin", surname: "Zulfić", age: 17},
    { id : 3, name : "Marko", surname: "Forcan", age: 17},
];

const ListScreen = () => {
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList
                data={students}
                renderItem={({ item }) => {
                    return (
                        <Text>
                            {item.name} {item.surname} - {item.age}
                        </Text>
                    );
                }}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({});

export default ListScreen;