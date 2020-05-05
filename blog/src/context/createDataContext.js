import React, { useReducer } from 'react';

/**
 * Automates context creation. This removes need of multiple context files. Every context file has these:
 * @param reducer
 * @param actions functions that modify state
 * @param initialState
 */
export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: (dispatch) => { return () => {} } }
        const boundActions = {};

        for(let key in actions) {
            // loop over actions. Pass dispatch argument for every action to activate them.
            boundActions[key] = actions[key](dispatch);
        }
        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    }
    return { Context, Provider } //recieved by BlogContext.
}
