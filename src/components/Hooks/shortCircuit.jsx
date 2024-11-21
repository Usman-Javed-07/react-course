import { useState } from "react"
import "./hook.css"

  export const ShortCircuitExample = ()=> {
    const [isLogedIn , setIsLogedIn] = useState(true)
    const [user , setUser] = useState()
    return (

        <section className="container short-container">
            <h1>welcome to the short circuit evulation !</h1>
         { isLogedIn && <p>you are logged in </p> }
         { user ? ` hello ${user}`: "plz login "}
        <div className="grid-three-col">
          <button onClick={()=> setIsLogedIn(!isLogedIn)}>Toggle Login State</button>
          <button onClick={()=> setUser ("usman")}>Set User</button>
          <button onClick={()=> setUser("")}>Clear User</button>
        </div>

        </section>
    )
  
}
// export default ShortCircuitExample;