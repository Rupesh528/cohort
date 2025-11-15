const express = require('express');
const app = express();
const PORT = 3000;

// app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    console.log(req.params);


    res.send("OK");
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
