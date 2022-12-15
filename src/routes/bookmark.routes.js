const express = require('express');
const {Bookmark} = require('../models/index.js');
const BookmarkRouter = express.Router();

BookmarkRouter.get('/',async(req,res)=>{
    try{
        const Bookmarks = await Bookmark.find();
        res.send(Bookmarks);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
BookmarkRouter.post('/',async(req,res)=>{
    try{
        console.log(req.body)
        const newBookmark =  new Bookmark(req.body);
        await newBookmark.save();
        res.send(newBookmark);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
BookmarkRouter.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        await Bookmark.findByIdAndDelete(id);
        res.send({msg:"Successfully deleted"});
    } catch (er) {
        console.log(er)
        res.status(500).send(er.message)
    }

})

module.exports = BookmarkRouter;