import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((post) => {
        return post.id === navigation.getParam('id');
    })
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
            >
                <Feather name="edit" size={25}/>
            </TouchableOpacity>

        )
    }
}

export default ShowScreen;