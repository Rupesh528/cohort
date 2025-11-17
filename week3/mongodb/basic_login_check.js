const express  = require('express');
const app = express();
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sahanirupesh528:R7geuELet2HmWTkm@cluster0.xcxjabr.mongodb.net/cohort");   //here cohort is dbname
const User = new mongoose.model('user',{   //here user is table name
    name: String,
    password: String
})



app.post('/login',async (req,res)=>{
    const username = req.body.name;
    const password = req.body.password; 
    
    const ans = await User.findOne({name : username});

    if(ans){
        return res.status(400).send("username already exist");
    }

    const user1 = new User({
        name : username,
        password: password,
    })

    user1.save();
    return res.send("User registered");
})


app.listen(3000);