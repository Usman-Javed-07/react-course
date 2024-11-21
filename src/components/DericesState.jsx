
// import { useState } from "react";

// export const DerivedState = ()=> {
//     const [user , setUser] = useState([
//         { name : "Alica" , age : 23 },
//         { name : "Bob"   , age : 12 },
//         { name : "saad"  , age : 43 },
//         { name : "elsa"  , age : 15 },
//         { name : "amna"  , age : 55 },
//      ])
//     // derived stated 
//     console.log(user)
//     const userCount = user.length
//     // avarage age
//     const avarageAge = user.reduce ((accum , curElem ) => accum + curElem.age,0)/userCount

//     return (
//         <div className="main-div">
//           <h1>Users list</h1>
//           <ul>
//          {user.map((Elem , index)=> {
//             return (
//                 <li key={index}>
//                     {Elem.name} - {Elem.age} year old
//                 </li>
//             )
//          })}

//           </ul>
//           <p>Total User : {userCount}</p>
//           <p>AvarageAge : {avarageAge}</p>
//         </div>
//     )
// }