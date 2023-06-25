import { createContext,useContext,useState } from "react";

const MainContext = createContext();


export const ContextProvider = ({children}) => {
    
    return (
    <MainContext.Provider>
        {children}
    </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);