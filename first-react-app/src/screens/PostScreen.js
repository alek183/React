import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

class PostScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({
            posts: jsonData,
        })
    }
    
    render() {
        const {posts} = this.state;
        return (
            <View>
                <Text>Post Screen</Text>
                <FlatList
                    keyExtractor={(posts) => posts.id}
                    data = {posts}
                    renderItem = {({item}) => (
                        <View>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

export default PostScreen;


