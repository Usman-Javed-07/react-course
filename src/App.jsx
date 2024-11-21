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
 import { ShortCircuitExample  } from "./components/Hooks/shortCircuit"
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

     {/* <State/> */}
     {/* <DerivedState/> */}
     {/* <LiftState/> */}
    {/* <ToggleSwitch/> */}
    <ShortCircuitExample/>
    {/* <Header/> */}
 {/* </React.Fragment> */}

 </>
  )
}

