const express = require("express");
const router = express.Router();
const fbController  = require("../controller/fbController");

// Register
router.post("/register",fbController.signup);
// Login 
router.post("/login", fbController.userLogin);
// friendList
router.get("/friendList",fbController.friendList)

// friendList data delete by id
router.delete("/friendList/:id", fbController.deleteFriend);


module.exports = router;