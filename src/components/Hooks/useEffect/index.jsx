 
 import { useEffect } from "react"
import "./index.css"
 export const ReactUseEffect = ()=> {
   
  useEffect (() => {
console.log("hello use effect");

  }, [])

    return (
        <div className="heading">
         <h1>Hello , UseEffect</h1>
        </div>
    )
 }