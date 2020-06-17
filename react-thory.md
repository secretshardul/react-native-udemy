# Virtual DOM

React has a declarative approach to render the UI. Virtual DOM or an ideal representation of the end UI state is stored in memory. React then reconciles/syncs this with the actual DOM. **React fiber** is the new internal algorithm to perform reconciliation in an incremental manner.

# One way binding

In react data flows one way from parent to child.

```jsx
let initialText = "hello";
return (
  <input value={initialText}>
)
```

Here value in input field remains fixed as 'hello'. User has no way change value of `initialText`.

On the other hand Angular has 2 way binding using `[()]` syntax.

```
One way binding in React: Render(data) ---> DOM
Two way binding in Angular: data <---> DOM
```

To achieve two way functionality, React uses event listeners to read data from the DOM.

```jsx
const [text, setText] = useState('hello');
return (
  <input value={initialText} onChange={(event) => setText(event.target.value)}>
)
```

# React state

The react state object is used to show dynamic values on the DOM. Changing the state causes the component to re-render and display the new value. For functional components, state management is done through **hooks**.
