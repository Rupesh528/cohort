import { useCallback } from 'react';
import { useState, memo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  const inputfunction = useCallback(function(){
      console.log("hi there!2");
  },[]);  

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>
        count is {count}
      </button>

      <Demo a={inputfunction} />       {/* passing a function as prop */}
    </>
  )
}

/*
    below function has memo, but still it re-renders due to referencial equality  
    let a = 1;
    let b = 1;
     a == b   true , but its not same for function 
     const a = ()=>{"hi there"}
     const b = ()=>{"hi there"}

     a == b    False, even though its same, so it causes to re-render in child component
                to fix this callBack was introduced  , so it memoises function
          
*/
const Demo = memo(function Demo({ a }) { 
  console.log("rerender")
  return (
    <div>
      hi there {a}
    </div>
  )
})

export default App
