const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    score:{type:Number,required:true},
    playerId:{ type: mongoose.Schema.Types.ObjectId, ref: "player" }
}
)
const Score = mongoose.model('score',ScoreSchema);
module.exports  = Score;