const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    category:{type:String,required:true},
    title:{type:String,required:true}, 
    message:{type:String,required:true}, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, 
},{
    versionKey: false,
    timestamps: true
}
)
const TicketModel = mongoose.model('ticket',TicketSchema);
module.exports  = TicketModel;
