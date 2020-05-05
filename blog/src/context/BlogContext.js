import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

/**
 * Reducer function
 * @param [{title: 'Blog post #1'}] state
 * @param { type: 'add_post' } action
 */
const reducer = (state, action) => {
    switch (action.type) {
        case "add_post": {
            return [...state, { title: `Blog post #${state.length + 1}` }];
        }
        default:
            return state;
    }
}

/**
 * @param {dispatch} dispatch createDataContext passes dispatch object.
 */
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_post' });
    };
};

// BlogContext recieves Context, Provider from createDataContext. These objects are used in App.js and IndexScreen.js.
export const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost }, // action can take multiple functions
    []
);
