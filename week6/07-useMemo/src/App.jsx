import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const [num, setNum] = useState(0)
  const [counter, setCounter] = useState(1)
  // const [finalvalue,finalSetter] = useState(1)


 
  // useEffect(()=>{
  //     for(let i = 1; i <= num; i++){
  //       sum += i;
  //     }
  //     finalSetter(sum);
  // },[num])         //this doesn't work because sum is not a state variable, useEffect only re-render on state variable
              //ofcourse u can use third state variable, which will work as expected. but with extra state var.
    //to fix the above issue useMemo was introduced

  let sum = useMemo(()=>{
      let yo = 0;
      for(let i = 1; i <= num; i++){
        yo += i;
      }
      return yo;    //this returns
  },[num])

  return (
    <>
      <input onChange={(e)=>{setNum(e.target.value)}}/>

      {/* <p>sum from 1 to {num} is {finalvalue}</p> */}
      <p>sum from 1 to {num} is {sum}</p>

      <button onClick={(e)=>{setCounter(counter+1)}}>counter {counter}</button>
    </>
  )
}

export default App
