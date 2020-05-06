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
                    title: action.payload.title,
                    content: action.payload.content,
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
    return async (title, content) => {
        dispatch(
            { type: 'add_post', payload: { title, content } }
        );
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_post', payload: id })
    }
};

// BlogContext recieves Context, Provider from createDataContext. These objects are used in App.js and IndexScreen.js.
export const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost, deleteBlogPost }, // action can take multiple functions
    []
);
