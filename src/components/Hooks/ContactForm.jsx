
import { useState } from "react"
import "./ContactForm.css"

export const ContactForm = () => {
    const [ username , setUsername] = useState("")
    const [ password , setPassword] = useState("")
    const [ message , setMessage] = useState ("")
const  handleInputChange = (e) => {
    const { name , value } = e.target
        switch (name) {
            case "username":
            setUsername (value)
            break;
            case "password" :
                setPassword(value)
                break
                case "message":
                    setMessage(value)
                    break
        }
}
const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = {
        username,
         password,
         message
    }
    console.log(formData);
    
}

  return (

    <div className="container">
        <div className="card">
            <h1>Contact Form</h1>
    <form onSubmit={handleFormSubmit}>

        <label htmlFor="username">username</label>
        <input type="text" name="username" required autoComplete="off" onChange={ handleInputChange}/>

        <label htmlFor="password">password</label>
        <input type="password" name="password" required autoComplete="off" onChange={ handleInputChange}/>

        <label htmlFor="message">message</label>
        <textarea type="password" name="message" required autoComplete="off" onChange={ handleInputChange}></textarea>

        <button type="submit"> send message</button>

    </form>
        </div>

    </div>
  )
}