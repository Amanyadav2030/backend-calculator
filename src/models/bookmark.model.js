const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
    ticketId:{type: mongoose.Schema.Types.ObjectId, ref: "ticket"},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, 
}
)
const BookmarkModel = mongoose.model('bookmark',BookmarkSchema);
module.exports  = BookmarkModel;
