import React from "react";
import { Text, StyleSheet, View} from "react-native";

const BoxScreen = (props) => {
    console.log(props);
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 300
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1
        // alignSelf: 'flex-end'
        // position: "absolute",
        // fontSize: 20

        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
        ...StyleSheet.absoluteFillObject

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2
        // top: 8
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
});
export default BoxScreen;
