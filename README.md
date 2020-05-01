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

## Buttons
React Native has 2 kinds of buttons
1. **Button**: Simple button with low customization.
```jsx
<Button
title="Go to components demo"
onPress={() => console.log('Buttom pressed')}
/>
```

2. **TouchableOpacity**: Highly customizable. It can detect a press on almost any kind of element.
```jsx
<TouchableOpacity
onPress={() => console.log('Touchable opacity pressed')}
>
    <Text>Go to list demo</Text>
    <Text>Go to list demo</Text>
</TouchableOpacity>
```

## Navigation
React router passes a props object to every page loaded.
```jsx
const HomeScreen = props => {
  console.log(props.navigation);
```

```props.navigation``` is used to navigate from one page to another.
```jsx
<Button
    title="Go to components demo"
    onPress={() => props.navigation.navigate('Components')}
/>
```

# State management
- State system is used to track data which will change over time. On other hand, props are used to pass data from parent to a child.
- React doesn't automatically update view when variable values are changed.
    ```jsx
    const CounterScreen = (props) => {
        let counter = 0;
        return (
            <View>
                <Button title="increase"
                    onPress={() => {
                        counter++;
                        console.log(counter);
                    }}
                />
                <Button title="decrease"
                    onPress={() => {
                        counter--;
                        console.log(counter);
                    }}
                />
                <Text>Current count: {counter}</Text>
            </View>

        );
    }
    ```
    Here ```counter``` value gets updated but this is not displayed  to user.

## React hooks for state management
```useState``` hook allows React to observe changes so they can be rendered to the view.
```jsx
import React, { useState } from "react";

const CounterScreen = (props) => {

    const [counter, setCounter] = useState(0); //initial value 0
    //entire component is re-run when setCounter is used.
    return (
        <View>
            <Button title="increase"
                onPress={() => {
                    setCounter(counter + 1);
                    console.log(counter);
                }}
            />
            <Button title="decrease"
                onPress={() => {
                    setCounter(counter - 1);
                    console.log(counter);
                }}
            />
            <Text>Current count: {counter}</Text>
        </View>

    );
}
```

Properties
1. React cannot detect direct changes to the state variable. Use the setter function.
```js
setCounter(count + 1);
```
2. Any type of data which changes over time can be tracked: int, string, array etc.
3. When a component is rerendered, all its children get rerendered.
4. A state variable can be passed to a child component as props.
5. Each copy of a component has its own separate state variables.

## State management in a hierarchy of components
1. Where to create state variables?

    Create  state variables in the most parent component which needs to read/write on that state value.

    Create state variables for red, blue and green colors in SquareScreen instead of ColorCounter.

2. How to pass state variables from parent to child?
    1. When child only needs to read, pass value directly through props.
    ```js
    {value: 'red'}
    ```
    2. When child needs to write, pass a callback function through props.
    ```js
    {onChange: () => {}}
    ```
    Example:
    - Passing callback as props
        ```jsx
        <ColorCounter color="red"
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        />
        ```
    - Executing callback
        ```jsx
        const ColorCounter = ({ color, onIncrease, onDecrease }) => {
            return (
                <View>
                    <Text>{ color }</Text>
                    <Button
                        title={`increase ${ color }`}
                        onPress={() => onIncrease()} //callback function called
                    />
        ```
## Reading text
In React we do not read a child component's data in a parent component. Instead we create a state variable in the parent which is modified by the child component.
```jsx
    const [name, setName] = useState('');
    return (
        <TextInput
            value={name}
            onChangeText = {newValue => setName(newValue)}
        />
```

## Reducers
- Better alternative to ```useState``` for complex state logic. It gets called with 2 objects
    1. **state**: contains current state
    2. **action**: Describes what update we want to make. We look at this object to decide how to change state.
- State object is not modified directly.
- Value returned by reducer serves as new state.

**Example**:

3 ```setState``` hooks for red, green and blue can be replaced by a single reducer.
```jsx
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount }
        case 'green':
            return { ...state, green: state.green + action.amount }
        case 'blue':
            return { ...state, blue: state.blue + action.amount }
    }
}

const SquareScreen = (props) => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
```

To change state
```jsx
<ColorCounter color="red"
    onIncrease={() => dispatch({
        colorToChange: 'red', amount: COLOR_INCREMENT
    })}
```

To read state
```jsx
<View style = {{
    height: 150,
    width: 150,
    backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
}}/>
```

## Community convention for reducers
```action``` and ```dispatch``` should be of format
```js
//our code
{ colorToChange: 'red', amount: 15 }

//convention
{ type: 'change_red', payload: 15 }
```

