const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    date: Date, 
    image: String,
    userName: String,
    tags: Array,
    likes: Number,
    comments: {}
})
const Post = mongoose.model("Post", postSchema);

module.exports = Post;