// import "./components/netflix.css"
// import "./components/Netflix.module.css"
// import   NetflixSeris, {Footer} from "./components/NetflixSeries"
// import {EventHandling} from "./components/EventHandling"
// import {State} from "./components/Hooks/state"
// import React from "react"
// import {DerivedState} from './components/DericesState'
// import React from "react"
// import { LiftState } from "./components/liftStateUp"
// import { ToggleSwitch  } from "./projects/ToggleSwitch/ToggleSwitch"
// import { Todo } from "./projects/Todo/todo"
//  import { ShortCircuitExample  } from "./components/Hooks/shortCircuit"
// import { Counter } from "./components/Hooks/index"

// import { RegistrationFrom } from "./components/Hooks/Registration"
// import { RegistrationFromReact } from "./components/Hooks/RegistrationReact"
// import { LoginForm  } from "./components/Hooks/LoginForm"
//  import { ReactUseEffect } from "./components/Hooks/useEffect/index"

// import {Challange } from "./components/Hooks/useEffect/EffectChallange"

// import { Clean  } from "./components/Hooks/useEffect/cleanUp"

// import { HowToFetchApi }  from "./components/Hooks/useEffect/HowToFetchApiData"

// import { UseRef  } from "./components/Hooks/useRef/useref"
// import { ForwardRef   } from "./components/Hooks/useRef/forwaredRef"

// import { UseId } from "./components/Hooks/useid/useid"
// import {  PropDrilling  } from "./components/propDrilling"
// import { BioProvider } from "./components/contextApi/index"
// import { Home } from "./components/contextApi/Home"

// import { ContactForm } from "./components/Hooks/ContactForm"
import { DarkLight, ThemeProvider } from "./components/contextApi/DarkLight"


// export const App = ()=>{
//   return React.createElement('h1', null, "Hello . welcome to react course") 
// }


export const App = ()=> {
  return (
    <> 
    {/* <React.Fragment> use this <> insted of using react-fragments */}
 <section className="container">
  {/* <h1 className="cart-heading">best netflix series cart</h1> */}
     {/* <NetflixSeris/> */}
    </section> 
     {/* <Footer/> */}
     {/* <EventHandling /> */}
   {/* <section>{<Todo/>}</section> */}

    {/* <Counter/> */}
      
       {/* <Challange/> */}

       {/* <Clean /> */}

      {/* <HowToFetchApi/> */}
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <UseId/> */}
      {/* < PropDrilling /> */}
      {/* <BioProvider> 
         <Home/>
         </BioProvider> */}
  <ThemeProvider>
   <DarkLight/>
  </ThemeProvider>


  {/* <ReactUseEffect/> */}
     {/* <ContactForm/> */}
     {/* <LoginForm /> */}
  {/* <RegistrationFromReact/> */}
    {/* <RegistrationFrom/> */}
     {/* <State/> */}
     {/* <DerivedState/> */}
     {/* <LiftState/> */}
    {/* <ToggleSwitch/> */}
    {/* <ShortCircuitExample/> */}
    {/* <Header/> */}
 {/* </React.Fragment> */}

 </>
  )
}

