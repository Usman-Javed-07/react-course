// import {  useReducer } from "react";

// export const UseReducrerComp = ()=> {
//     const reducer = (state , action) => {
//         console.log(action , state);
//         if (action.type === "incriment") {
//             return state +3
//         }
//         if (action.type === "decriment") {
//             return state -3
//         }
//         if (action.type === "reset") {
//             return state = 0
//         }

//     }
//     const [count , dispatch] = useReducer(reducer , 0)

//     return (
//        <div>
//            <h1> {count}</h1>
//            <button onClick={()=> dispatch({type:"incriment"})}>Incriment</button>
//            <button onClick={()=> dispatch({type:"decriment"})}>Decriment</button>
//            <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
//        </div>
//     )
//  }


// best way 


import {  useReducer } from "react";

export const UseReducrerComp = ()=> {

    const initalState = {
        count : 0

    }
    const reducer = (state , action) => {
        console.log(action , state);
     
        switch (action.type) {
            case "incriment":
                return {count : state.count + 1}
                case "decriment":
                return {count : state.count - 1}  
                case "reset":
                    return {count : 0}  
        
            default:
                return state;
        }

    }
    const [state , dispatch] = useReducer(reducer , initalState)

    return (
       <div>
           <h1> {state.count}</h1>
           <button onClick={()=> dispatch({type:"incriment"})}>Incriment</button>
           <button onClick={()=> dispatch({type:"decriment"})}>Decriment</button>
           <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
       </div>
    )
 }



