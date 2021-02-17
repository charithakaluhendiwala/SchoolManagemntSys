//subject page

const express = require("express");
const router = express.Router();

const Subject = require ("../models/subject");

router.get("/",async (req,res) => {
    try{
        let subject = await Subject.find();
        return res.send(subject);
    }catch(e){
        return res.status(500).send("Error " +e);
    }
});

router.get("/:subjectid",async (req,res) => {
    try{
        let subject = await Subject.findById(requestedIreq.params.subjectidd);
        return res.send(subject);
    }catch(e){
        return res.status(500).send("Error " +e);
    }
});

router.post("/",async (req,res) => {
        if(!req.body.subject){
            return res.status(400).send("Send all values");
        }
        let newsubject = new Subject({
        subject : req.body.subject,
        teacher : req.body.teacher})
    try{
        newsubject = await newsubject.save();
        return res.send(newsubject);
    }catch(e){
        return res.status(400).send("Error"+e);
    }
})

router.put("/:subjectid",async (req,res) => {
    let requestedId = req.params.subjectid;
    let subject = await Subject.findById(requestedId);
    if(!subject){
        return res.status(400).send("Subject you'r looking for not exist");
    }
    try{
        subject.set({teacher : req.body.teacher});

        subject = await subject.save();
        return res.status(200).send(subject);
    }catch(e){
        return res.status(400).send("Error "+e);
    }
});

router.delete("/:subjectid", async (req,res) => {
    
    let requestedId = req.params.subjectid;
    let subject = await Subject.findById(requestedId);
    if(!subject){
        return res.status(400).send("Subject you'r looking for not exist");
    }
    try{
     await subject.deleteOne();
     return res.send("Deleted");
    }catch(e){
        return res.status(400).send("Error "+e);
    }
});

module.exports = router;