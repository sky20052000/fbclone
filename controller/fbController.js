const Fb = require("../models/fbModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const fbController = {
  signup:async(req,res)=>{
      try{
        console.log(req.body);
        const {username,email , password} = req.body;
        const user = await Fb.findOne({email});
        if(user){
            return res.status(400).json({msg:"User email already exists"});
        }
        const passwordhash = await bcrypt.hash(password,10)

        const newUser = new Fb({
            username:username,
            email:email,
            password:passwordhash,
        })

        await newUser.save();
        return res.status(201).json({
            message:"User successfully registered",
            data:newUser
        })
      }catch(err){
       return res.status(500).json({error:err.message});
      }
  },

  // login
  userLogin:async(req,res)=>{
      try{
          console.log(req.body);
        const {email, password} = req.body;
        const validate  = validator.isEmail(email);
        if(!validate ){
            return res.status(400).json({msg:"Entered invalid email"});
        }
        const user = await Fb.findOne({email});
        if(!user){
            return res.status(400).json({message:"User email not exists"})
               
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res
              .status(400)
              .json({ errors: { password: "Password deos not matched" } });
          }
          return res.status(200).json({
              message:"user login successfully",
          });
      }catch(err){
        return res.status(500).json({error:err.message});
      }

  },

  // friendList 
   friendList:async(req,res)=>{
       try{
         
         const data = await Fb.find();
         console.log(data);
         return res.status(200).json({
             message:"success",
             friendList:data
         })
       }catch(err){
        return res.status(500).json({error:err.message});  
       }
   },
   deleteFriend:async(req,res)=>{
       try{
        _id = req.params.id;
        const deleteData = await  Fb.findByIdAndDelete(_id);
        console.log(deleteData);
        if(!deleteData) {
            return res.status(400).json({msg:"friend list data successfully deleted"})
        }else{
            res.status(200).json({
                message:" account Deleted Successfully",
                data:deleteData
            });
        }
        }catch(err){
        return res.status(500).json({error:err.message});  
       }
   },
}

module.exports = fbController;