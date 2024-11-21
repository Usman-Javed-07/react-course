import { useState } from "react"
import "./todo.css"
import { MdCheck} from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

export const Todo = () => {
    const [inputValue , setInputValue] = useState("")
    const [task , setTask] = useState([])
    const [dateTime , setDateTime] = useState("")

   const  handleInputChange = (value)=> {
        setInputValue(value)
        
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if(!inputValue) return
         if(task.includes(inputValue))  { setInputValue("")
             return
         }
        setTask ((prevTask)=> [...prevTask , inputValue])
        setInputValue("")
    }
//  data and time
  setInterval(() => {
        const now = new Date()
        const formatedDate = now.toLocaleDateString()
        const formatedTime = now.toLocaleTimeString()

        setDateTime (`${formatedDate} - ${formatedTime}`)
    }, 1000);

   const handleDeleteTodo = (value)=> {
    const updatedTask = task.filter((curTask)=> curTask !== value)
    setTask(updatedTask)
   }
   const handleClearTodo = ()=> {
    setTask([])
   }
    return (

        <section className="todo-container">
      <header>
        <h1> Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
        
      </header>
       <section className="form"> 
       <form onSubmit={handleFormSubmit}>

        <div>
            <input type="text"className="todo-input" autoComplete="off" value={inputValue} onChange={(event)=> handleInputChange (event.target.value)} />
        </div>
        <div>
            <button type="submit" className="todo-btn"> Add Task</button>
        </div>
       </form>
       </section>
          
          <section className="myUnOrdList">
               <ul>
                {
                    task.map((curTask , index)=> {
                        return <li key={index} className="todo-item">

                          <span>{curTask}</span>
                          <button className="check-btn"><MdCheck /></button>
                          <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}>
                          <AiTwotoneDelete /></button>
                        </li>
                    })
                }
               </ul>

          </section>
       <section>
        <button className="clear-btn" onClick={()=> handleClearTodo()}>clear all</button>
       </section>

        </section>
    )
}


