import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

/**
 * Reducer function
 * @param [{ id: 1234, title: 'Blog post #1' }] state
 * @param { type: 'add_post' || { type: 'delete_post', payload: 1234 } } action
 */
const reducer = (state, action) => {
    switch (action.type) {
        case "add_post": {
            return [...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    title: `Blog post #${state.length + 1}`
                }];
        }
        case "delete_post": {
            //delete if id present
            return state.filter((post) => {
                return post.id !== action.payload
            })
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

const deleteBlogPost = (dispatch) => {
    return (id) => {
        // console.log(`deleting ${id}`);
        dispatch({ type: 'delete_post', payload: id })
    }
};

// BlogContext recieves Context, Provider from createDataContext. These objects are used in App.js and IndexScreen.js.
export const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost, deleteBlogPost }, // action can take multiple functions
    []
);
