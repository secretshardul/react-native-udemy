import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextScreen = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            { (password.length < 5)
                ? <Text>Mimimum length is 5 characters</Text>
                : null
            }
        </View>

    );
}
const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
export default TextScreen;
