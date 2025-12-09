
import { useState } from 'react'
import './App.css'

function App() {

  const[todo,setTodo] = useState({
    title:"this",
    description:"something"
    })

  return (
    <>
        <Todo todo={todo}/>
    </>
  )
}


interface TodoType {
  title: string;
  description: string;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    
  </div>
}
export default App
