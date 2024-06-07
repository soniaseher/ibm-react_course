import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  
  // Add the handlesubmit code here
  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value;
    const newTodo = {
        id: new Date().getTime(),
        text: todo.trim(),
        completed: false,
    };

    if(newTodo.text.length > 0) {
        setTodos([...todos].concat(newTodo));
    } else {
        alert("Enter Valid Task");
    }

    document.getElementById('todoAdd').value= "";
  }
  
  // Add the deleteToDo code here
function deleteTodo(id) {
    let uodatedTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(uodatedTodo);
}
  
  // Add the toggleComplete code here
function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
        if(todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    setTodos(updatedTodos);
}
  
  // Add the submitEdits code here

  
return(
<div className ="App" id="todo-list">
<h1>Todo List</h1>
<form onSubmit={handleSubmit}>
<input type ="text" align ="right" id= 'todoAdd' placeholder="Add a new task"/>
<button type ="submit">Add Todo</button>
</form>
{todos.map((todo) =>
   <div className="todo" key={todo.id}>
       <div className="todo-div">
       <div className="todo-text">{todo.text}</div>
       <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/></div>
       
       <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      
   </div>)}
</div>
);
};
export default App;
