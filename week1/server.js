const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.all('/', (req, res) => {
    console.log(req.headers);
    res.send("OK");
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
