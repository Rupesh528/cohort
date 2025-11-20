const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const PORT = 3000;

const { todo } = require("./db");
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.post("/todos", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);

  //   console.log(parsedPayLoad.data);

  if (!parsedPayLoad.success) {
    res.status(401).json({
      msg: "you send the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: parsedPayLoad.data.title,
    desc: parsedPayLoad.data.desc,
    completed: false,
  });

  res.json({
    msg: "created todo",
  });
});

app.get("/todos", async (req, res) => {
  const data = await todo.find({});
  res.json({
    todos: data,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(401).json({
      msg: "you send the wrong inputs",
    });
    return;
  }

  await todo.update(
    { _id: req.body.id },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo marked as done",
  });
});

app.listen(PORT, () => {
  console.log(`istening to port ${PORT}`);
});
