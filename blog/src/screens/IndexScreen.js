import React, { useContext } from 'react';
import { Text, View, Stylesheet, FlatList, Button } from 'react-native';
// import { Context as BlogContext } from '../context/BlogContext'; // can rename
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Text>IndexScreen</Text>
            <Button onPress={addBlogPost} title="create post"/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
};

export default IndexScreen;
