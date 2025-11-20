import { useState } from 'react'


// passing component as para to another component
// there is one method , ugly way , second one is correct way (wrapper2)

function App() {
  return(<div>
    <CardWrapper innerComponent = {<TextComponent/>} />
    <CardWrapper innerComponent = {<TextComponent/>} />

    {"below is the correct way"}

    <CardWrapper2>
        hi there2
    </CardWrapper2>

    {"u can pass another component as wells"}

    <CardWrapper2>
        <AnotherTextComponent />
    </CardWrapper2>

    {"this is nested component being wrapped"}
     <CardWrapper2>
        <CardWrapper2>
          <AnotherTextComponent />
        </CardWrapper2>
     </CardWrapper2>
   

  </div>);
}

 
function TextComponent(){
  return (
      <div>
        hi there!
      </div>
    )
}

function CardWrapper({innerComponent}){
    return(
      <div style={{border:"2px solid black",padding:20}}>
          {innerComponent}
      </div>
    );
}

function CardWrapper2({children}){
    return(
      <div style={{border:"2px solid red", padding:20}}>
          {children}
      </div>
    );
}



function AnotherTextComponent(){
    return(
        <div>hi from another component</div>
    );
}


export default App
