import React, {createContext, useReducer} from 'react';
import { NoteReducer } from './NoteReducer';

const initialState = {
    notes: []
};

export const Context = createContext<any[]>([initialState])

const Store = ({children}) => {
    const [state, dispatch] = useReducer(NoteReducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export default Store;