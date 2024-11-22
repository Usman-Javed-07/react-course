
import { useState } from "react"
import "./loginForm.css"
export const LoginForm = ()=> {

    const [username , setUsername] = useState("")
    const [ login , setLogin] = useState("")

    const handleInputChange = (e)=> {
        const { name , value } = e.target
        switch (name) {
            case "username":
            setUsername (value)
            break;
            case "password" :
                setLogin(value)
                break
        }

    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formData = {
            username, login
        }
        console.log(formData);
        
    }

 return (

    <div className=" container">
        <div className="card">
         <h1> Login Form</h1>

         <form onSubmit={handleFormSubmit}>

            <label htmlFor="username">Username</label>
            <input type="text" name="username" required autoComplete="off"  onChange={ handleInputChange}/>

            <label htmlFor="password">password</label>
            <input type="password" name="password" required autoComplete="off"  onChange={ handleInputChange} />

            <button type="submit">Login</button>
         </form>
        </div>

    </div>
 )
    
}