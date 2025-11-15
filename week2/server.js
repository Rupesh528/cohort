const express = require('express');
const app = express();

app.use(express.json());
const database = [{
    name : "john cena",
    kidneys: [{
        healthy : false
    }]
}]


app.get('/',(req,res)=>{
    const data = database[0].kidneys;
    let total = data.length;
   
    let healthy = 0;
    // console.log(data[0].);
    for(let i = 0; i < data.length; i++){
        if(data[i].healthy){
            healthy = healthy + 1;
        }
    }
    let fuck = total-healthy;
    res.json({
        total,
        healthy,
        fuck
    });
})


app.post('/',(req,res)=>{
    let data = req.body.ishealthy;
data = data === true || data === "true";

    database[0].kidneys.push({healthy:data});
    res.json({
        msg : "done"
    });
})

app.listen(3000,()=>{
    console.log("listening to 3000");
});