import { useState } from 'react'
import { Todo } from './components/Todo'
import { AddTodo } from './components/AddTodo'

function App() {
  
    const [todos, setTodos] = useState([{
      id:1,
      title:"go to gym",
      desc:"from 9 to 5"
    },{
      id:2,
      title:"go to gym",
      desc:"from 9 to 5"
    }])

    function handleAdd(newTodo){
    setTodos([...todos, newTodo])
  }
 
  return (
    <>
        <AddTodo onAdd={handleAdd} />
        <Todo todos={todos}></Todo>
    </>
  )
}

export default App
