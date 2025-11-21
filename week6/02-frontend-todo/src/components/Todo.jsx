 export function Todo ({todos}){
    return(
        <div>
            {todos.map(function(todos){
                return(<div><p>title : {todos.title}</p>
                    <p>desc : {todos.desc}</p>
                </div>);
            })}
        </div>
    );
 }