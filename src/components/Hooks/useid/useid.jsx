import { useId, useRef } from "react"

 export const UseId = ()=> {

    const username = useRef(null)
    const password = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username.current.value);
        console.log(password.current.value);
    }

    const userNameId= useId()
    const userPassword = useId()
    const usernameid = useId()
    return (
        <form onSubmit={handleSubmit}>
         <label htmlFor={userNameId}></label>

        <input type="text" id={usernameid} ref={username} />
        <input type="password" id={userPassword}  ref={password}/>
        <button>Register</button>
    </form>
    )
 }