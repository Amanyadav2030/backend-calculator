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
    try{
        console.log(req.body)
        const newProduct =  new Product(req.body);
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