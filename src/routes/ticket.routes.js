const express = require('express');
const TicketRouter = express.Router();
const {TicketModel,UserModel} = require('../models/index.js')
TicketRouter.get('/',async(req,res)=>{
    try{
        const [id, email, password] = req.headers.token.split(":");
        const user = await UserModel.find({email});
        if(!user){
            res.status(404).send("User not found");
        }
        const tickets = await TicketModel.find({userId:id});
        res.send(tickets);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
TicketRouter.post('/',async(req,res)=>{
    try{
        const [id, email, password] = req.headers.token.split(":");
        const user = await UserModel.find({email});
        if(!user){
            res.status(404).send("User not found");
        }
        const ticket =  new TicketModel({...req.body,userId:id});
        await ticket.save()
        res.send(ticket)
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})

module.exports = TicketRouter;