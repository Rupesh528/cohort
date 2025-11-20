import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const[todos,setTodos] = useState([]);

  //below won't work because of infinite loop of re-rendering

  // fetch("http://localhost:3000/todos")
  //   .then(async function(res){
  //       const json = await res.json();
  //       setTodos(json.todos)
  //   })
  
  //failing due to above reason : one solution is to use useEffect

  /*  
    useEffect runs only once when the component mounts 
    (because dependency array is empty).

    This prevents infinite re-rendering.

    Axios handles JSON parsing automatically, 
    so res.data contains the parsed body.
  */
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log("Error fetching todos:", err);
      });
  }, []); // empty array → run once

  return (
    <div>
      <CreateTodo> </CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
