import { useState,useEffect } from 'react'
import  axios  from "axios"

function App() {

  const [id,setId] = useState(1)

  return (
    <>
      <button value={1} onClick={(e) => setId(parseInt(e.target.value))}>1</button>
      <button value={2} onClick={(e) => setId(Number(e.target.value))}>2</button>
      <button value={3} onClick={(e) => setId(Number(e.target.value))}>3</button>

      <Todo id = {id}/>
    </>
  )
}

function Todo({id}){

    const [todos, setTodos] = useState(0)

     useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(function(res){
              console.log(res);
              setTodos((res.data));
          })
    },[id])

      return(<div>
            {id}<br/>
            <h2>{todos.title}</h2>
            <h2>{todos.complete?"done":"not done"}</h2>
      </div>); 
}

export default App
