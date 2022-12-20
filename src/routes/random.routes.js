const express = require('express');
const RandomRouter = express.Router();
RandomRouter.get('/',async(req,res)=>{
    try{
        let arr =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let num = Math.floor(Math.random()*20)
        let word = "";
        for(let i=0;i<num;i++){
            let index = Math.floor(Math.random()*26)
            word += arr[index]
        }
        res.send(word);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})

module.exports = RandomRouter;