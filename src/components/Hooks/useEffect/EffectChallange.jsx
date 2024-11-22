 import { useEffect, useState } from "react"
import "./EffectChallange.css"
  export const Challange = ()=> {
    const [ count , setCount] = useState(0)
    const [name , setName] = useState("usman")
useEffect (()=> {
     console.log(name);
     
},[name])
useEffect (()=> {
    document.title = ` count ${count}`
},[count])

    return (

        <div className="container">

         <h1>Use Effect Challange</h1>
         <p>
         count : <span> {count} </span>
         </p>
         <button onClick={()=> setCount (count + 1)}> Incriment</button>

         <p>
            Name : <span> {name} </span>
         </p>
         <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
    )
  }