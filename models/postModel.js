const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    
    video: {
        type: String,
      },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = new mongoose.model("Post", PostSchema);
module.exports = Post;