import { useRef } from 'react'

function App() {

  // useRef creates a reference object
  // inputRef.current will point to the actual input element
  const inputRef = useRef()           // notice : variable naming imp, inputRef will focus on input
                                      //so it for div
 
  function handleFocus() {
    // inputRef.current gives direct access to the DOM element
    inputRef.current.focus()
  }

  return (
    <>
      <input 
        type="text" 
        ref={inputRef}              /* assigning the ref to the input */
        placeholder="Click button to focus me"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </>
  )
}

export default App
