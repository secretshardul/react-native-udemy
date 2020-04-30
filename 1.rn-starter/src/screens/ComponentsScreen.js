import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Shardul';
    return (
        <View>
            <Text style={styles.headingStyle}>Getting started with react native!</Text>
            <Text style={styles.bodyStyle}>My name is {name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    bodyStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;