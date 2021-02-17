//Sbject Schema

const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({
    name : String,
    grade : Number
})

const Studnet = mongoose.model ("Student" ,studentSchema);

module.exports=Studnet;