const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:String,required:true},
    priority:{type:String,required:true},
    description:{type:String,required:true},
},
{ 
    versionKey: false,
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
}
)
const Bookmark = mongoose.model('bookmark',BookmarkSchema);
module.exports  = Bookmark;