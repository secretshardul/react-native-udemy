import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput value={title} style={styles.label}
                onChangeText={
                    (text) => setTitle(text)
                }
            />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput value={content} style={styles.label}
                onChangeText={
                    (text) => setContent(text)
                }
            />
            <Button title="Add blog post"
                onPress={
                    async () => {
                        try {
                            await addBlogPost(title, content);
                            navigation.navigate('Index');
                        }
                        catch {
                            console.log('failed');
                        }

                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
})

export default CreateScreen;
