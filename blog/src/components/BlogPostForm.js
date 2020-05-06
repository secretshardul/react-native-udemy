import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm = ({ initialValues, onSubmit }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput value={title} style={styles.input}
                onChangeText={
                    (text) => setTitle(text)
                }
            />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput value={content} style={styles.input}
                onChangeText={
                    (text) => setContent(text)
                }
            />
            <Button title="Save blog post"
                onPress={
                    () => onSubmit(title, content)
                }
            />
        </View>
    );
};

// Set default values for initialValues prop
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        padding: 4
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
})

export default BlogPostForm;
