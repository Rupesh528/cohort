import { useContext } from 'react'
import { useState } from 'react'
import {CountContext} from "./context";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>    {/* it takes one extra level to pass down the state variable */}
      </CountContext.Provider>
    </>                                           
  )
}
                                                {/* to fix this use Context api was introduced */}
function Count({setCount}){
    return<div>
      <CountRendered/>
      <Button setCount={setCount}/>
    </div>
}

function CountRendered(){
  const count = useContext(CountContext);
  return <div>
     {count}
  </div>
}

function Button({ setCount }) {
  const count = useContext(CountContext);  // get count from context

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}


export default App
