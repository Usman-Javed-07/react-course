// import { password } from "bun";
import "./useref.css"
import { useRef } from "react";
 export const UseRef = () => {

    const username = useRef(null)
    const password = useRef(null)

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(username.current.value);
      console.log(password.current.value);
      
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" id="username" ref={username} />
            <input type="password" id="password"  ref={password}/>
            <button>Register</button>
        </form>
    )
 }