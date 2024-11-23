import { createContext } from "react";

export const BioContext = createContext()

export const BioProvider = ({children}) => {
    const myName = "Abdul Haseeb"
    const  myAge = 8
    console.log(children);
    return <BioContext.Provider value={{ myName , myAge}}> {children} </BioContext.Provider>
    
}