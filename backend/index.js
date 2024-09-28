const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MongoDB = require("./db")
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.get("/",(req,res)=>{
    res.send("Server working 🔥" + port)
});

const port = process.env.PORT || 5000;

app.listen (port, ()=> `Server running on port 🔥`);