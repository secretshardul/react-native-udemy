import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                placeholder="search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange} //directly pass reference
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        marginHorizontal: 15,
        fontSize: 15
    }
});

export default SearchBar;
