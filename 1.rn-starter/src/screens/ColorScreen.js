import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const ColorScreen = (props) => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button
                title="Add color"
                onPress={() => {
                    setColors([...colors, randomRgb()]);
                }}
            />

            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return (
                        <View style= {{
                            height: 100,
                            width: 100,
                            backgroundColor: item
                        }}/>
                    )
                }}
            />
        </View>

    );
}

function randomNum() {
    return Math.floor(Math.random()*255);
}

function randomRgb() {
    console.log(randomNum());
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}
export default ColorScreen;
