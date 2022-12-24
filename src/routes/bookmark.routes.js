const express = require('express');
const BookmarkRouter = express.Router();
const {TicketModel,UserModel,BookmarkModel} = require('../models/index.js')
BookmarkRouter.get('/',async(req,res)=>{
    try{
        const [id, email, password] = req.headers.token.split(":");
        const user = await UserModel.find({email});
        if(!user){
            res.status(404).send("User not found");
        }
        const bookmarks = await BookmarkModel.find({userId:id}).populate("ticketId");
        res.send(bookmarks);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
BookmarkRouter.post('/',async(req,res)=>{
    try{
        const [id, email, password] = req.headers.token.split(":");
        const user = await UserModel.find({email});
        if(!user){
            res.status(404).send("User not found");
        }
        const bookmark =  new BookmarkModel({...req.body,userId:id});
        await bookmark.save()
        res.send(bookmark)
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})

module.exports = BookmarkRouter;