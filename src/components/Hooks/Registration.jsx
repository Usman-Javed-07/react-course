import { useState } from "react"
import "./index.css"


export const RegistrationFrom = () => {

    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleInputChange = (e) => {
         const {name , value} = e.target

         switch(name) {
            case "firstName":   
         setFirstName (value)
         break;

         case "lastName":   
         setLastName (value)
         break

         case "email": 
         setEmail (value)
         break

         case "password": 
         setPassword (value)
         break

         case "phoneNumber":
            setPhoneNumber (value)
            break
         }
    }

    const handleFormSubmit = (event)=> {
        event.preventDefault()
      const formData = {
        firstName,
        lastName, 
        email,
        password,
        phoneNumber
      }
      console.log(formData);
      
    }

return (
    <>
    <form onSubmit={handleFormSubmit}>

    <div className=" container">

        <h1>Sign Up </h1>
        <p>Please fill in the form to sign up</p>

         <label htmlFor="firstName">
         <b>First name</b>
         </label>
         <input type="text" name="firstName" placeholder="enter first name" required value={firstName} onChange={handleInputChange}/>
   {/*  */}

   
   <label htmlFor="lastName">
         <b>Last name</b>
         </label>
         <input type="text" name="lastName" placeholder="enter last name" required value={lastName} onChange={handleInputChange}/>

         <label htmlFor="email">
         <b>Email</b>
         </label>
         <input type="email" name="email" placeholder="enter email address" required value={email} onChange={handleInputChange}/>

         <label htmlFor="password">
         <b>Password</b>
         </label>
         <input type="password" name="password" placeholder="enter password" required value={password} onChange={handleInputChange}/>

         <label htmlFor="number">
         <b>Phone Number</b>
         </label>
         <input type="number" name="phoneNumber" placeholder="enter Phone Number" required value={phoneNumber} onChange={handleInputChange}/>

         <button> submit</button>
    </div>
    </form>

    <section className="summary">
       <p>Hello my name is <span> {firstName} {lastName}</span> . my email address is <span>{email} </span> . my phone number is <span>{phoneNumber}</span> </p>

    </section>
    </>
)

}