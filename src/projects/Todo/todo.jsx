import "./todo.css"

export const Todo = () => {
    return (

        <section className="todo-container">
      <header>
        <h1> Todo List</h1>
      </header>
       <section className="form"> 
       <form>

        <div>
            <input type="text"className="todo-input" autoComplete="off" />
        </div>
        <div>
            <button type="submit" className="todo-btn"> clear all</button>
        </div>
       </form>

       </section>

        </section>
    )
}