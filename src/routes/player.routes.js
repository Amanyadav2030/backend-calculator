const express = require('express');
const {Player,Score} = require('../models/index.js');
const PlayerRouter = express.Router();
PlayerRouter.get('/',async(req,res)=>{
    try{
        let results = await Score.find().populate('playerId');
        res.send(results);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
PlayerRouter.post('/',async(req,res)=>{
    try{
        const newPlayer =  new Player(req.body);
        await newPlayer.save();
        res.send(newPlayer);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
PlayerRouter.post('/score',async(req,res)=>{
    try{
        const newPlayer =  new Score(req.body);
        await newPlayer.save();
        res.send(newPlayer);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})


module.exports = PlayerRouter;