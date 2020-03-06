const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    userName: String,
    date: Date, 
    content: String,
    id: String
})
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;