import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';

export default class CountriesScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
        }
    }

    componentDidMount() {
        this.setState({
            countries: data,
        });
    }

    render() {
        return (
            <View>
                <Text style = {styles.screenTitle}>Countries Screen</Text>
                <FlatList
                    data={this.state.countries}
                    keyExtractor={(countries) => countries.id}
                    renderItem={({ item }) => (
                        <View style = {styles.cardWrapper}>
                            <Text>City name: {item.name}</Text>
                            <Text>Country name: {item.country}</Text>
                            <Text>Description: {item.description}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    screenTitle
})


