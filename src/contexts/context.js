import { createContext,useContext,useState } from "react";

const MainContext = createContext();


export const ContextProvider = ({children}) => {
    const [selectedCategory,setSelectedCategory] = useState('New')
    return (
    <MainContext.Provider value={{selectedCategory,setSelectedCategory}}>
        {children}
    </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);