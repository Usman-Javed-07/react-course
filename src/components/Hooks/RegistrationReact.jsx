import { useState } from "react"
import "./index.css"
// import { password } from "bun"


export const RegistrationFromReact = () => {

    const [user , setuser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    })


    const handleInputChange = (e) => {
         const {name , value} = e.target

       setuser((prev)=> ({...prev, [name]:value}))
    }

    const handleFormSubmit = (event)=> {
        event.preventDefault()
      const formData = {
        // firstName,
        // lastName, 
        // email,
        // password,
        // phoneNumber,
      }
      console.log(user);
      
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
         <input type="text" name="firstName" placeholder="enter first name" required value={user.firstName} onChange={handleInputChange}/>
   {/*  */}

   
   <label htmlFor="lastName">
         <b>Last name</b>
         </label>
         <input type="text" name="lastName" placeholder="enter last name" required value={user.lastName} onChange={handleInputChange}/>

         <label htmlFor="email">
         <b>Email</b>
         </label>
         <input type="email" name="email" placeholder="enter email address" required value={user.email} onChange={handleInputChange}/>

         <label htmlFor="password">
         <b>Password</b>
         </label>
         <input type="password" name="password" placeholder="enter password" required value={user.password} onChange={handleInputChange}/>

         <label htmlFor="number">
         <b>Phone Number</b>
         </label>
         <input type="number" name="phoneNumber" placeholder="enter Phone Number" required value={user.phoneNumber} onChange={handleInputChange}/>

         <button> submit</button>
    </div>
    </form>

    <section className="summary">
       <p>Hello my name is <span> {user.firstName} {user.lastName}</span> . my email address is <span>{user.email} </span> . my phone number is <span>{user.phoneNumber}</span> </p>

    </section>
    </>
)

}