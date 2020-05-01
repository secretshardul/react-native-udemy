import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = (props) => {
    //todo: fix this
    // let counter = 0;

    const [counter, setCounter] = useState(0);
    //entire component is re-run when setCounter is used.
    return (
        <View>
            <Button title="increase"
                onPress={() => {
                    //don't do this. React doesn't detect change automatically.
                    // counter++;
                    setCounter(counter + 1);
                    console.log(counter);
                }}
            />
            <Button title="decrease"
                onPress={() => {
                    // counter--;
                    setCounter(counter - 1);
                    console.log(counter);
                }}
            />
            <Text>Current count: {counter}</Text>
        </View>

    );
}

export default CounterScreen;
