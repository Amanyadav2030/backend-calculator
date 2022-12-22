const express = require('express');
const QuestionRouter = express.Router();
const {Question} = require('../models/index.js')
QuestionRouter.get('/',async(req,res)=>{
    try{
        const {difficulty='easy',category='Sports',limit=5} = req.query;
        const questions = await Question.find({difficulty,category}).limit(limit)
        res.send(questions);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
QuestionRouter.post('/',async(req,res)=>{

    try{
        let res = await fetch('https://opentdb.com/api.php?amount=10&category=9');
        let {results} =await res.json();
        for(let a of  results){
            const question =  new Question(a);
            await question.save()
        }
        res.send("done");
        res.send(question)
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})

module.exports = QuestionRouter;