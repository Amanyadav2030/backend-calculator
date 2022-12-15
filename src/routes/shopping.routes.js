const express = require('express');
const {Product} = require('../models/index.js');
const ShoppingRouter = express.Router();

ShoppingRouter.get('/',async(req,res)=>{
    try{
        const products = await Product.find();
        res.send(products);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
ShoppingRouter.post('/',async(req,res)=>{
    let Time = new Date();
    let hour = Time.getHours()
    let minutes = Time.getMinutes()
    let seconds = Time.getSeconds()
    minutes<10?minutes="0"+minutes:""
    seconds<10?seconds="0"+seconds:"";
    let time = `${hour}:${minutes}:${seconds}`
    try{
        console.log(req.body)
        const newProduct =  new Product({...req.body,time});
        await newProduct.save();
        res.send(newProduct);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
ShoppingRouter.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.send({msg:"Successfully deleted"});
    } catch (er) {
        console.log(er)
        res.status(500).send(er.message)
    }

})

module.exports = ShoppingRouter;