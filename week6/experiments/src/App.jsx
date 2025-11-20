import { useState } from 'react'

function App() {

  //this code is one solution to re-render problem
  //that causes the whole app to rerender
  //to fix this define the state in the leave node or the component in which it
  //supposed to be used     (see this using react developers tool)
  
   //other solution is React.Memo  (its in App2.jsx, also update the main.jsx)

  return (
    <div>
      <HeaderWithoutButton/>
      <Headers title={"something"}></Headers>
      <Headers title={"Rupesh123"}></Headers>
    </div>
  )
  
  function HeaderWithoutButton(){
    const [name, setName] = useState("Rupesh")
    return(
      <div>
        <button onClick={()=>setName(Math.random())}>Click me</button>
        <p> name is ={name}</p>
      </div>
    );
  }

  function Headers({title}){
      return(
      <div>
        <p> name is {title}</p>
      </div>
    );
  }
}





export default App
