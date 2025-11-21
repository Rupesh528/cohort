import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(0)

  useEffect(()=>{
      setInterval(fetch("server")
            .then(res => res.json())
        .then(data => {
          setTodos(data.todos);
        }),10000)
        
      },[]);

  return (
    <>
      {todos}
    </>
  )
}

export default App
