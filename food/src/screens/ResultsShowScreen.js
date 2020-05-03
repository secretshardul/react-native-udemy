import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id'); //read data

    async function getResult(id) {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    console.log(result.photos);

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <Image source={{ uri: item }}
                            style={styles.image}
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});
export default ResultsShowScreen;