import { useContext } from "react"
import { BioContext } from "."

export const Home = () => {

    const {myName , myAge} = useContext(BioContext)
    return <h1>Hello context Api my name is {myName} and i am {myAge} years old</h1>
}