
import { useEffect, useState } from "react"
import "./cleanUp.css"

export const Clean = () => {
    const [count , setCount] = useState(0)

useEffect(()=> {
   const timer = setInterval(() => {
             setCount((prev) => prev + 1)
   }, 1000);
   return ()=> clearInterval(timer)
}, [])

    return (
        <div className="container">

            <div className="counter">

                <p>my subscribers on youtube</p>
                <div className="odometer" id="odometer">
                     {count}
                </div>
                <h3 className="title">
                    subscribers <br /> real time counter
                </h3>
            </div>
        </div>

    )
}