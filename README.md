# JSX rules
1. Different JSX elements can be combined.
```jsx
const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>This is body</Text>
        </View>
    );
}
```
2. **props(properties)**: JSX elements can be modified using props. ```style``` is a prop used above.
3. We can refer to Javascript variables inside JSX blocks using curly braces.
```jsx
const greeting = "hi there";
return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text>{ greeting }</Text>
    </View>
);
```
4. We can assign JSX elements to a variable, and use this variable in a JSX block.
```jsx
const message = <Text>Welcome to react native!</Text>;
return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        {message}
    </View>
);
```

# React Native basics
## FlatList
- Displays scrollable list.
- Needs 2 basic props, ```data``` and ```renderItem```.

    ```jsx
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
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({ item }) => { //ES15: element.item can be accessed as { item }
            return <Text style={styles.textStyle}>{item.name}- Age {item.age}</Text>;
        }}
    />
    );
    ```

- **key**: If key is skipped, entire list has to reload to accomodate any change. Keys can be added in two ways.

    1. ```keyExtractor```
    2. Using ```key``` attribute in data passed to ```FlatList```. It must be of string type, not integer.

    ```jsx
        const friends = [
        { name: 'Friend #1', key: '1' },
        { name: 'Friend #2', key: '2' },
        { name: 'Friend #3', key: '3'  },
        { name: 'Friend #4', key: '4'  },
        { name: 'Friend #5', key: '5'  },
        { name: 'Friend #6', key: '6'  },
        { name: 'Friend #7', key: '7'  },
    ];
    ```
- Other props include  ```horizontal```, ```showsHorizontalScrollIndicator``` etc.
```jsx
<FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={friends}
    keyExtractor={friend => friend.name}
    renderItem={({ item }) => { //ES15: element.item can be accessed as { item }
        return <Text style={styles.textStyle}>{item.name}- Age {item.age}</Text>;
    }}
/>
```