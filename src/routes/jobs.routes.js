const express = require('express');
const {Jobs} = require('../models/index.js');
const JobsRouter = express.Router();
JobsRouter.get('/',async(req,res)=>{
    const {page=1,limit=10,sort="asc",filter=""} = req.query;
    try{
        let jobs = await Jobs.find()
        .sort({['postedAt']:sort==="asc"?1:-1}).skip((page-1)*limit).limit(limit);
        if(filter){
            jobs = jobs.filter(el=>el.role==filter)
        }
        res.send(jobs);

    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
JobsRouter.get('/search',async(req,res)=>{
    const {language} = req.body; 
    try{ 
        let jobs = await Jobs.find({ "language" : { "$regex": language , "$options": "i" } })
        res.send(jobs);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
JobsRouter.post('/',async(req,res)=>{
    let Time = new Date();
    let postedAt = `${Time.getFullYear()}-${Time.getMonth()+1}-${Time.getDate()}`
    try{
        const newJob =  new Jobs({...req.body,postedAt});
        await newJob.save();
        res.send(newJob);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})


module.exports = JobsRouter;