const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello this is backend");
})

app.post("/api/chat/",(req,res)=>{
    console.log(res.body);
    res.json({
        message: "Hello from backend"
    })

})

app.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`)
})