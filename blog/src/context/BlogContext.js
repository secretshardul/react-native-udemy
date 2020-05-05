import React, { useState, useReducer } from 'react';

const BlogContext = React.createContext();
/**
 * Reducer function
 * @param [{title: 'Blog post #1'}] state
 * @param { type: 'add_post', post: '{title: 'Blog post #2'} } action
 */
const reducer = (state, action) => {
    switch(action.type) {
        case "add_post": {
            return [...state, action.post];
        }
        default:
            return state;
    }
}

// Provider contains values to be distributed
export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    function addBlogPost() {
        dispatch({
            type: 'add_post',
            post: { title: `Blog post #${state.length + 1}` }
        })
    }

    //children prop recieves <App />
    return (
        <BlogContext.Provider value={{ data: state, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
};

// Context allows components to access the provider
export default BlogContext;
