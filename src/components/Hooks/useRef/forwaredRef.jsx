import { useId, useRef } from "react"
import "./useref.css" 

export const ForwardRef = ()=> {

    const username = useRef(null)
    const password = useRef(null)
      const handlesubmit = (e)=> {
        e.preventDefault()
        console.log(username.current.value , password.current.value);
        

      }

    return (
        <form onSubmit={handlesubmit}>

            <BeforeReact19 type="text" label="username" id="username"  ref={username}/>
            <BeforeReact19  type="password" label="password" id="password" ref={password}/>
            <button>register</button>
        </form>
    )

}

//  getting parent data 


const BeforeReact19  = (props)=> {
   const id = useId()

   return (
    <div>

        <label htmlFor={id}>{props.label}</label>
        <input type="text"ref={props.ref} />
    </div>
   )
}