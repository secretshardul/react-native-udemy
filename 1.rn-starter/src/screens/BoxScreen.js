import React from "react";
import { Text, StyleSheet, View} from "react-native";

const BoxScreen = (props) => {
    console.log(props);
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>BoxScreen</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 8,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 4
    }
});
export default BoxScreen;
