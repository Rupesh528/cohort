const express = require('express');
const zod = require("zod");
const app = express();

//schema to define how validations are done
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/",(req,res)=>{ 
    //kidneys expect arrays of numbers
    const kidneys = req.body.kidneys;
    //validation using zod

    const response = schema.safeParse(kidneys);
    // const kidneylength = kidneys.length;
    // console.log(kidneys);


    //optional
    if(!response.success){
        res.status(411).json({
            msg : "fucking input is wrong,it must be an array"
        })
    }else{
        res.send({
            response
        })
    }

    res.send({response});


    
});

// app.get("/", (req, res) => {
//     res.send("Server is working! Use POST to send kidneys data.");
// });


app.listen(3000,()=>{
    console.log("listening");
})