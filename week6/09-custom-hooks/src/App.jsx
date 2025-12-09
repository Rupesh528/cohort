import { useState,useEffect } from 'react'
import axios from 'axios';

function useTodos(){
     const [todos, setTodos] = useState([])

     useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/`)
          .then(function(res){
              console.log(res);
              setTodos((res.data));
          })
    },[])
    return todos;
}



function App() {

  const todos = useTodos();
  return (
    <>
         {todos.map(todo => (
        <div key={todo.id}>
          {todo.title}
        </div>
      ))} 
    </>
  )
}

export default App
