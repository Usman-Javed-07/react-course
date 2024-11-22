import { useState } from "react"
import "./hook.css"
// export const Counter = () => {
// const [count , setCount] = useState(0)

// const incriment = ()=> {
//     if(count < 100) {
//         setCount(count + 1)
//     }
// }
// const decriment =() => {
//     if(count > 0) {
//         setCount (count - 1)
//     }
// }
// const reset = () => {
//     setCount (0)
// }
//     return (
//         <div>

//             <h1 className="hook-heading">Use state Hook</h1>
//             <br />
//             <p className="hook-para">{count}</p>
//             <button className="hook-btn" onClick={()=> setCount (incriment)}> Incriment</button>
//             <button className="hook-btn" onClick={()=> setCount (decriment )}> Decriment</button>
//             <button className="hook-btn" onClick={()=> setCount (reset)}> Reset</button>
//         </div>
//     )
// }

// 




export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // Default step value is 1

  const increment = () => {
    if (count + step <= 100) {
      setCount(count + step);
    } else {
      setCount(100); // Ensure it doesn't exceed 100
    }
  };

  const decrement = () => {
    if (count - step >= 0) {
      setCount(count - step);
    } else {
      setCount(0); // Ensure it doesn't go below 0
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(value > 0 ? value : 1); // Step must be a positive number
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <label>
          Step Value:{" "}
          <input
            type="number"
            value={step}
            min="1"
            onChange={handleStepChange}
          />
        </label>
      </div>
      <button className="hook-btn" onClick={increment}>
        Increment
      </button>
      <button className="hook-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="hook-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
