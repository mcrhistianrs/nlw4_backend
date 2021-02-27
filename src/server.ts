import "reflect-metadata";
import express from 'express';
import './database';
const app = express();


app.get("/users" , (req,res) =>{
    return res.json("Rota /users");
});

app.post("/" , (req,res) =>{
    return res.json("Rota / com POST");
});

app.listen(3333 , () =>{
    console.log('Listen on port 3333!');
});