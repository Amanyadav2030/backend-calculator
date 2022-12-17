const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
    company:{type:String,required:true},
    postedAt:{type:String,required:true},
    city:{type:String,required:true},
    location:{type:String,required:true},
    level:{type:String,required:true}, 
    role:{
        type:String,
        enum:["FullStack","Frontend","Backend"]
    },
    contract:{
        type:String,
        enum:["Full Time","Part Time"]
    },
    position:{
        type:String,
        enum:['Backend Developer',"Junior Frontend Developer","Junior Backend Developer","FSD"]
    },
    language:{type:String,required:true},
}
)
const Jobs = mongoose.model('jobs',JobsSchema);
module.exports  = Jobs;