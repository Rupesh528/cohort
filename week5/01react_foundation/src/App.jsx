import { useState } from 'react'

import './App.css'

// let state = {
//   count: 0
// }

function App() {
 
  // function onclickhandler(){
  //   state.count  = state.count + 1;  //this is increasing the count, but not rendering it
  //   console.log(state.count);   // react wont update the state, becoz has its own way to declare state
  // }

  const[count,setCount] = useState(0);

  function onclickhandler(){
      setCount(count+1);
  }

  return (
    <>

        <button onClick={onclickhandler}>
          Counter {count}
        </button>
  
    </>
  )
}

export default App
