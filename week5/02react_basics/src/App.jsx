import { useState } from "react";

function App() {
  let a = 1;
  a++;
  a += 1; //this wont be tracked for change because its not a state,

  const [count, setCount] = useState(0);

  return (
    <>
      <h3>a = {a}</h3>
      <CustomButtom count={count} setCount={setCount}></CustomButtom>
    </>
  );
}

// below you are passing props as state, so any change will make it to rerender
function CustomButtom(props) {
  function onClickhandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickhandler}>count {props.count}</button>;
}

export default App;
