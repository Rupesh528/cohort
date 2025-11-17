const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sahanirupesh528:R7geuELet2HmWTkm@cluster0.xcxjabr.mongodb.net/cohort");


//describve  the model

const user = new mongoose.model('user',{
    name: String,
    password: String
})

const user1 = new user({
    name:"RUPESH",
    password:"werwe"
})

user1.save();