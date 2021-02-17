const express = require ("express");
const mongoose = require ("mongoose");
const app = express();
PORT = 3000;

//create database

const connectDb = async () => {
    try{
        await mongoose.connect("mongodb://localhost/schoolDb",{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log("Connected to DB");
    }catch(err){
        console.log("Error "+err);
    }
};

connectDb();

//import routes
const main = require ("./routes/main");
const students = require ("./routes/students");
const subjects  = require ("./routes/subjects");

//when passing JSON object from cliend
app.use(express.json());

app.listen(PORT);

app.use("/",main);
app.use("/api/students",students);
app.use("/api/subjects",subjects);


