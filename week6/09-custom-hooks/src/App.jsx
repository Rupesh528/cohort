import { useState } from 'react'


function useTodos(){
     const [todos, setTodos] = useState(0)

     useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/`)
          .then(function(res){
              console.log(res);
              setTodos((res.data));
          })
    },[])
}



function App() {

  const todos = useTodos();
  return (
    <>
          {todos}  
    </>
  )
}

export default App
