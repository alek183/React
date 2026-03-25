import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import Swiper from "react-native-swiper"
import Icon from '../components/Icons';
import data from "../data/products.json";
import { FlatList } from 'react-native-gesture-handler';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render() {
        return (
             <View style = {styles.container}>
        <View style = {styles.slideContainer}>
            <Swiper  autoplay autoplayTimeout = {5} activeDotColor="#22D4FF">
                <View style = {styles.item}>
                    <Image
                        source={require("../../assets/907796.png")}
                        style={styles.ImgItem}
                        resizeMode="cover"
                    />
                </View>
                <View style = {styles.item}>
                    <Image
                        source={require("../../assets/1355345.png")}
                        style={styles.ImgItem}
                        resizeMode="cover"
                    />
                </View>
                <View style = {styles.item}>
                    <Image
                        source={require("../../assets/rebirth.jpg")}
                        style={styles.ImgItem}
                        resizeMode="cover"
                    />
                </View>
            </Swiper>
        </View>

        <View style = {styles.iconContainer}>
            <Icon name = "cellphone" iconText = "iPhone"/>
            <Icon name = "android" iconText = "Android"/>
            <Icon name = "laptop" iconText = "Laptop"/>
        </View>

        <View style = {styles.iconContainer}>
            <Icon name = "tablet" iconText = "Tablet"/>
            <Icon name = "mouse" iconText = "Mouse"/>
            <Icon name = "keyboard" iconText = "Keyboard"/>
        </View>

        <View>
            <Text>Most popular products</Text>
            <FlatList 
            data = {this.state.products.popularproducts} 
            renderItem={({item}) => (
                <View>
                    <Item item = {item}/>
                </View>
            )}
            />
        </View>
    </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    slideContainer: {
        width: "90%",
        height: 200,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 8,
    },

    item: {
        flex: 1,
        justifyContent: "center",
    },

    ImgItem: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },

    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
        marginTop: 30,
    },

    productsContainer: {
        marginHorizontal: 20,
    },

    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },

});

export default Home;
