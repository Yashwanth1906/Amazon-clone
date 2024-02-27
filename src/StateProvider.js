import React,{createContext,useContext,useReducer} from "react";
export const StateContext = createContext();     //preapares the dataLayer
export const StateProvider=({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>);       // wrap the app and provide the data layer
export const useStateValue = () => useContext(StateContext);   //pull information from the data layer