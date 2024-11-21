import { useState } from "react"
import "./hook.css"
export const Counter = () => {
const [count , setCount] = useState(0)
    return (
        <div>

            <h1 className="hook-heading">Use state Hook</h1>
            <br />
            <p className="hook-para">{count}</p>
            <button className="hook-btn" onClick={()=> setCount (count + 1)}> Incriment</button>
        </div>
    )
}