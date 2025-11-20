import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "sdf",
      desc: "go to hym",
    },
    {
      title: "sdf",
      desc: "go to hym",
    },
  ]);

  function addTodo() {
    const ele = {
      title: title,
      desc: desc,
    };
    setTodos([...todos, ele]);
  }

  //maps are used to iterate over array, unlike for loop
  // conditional rendereing are used as if else statement, a == 1?"Asd":"asdf"
  const [title, setTitle] = useState(" ");
  const [desc, setDesc] = useState(" ");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter the title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="enter the desc"
          onChange={(e) => setDesc(e.target.value)}
        ></input>

        <button onClick={addTodo}> click me to add new one</button>
        <h1>hey there</h1>
        {todos.map(function (todo) {
          return (
            <div>
              <h1>{todo.title}</h1>
              <h1>{todo.desc}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
