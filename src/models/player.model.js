const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    level:{type:String,required:true}, 
}
)
const Player = mongoose.model('player',PlayerSchema);
module.exports  = Player;