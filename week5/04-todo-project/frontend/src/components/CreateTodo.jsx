import { useState } from "react"
import { use } from "react"

export function CreateTodo() {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
  return (

    <div>

      <input style={{ padding: 10, margin: 10 }} type="text"placeholder="title" onChange={function(e){setTitle(e.target.value)}}/><br />
      <input style={{ padding: 10, margin: 10 }} type="text" placeholder="desc" onChange={function(e){setDesc(e.target.value)}}/><br />
      
      {"this is how to send body request to backend for post wihtout axios"}
      <button style={{ padding: 10, margin: 10 }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    desc:desc
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo added");
            })
      }}>add a todo</button>

    </div>
  );
}
