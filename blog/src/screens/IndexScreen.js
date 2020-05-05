import React, { useContext } from 'react';
import { Text, View, Stylesheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);
    return (
        <View>
            <Text>IndexScreen</Text>
            <Button onPress={addBlogPost} title="create post"/>
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
};

export default IndexScreen;
