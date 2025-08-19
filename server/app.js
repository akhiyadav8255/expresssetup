import express from "express"

const app = express()

const PORT = 5000

app.get("/", (req,res) => {
    res.send("Hello Global Students");
});

app.get("/login", (req,res) => {
    res.send("This is Login Page");
});

app.get("/meghana", (req,res) => {
    res.send("This is Meghana's Page");
});


// In simple app.get has 2 params
//  Method ==> HTTP Methods GET,POST,PUT,DELETE
// 1. Route ==> "/"
// 2. (req,res)=>{} arrow function

app.listen(PORT, () => {
    console.log("Server is Running");
});