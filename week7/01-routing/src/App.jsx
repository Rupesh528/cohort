import React, { lazy } from "react";
import { BrowserRouter, Routes, Route ,useNavigate} from 'react-router-dom'

// import { Dashboard } from './components/Dashboard'
//if u add default before export in component it means u using it as below
// import  Dashboard  from './components/Dashboard'

// above step is important for lazy to work

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));



function App() {
  
  
  return (
    <div>
      {/* <div>
          <button onClick={()=>{window.location.href = "/"}}> Landing </button>
          <button onClick={()=>{window.location.href = "/Dashboard"}}> Dashboard </button>  
          </div> */}
           
      {/* this is wrong way for navigation cause it uses manually routing,i.e it reloads the page */}

        {/* useNavigate fix this issue but it needs to present inside browserroute so new Appbar is created*/}
   
      <BrowserRouter>
          <Appbar/>
          <Routes>
              <Route path="/Dashboard" element={<Dashboard/>} ></Route>
              <Route path="/" element={<Landing/>} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
      const navigate = useNavigate();

      return <div>
          <button onClick={()=>{  navigate("/")}}> Landing </button>
          <button onClick={()=>{  navigate("/Dashboard")}}> Dashboard </button>  
      </div>
}

export default App


