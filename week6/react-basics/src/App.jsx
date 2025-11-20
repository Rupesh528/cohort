import { useState } from 'react'

let counter = 4;

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

    function addTodo(){
        const ele = {
          id : counter++,
          title : " something",
          desc : "dsomet"
        }
        setTodos([...todos,ele])
    }
 
  return (
    <>
        <button onClick={addTodo}>click me</button>
        {todos.map(function(todo){
            return (<Todo key={todo.id} todo={todo} />);
        })}
    </>
  )
}


function Todo({todo}){
  return(<div>
    <p>title: {todo.title}</p>
    <p>title: {todo.desc}</p>
  </div>);
}

export default App
