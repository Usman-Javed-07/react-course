// import { useState } from "react"
// import "./ToggleSwitch.css"
// import { IoIosSwitch } from "react-icons/io";


// export const ToggleSwitch = () => {
  
//  const [isOn , setIsOn] = useState(true)
//  const handleToggleSwitch = () => {
//     setIsOn (!isOn)
//    } 
//  const checkIsOn = isOn ? "ON" : "OFF"
//  const toggleBgColor = { backgroundColor: isOn ?"#4caf50" : "red"}

//     return (
//         <>
//         <h1>hellow <IoIosSwitch /></h1>
//         <div className="toggle-switch" style={toggleBgColor} onClick={handleToggleSwitch}>

//             <div className={`switch ${checkIsOn}`}>
//                 <span className="switch state">{checkIsOn}</span>
//             </div>
//         </div>
//         </>
//     )
// }