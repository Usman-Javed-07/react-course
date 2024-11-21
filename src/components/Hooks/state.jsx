import { useState } from "react";
import "../ev.css"
export const State = ()=> {
   

    const [count , setCount] = useState(0)
    const HandleButton = ()=> {
          
          setCount(()=> count + 1)
    }

return (
    <>
    <section className="section-main">
        <h1>{count}</h1>
    <button onClick={HandleButton}>Incriment</button>
    </section>
  </>
)
}