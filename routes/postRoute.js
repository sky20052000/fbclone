const express = require("express");
 const router = express.Router();
const postController = require("../controller/postController");
// myprofile
router.post("/newPost", postController.myprofile);
// delete post 
router.delete("/deletePost/:id", postController.deletepost);

// get All Post Data List
router.get("/getAllPost", postController.getAllPost)

module.exports = router;