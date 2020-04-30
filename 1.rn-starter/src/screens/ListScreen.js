import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    // const friends = [
    //     { name: 'Friend #1', key: '1' },
    //     { name: 'Friend #2', key: '2' },
    //     { name: 'Friend #3', key: '3'  },
    //     { name: 'Friend #4', key: '4'  },
    //     { name: 'Friend #5', key: '5'  },
    //     { name: 'Friend #6', key: '6'  },
    //     { name: 'Friend #7', key: '7'  },
    // ];
    const friends = [
        { name: 'Friend #1', age: 11 },
        { name: 'Friend #2', age: 12 },
        { name: 'Friend #3', age: 13 },
        { name: 'Friend #4', age: 14 },
        { name: 'Friend #5', age: 15 },
        { name: 'Friend #6', age: 16 },
        { name: 'Friend #7', age: 17 },
    ];
    return (
    <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({ item }) => { //ES15: element.item can be accessed as { item }
            return <Text style={styles.textStyle}>{item.name}- Age {item.age}</Text>;
        }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;