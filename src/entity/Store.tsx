import React, {createContext, useReducer} from "react";
import { Note } from "./Note";
import { NoteReducer } from './NoteReducer';
import { State } from "./State";

const initialState: State = {
    notes: []
};

export const Context = React.createContext<any[]>([initialState])

const Store = ({children}) => {
    const [state, dispatch] = useReducer(NoteReducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export default Store;