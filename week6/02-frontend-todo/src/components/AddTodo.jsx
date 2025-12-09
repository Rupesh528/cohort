import { useState } from "react";

export function AddTodo({onAdd}){
    
    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");

    function adder(){
        // e?.preventDefault();
         const ele = {
            title: title.trim(),
            desc: desc.trim(),
        }
        onAdd(ele); 
      
    }

    return(
        <div>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></input>
            <button onClick={adder} >click me</button>
        </div>
    );
}