import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((post) => {
        return post.id === navigation.getParam('id');
    })
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

export default ShowScreen;