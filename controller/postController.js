const Post = require("../models/postModel");

const postController = {
 myprofile:async(req,res)=>{
     try{
     const newPost = new Post(req.body);
     const savedPost = await newPost.save();
     console.log(savedPost);
    res.status(201).json({
        message:"new post successfully created",
        data:savedPost
    })
     }catch(err){
         return res.status(500).json({error:err.message});
     }
 },
//// delete post by id
 deletepost:async(req,res)=>{
    try{
     _id = req.params.id;
     const deletePostData = await  Post.findByIdAndDelete(_id);
     console.log(deletePostData);
     if(!deletePostData) {
         return res.status(400).json({msg:"post deleted successfully"})
     }else{
         res.status(200).json({
             message:"you can delete only your post",
             data:deletePostData
         });
     }
     }catch(err){
     return res.status(500).json({error:err.message});  
    }
},

 // get All Post Data List 
 getAllPost:async(req,res)=>{
    try{
      
      const data = await Post.find();
      console.log(data);
      return res.status(200).json({
          message:"success",
          AllPostData:data
      })
    }catch(err){
     return res.status(500).json({error:err.message});  
    }
},
}

module.exports = postController;