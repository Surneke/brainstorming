const data = require("./data.json")
const cors = require("cors")
const express = require("express")
const app = express();
const port = 8000;

app.use(cors());
app.get("/users" , (req,res) => {
    res.status(200).send(data)
});
app.listen(port,()=> {
    console.log(`Listening on port ${port}`)
});
