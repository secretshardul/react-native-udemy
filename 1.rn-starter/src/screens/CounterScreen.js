import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

/**
 *
 * @param {*} state === {counter: 0}
 * @param {*} action === {type: 'increment_counter', payload: 1}
 */
const reducer = (state, action) => {
    switch(action.type){
        case 'increment_counter':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement_counter':
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }
}

const CounterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    return (
        <View>
            <Button title="increase"
                onPress={() => {
                    dispatch({
                        type: 'increment_counter',
                        payload: 1
                    })
                    console.log(state.counter);
                }}
            />
            <Button title="decrease"
                onPress={() => {
                    dispatch({
                        type: 'decrement_counter',
                        payload: 1
                    })
                    console.log(state.counter);
                }}
            />
            <Text>Current count: {state.counter}</Text>
        </View>
    );
}

export default CounterScreen;
