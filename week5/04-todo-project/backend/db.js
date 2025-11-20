const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sahanirupesh528:R7geuELet2HmWTkm@cluster0.xcxjabr.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  desc: String,
  completed: Boolean,

  // completed {
  //        type:Boolean,
  //        default : False
  //}
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
