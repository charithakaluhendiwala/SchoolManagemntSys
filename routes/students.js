//student page

const express = require("express");
const Studnet = require("../models/student");
const router = express.Router();

const Student = require("../models/student");

router.get("/",async (req,res) => {
    try{
        let student = await Student.find();
        return res.status(200).send(student);
    }catch(e){
        return res.status(500).send("Error " +e);
    }
});

router.get("/:studentid",async (req,res) => {
    try{
        let student = await Student.findById(req.params.studentid);
        return res.status(200).send(student);
    }catch(e){
        return res.status(500).send("Error"+e);
    }
});

router.post("/", async (req,res) => {
    if(!req.body.name){
        return res.status(400).send("Send required values");
    }
    let newstudent = new Student({
        name : req.body.name,
        grade : req.body.grade  
    });
    try{
        newstudent = await newstudent.save();
        return res.status(200).send(newstudent);
    }catch(e){
        return res.status(500).send("Error"+e);
    }
});

router.put("/:studnetid",async (req,res) => {
    let student = await Student.findById(req.params.studnetid);
    if (!student){
        return res.status(400).send("Student you'r looking for not exist");
    }
    try{
        student.set({grade : req.body.grade});

        student = await student.save();
        return res.status(200).send(student);
    }catch(e){
        return res.status(400).send("Error"+e);
    }
});

router.delete("/:studentid" , async (req,res) => {
    let student = await Student.findById(req.params.studentid);
    if (!student){
        return res.status(400).send("Student you'r looking for not exist");
    }
    try{
        await student.deleteOne();
        return res.status(200).send("Deleted");
    }catch(e){
        return res.status(400).send("Error"+e);
    }
})

module.exports = router;