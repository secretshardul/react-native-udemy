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