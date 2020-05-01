import React from "react";
import { Text, StyleSheet, View} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="forest"
                imageSource={require(`../../assets/forest.jpg`)}
                score={10}
            />
            <ImageDetail
                title="beach"
                imageSource={require(`../../assets/beach.jpg`)}
                score={5}
            />
            <ImageDetail
                title="mountain"
                imageSource={require(`../../assets/mountain.jpg`)}
                score={7}
            />
        </View>
    );
}

export default ImageScreen;
