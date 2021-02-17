//main page

const express = require ("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.send("Welcome to Student Managemnt System");
});

module.exports =router;